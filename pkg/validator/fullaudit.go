package validator

import (
	"bytes"
	"fmt"
	"io"
	"io/ioutil"
	"os"
	"time"

	conf "github.com/fairwindsops/polaris/pkg/config"
	"github.com/fairwindsops/polaris/pkg/kube"

	"github.com/sirupsen/logrus"
	apiMachineryYAML "k8s.io/apimachinery/pkg/util/yaml"
)

// RunAudit runs a full Polaris audit and returns an AuditData object
func RunAudit(config conf.Configuration, kubeResources *kube.ResourceProvider, onlyShowFailedTests bool) (AuditData, error) {
	displayName := config.DisplayName
	if displayName == "" {
		displayName = kubeResources.SourceName
	}

	results := []Result{}
	for _, resources := range kubeResources.Resources {
		kindResults, err := ApplyAllSchemaChecksToAllResources(&config, resources)
		if err != nil {
			return AuditData{}, err
		}
		results = append(results, kindResults...)
	}

	auditData := AuditData{
		PolarisOutputVersion: PolarisOutputVersion,
		AuditTime:            kubeResources.CreationTime.Format(time.RFC3339),
		SourceType:           kubeResources.SourceType,
		SourceName:           kubeResources.SourceName,
		DisplayName:          displayName,
		ClusterInfo: ClusterInfo{
			Version:     kubeResources.ServerVersion,
			Nodes:       len(kubeResources.Nodes),
			Namespaces:  len(kubeResources.Namespaces),
			Controllers: kubeResources.Resources.GetNumberOfControllers(),
		},
		Results: results,
	}
	auditData.Score = auditData.GetSummary().GetScore()
	if onlyShowFailedTests {
		auditData.RemoveSuccessfulResults()
	}
	return auditData, nil
}

// ReadAuditFromFile reads the data from a past audit stored in a JSON or YAML file.
func ReadAuditFromFile(fileName string) AuditData {
	auditData := AuditData{}
	oldFileBytes, err := ioutil.ReadFile(fileName)
	if err != nil {
		logrus.Errorf("Unable to read contents of loaded file: %v", err)
		os.Exit(1)
	}
	auditData, err = ParseAudit(oldFileBytes)
	if err != nil {
		logrus.Errorf("Error parsing file contents into auditData: %v", err)
		os.Exit(1)
	}
	return auditData
}

// ParseAudit decodes either a YAML or JSON file and returns AuditData.
func ParseAudit(oldFileBytes []byte) (AuditData, error) {
	reader := bytes.NewReader(oldFileBytes)
	conf := AuditData{}
	d := apiMachineryYAML.NewYAMLOrJSONDecoder(reader, 4096)
	for {
		if err := d.Decode(&conf); err != nil {
			if err == io.EOF {
				return conf, nil
			}
			return conf, fmt.Errorf("Decoding config failed: %v", err)
		}
	}
}
