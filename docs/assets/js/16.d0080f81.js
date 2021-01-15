(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{372:function(e,t,r){"use strict";r.r(t);var a=r(42),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"contributing"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#contributing"}},[e._v("#")]),e._v(" Contributing")]),e._v(" "),r("p",[e._v("Issues, whether bugs, tasks, or feature requests are essential for keeping Polaris great. We believe it should be as easy as possible to contribute changes that get things working in your environment. There are a few guidelines that we need contributors to follow so that we can keep on top of things.")]),e._v(" "),r("h2",{attrs:{id:"code-of-conduct"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#code-of-conduct"}},[e._v("#")]),e._v(" Code of Conduct")]),e._v(" "),r("p",[e._v("This project adheres to a "),r("RouterLink",{attrs:{to:"/code-of-conduct.html"}},[e._v("code of conduct")]),e._v(". Please review this document before contributing to this project.")],1),e._v(" "),r("h2",{attrs:{id:"sign-the-cla"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sign-the-cla"}},[e._v("#")]),e._v(" Sign the CLA")]),e._v(" "),r("p",[e._v("Before you can contribute, you will need to sign the "),r("a",{attrs:{href:"https://cla-assistant.io/fairwindsops/polaris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Contributor License Agreement"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"project-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#project-structure"}},[e._v("#")]),e._v(" Project Structure")]),e._v(" "),r("p",[e._v("Polaris is built on top of "),r("a",{attrs:{href:"https://github.com/kubernetes-sigs/controller-runtime",target:"_blank",rel:"noopener noreferrer"}},[e._v("controller-runtime"),r("OutboundLink")],1),e._v(". It can run in 3 different modes, a dashboard, a webhook, or a reporter that prints or exports validation results. All of these modes make use of the shared "),r("code",[e._v("validator")]),e._v(" and "),r("code",[e._v("config")]),e._v(" packages. Adding new validations is possible by only making additions to those packages.")]),e._v(" "),r("h2",{attrs:{id:"getting-started"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),r("p",[e._v("We label issues with the "),r("a",{attrs:{href:"https://github.com/FairwindsOps/polaris/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22",target:"_blank",rel:"noopener noreferrer"}},[e._v('"good first issue" tag'),r("OutboundLink")],1),e._v(" if we believe they'll be a good starting point for new contributors. If you're interested in working on an issue, please start a conversation on that issue, and we can help answer any questions as they come up.")]),e._v(" "),r("h2",{attrs:{id:"setting-up-your-development-environment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-your-development-environment"}},[e._v("#")]),e._v(" Setting Up Your Development Environment")]),e._v(" "),r("h3",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("ul",[r("li",[e._v("A properly configured Golang environment with Go 1.11 or higher")]),e._v(" "),r("li",[e._v("If you want to see the local changes you make on a Polaris dashboard, you will need access to a Kubernetes cluster defined in "),r("code",[e._v("~/.kube/config")])])]),e._v(" "),r("h3",{attrs:{id:"installation"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),r("ul",[r("li",[e._v("Install the project with "),r("code",[e._v("go get github.com/fairwindsops/polaris")])]),e._v(" "),r("li",[e._v("Change into the polaris directory which is installed at "),r("code",[e._v("$GOPATH/src/github.com/fairwindsops/polaris")])]),e._v(" "),r("li",[e._v("See the dashboard with "),r("code",[e._v("go run main.go dashboard")]),e._v(", then open http://localhost:8080/")]),e._v(" "),r("li",[e._v("See the audit data  "),r("code",[e._v("go run main.go audit")]),e._v(". This command shows the audit information on the command line.")])]),e._v(" "),r("h2",{attrs:{id:"running-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#running-tests"}},[e._v("#")]),e._v(" Running Tests")]),e._v(" "),r("p",[e._v("The following commands are all required to pass as part of Polaris testing:")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("go list ./... | grep -v vendor | xargs golint -set_exit_status\ngo list ./... | grep -v vendor | xargs go vet\ngo test ./pkg/... -v -coverprofile cover.out\n")])])]),r("h2",{attrs:{id:"creating-a-new-issue"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-issue"}},[e._v("#")]),e._v(" Creating a New Issue")]),e._v(" "),r("p",[e._v("If you've encountered an issue that is not already reported, please create a "),r("a",{attrs:{href:"https://github.com/FairwindsOps/polaris/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("new issue"),r("OutboundLink")],1),e._v(", choose "),r("code",[e._v("Bug Report")]),e._v(", "),r("code",[e._v("Feature Request")]),e._v(" or "),r("code",[e._v("Misc.")]),e._v(" and follow the instructions in the template.")]),e._v(" "),r("h2",{attrs:{id:"creating-a-pull-request"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-pull-request"}},[e._v("#")]),e._v(" Creating a Pull Request")]),e._v(" "),r("p",[e._v("Each new pull request should:")]),e._v(" "),r("ul",[r("li",[e._v("Reference any related issues")]),e._v(" "),r("li",[e._v("Add tests that show the issues have been solved")]),e._v(" "),r("li",[e._v("Pass existing tests and linting")]),e._v(" "),r("li",[e._v("Contain a clear indication of if they're ready for review, or a work in progress")]),e._v(" "),r("li",[e._v("Be up to date and/or rebased on the master branch")])]),e._v(" "),r("h2",{attrs:{id:"creating-a-new-release"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-new-release"}},[e._v("#")]),e._v(" Creating a new release")]),e._v(" "),r("h3",{attrs:{id:"patch-releases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#patch-releases"}},[e._v("#")]),e._v(" Patch releases")]),e._v(" "),r("p",[e._v("Patch releases only need to change this repo. The Helm chart and deploy scripts\nwill automatically pull in the latest changes.")]),e._v(" "),r("p",[e._v("If the release involves changes to anything in the "),r("code",[e._v("deploy/")]),e._v(" folder (e.g. new RBAC permissions),\nit needs to be a minor or major release in order to prevent breaking the Helm chart.")]),e._v(" "),r("ol",[r("li",[e._v("Create a PR for this repo\n"),r("ol",[r("li",[e._v("Bump the version number in:\n"),r("ol",[r("li",[e._v("main.go")]),e._v(" "),r("li",[e._v("README.md")])])]),e._v(" "),r("li",[e._v("Update CHANGELOG.md")]),e._v(" "),r("li",[e._v("Merge your PR")])])]),e._v(" "),r("li",[e._v("Tag the latest branch for this repo\n"),r("ol",[r("li",[e._v("Pull the latest commit for the "),r("code",[e._v("master")]),e._v(" branch (which you just merged in your PR)")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("git tag $VERSION && git push --tags")])]),e._v(" "),r("li",[e._v("Make sure CircleCI runs successfully for the new tag - this will push images to quay.io and create a release in GitHub\n"),r("ol",[r("li",[e._v("If CircleCI fails, check with Codeowners ASAP")])])])])])]),e._v(" "),r("h3",{attrs:{id:"minor-major-releases"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#minor-major-releases"}},[e._v("#")]),e._v(" Minor/Major releases")]),e._v(" "),r("p",[e._v("Minor and major releases need to change both this repository and the\n"),r("a",{attrs:{href:"https://github.com/FairwindsOps/charts/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm chart repo"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("The steps are:")]),e._v(" "),r("ol",[r("li",[e._v("Modify the "),r("a",{attrs:{href:"https://github.com/FairwindsOps/charts/stable/polaris",target:"_blank",rel:"noopener noreferrer"}},[e._v("Helm chart"),r("OutboundLink")],1),e._v(" "),r("ol",[r("li",[e._v("Clone the helm charts repo\n"),r("ol",[r("li",[r("code",[e._v("git clone https://github.com/FairwindsOps/charts")])]),e._v(" "),r("li",[r("code",[e._v("git checkout -b yourname/update-polaris")])])])]),e._v(" "),r("li",[e._v("Bump the version number in "),r("code",[e._v("stable/polaris/Chart.yaml")])]),e._v(" "),r("li",[e._v("Make any necessary changes to the chart to support the new version of Polaris (e.g. new RBAC permissions)")]),e._v(" "),r("li",[r("strong",[e._v("Don't merge yet!")])])])]),e._v(" "),r("li",[e._v("Create a PR for this repo\n"),r("ol",[r("li",[e._v("Create a new branch named "),r("code",[e._v("yourname/update-version")])]),e._v(" "),r("li",[e._v("Bump the version number in:\n"),r("ol",[r("li",[e._v("main.go")]),e._v(" "),r("li",[e._v("README.md")])])]),e._v(" "),r("li",[e._v("Regenerate the deployment files. Assuming you've cloned the charts repo to "),r("code",[e._v("~/git/charts")]),e._v(":\n"),r("ol",[r("li",[r("code",[e._v("CHARTS_DIR=~/git/charts ./scripts/generate-deployment-files.sh")])])])]),e._v(" "),r("li",[e._v("Update CHANGELOG.md")]),e._v(" "),r("li",[e._v("Merge your PR")])])]),e._v(" "),r("li",[e._v("Tag the latest branch for this repo\n"),r("ol",[r("li",[e._v("Pull the latest for the "),r("code",[e._v("master")]),e._v(" branch")]),e._v(" "),r("li",[e._v("Run "),r("code",[e._v("git tag $VERSION && git push --tags")])]),e._v(" "),r("li",[e._v("Make sure CircleCI runs successfully for the new tag - this will push images to quay.io and create a release in GitHub\n"),r("ol",[r("li",[e._v("If CircleCI fails, check with Codeowners ASAP")])])])])]),e._v(" "),r("li",[e._v("Create and merge a PR for your changes to the Helm chart")])])])}),[],!1,null,null,null);t.default=s.exports}}]);