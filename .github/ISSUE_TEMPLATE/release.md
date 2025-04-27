---
title: "Release {{ env.VERSION }}"
assignees: "AlexanderSkrock"
labels: ""
---
Please approve to release version ${{ inputs.version }}!

Have a look on the following artifacts:

{{ env.ARTIFACTS }}

In case you observe any missbehaviour or bugs, please comment and create a follow up issue. After all issue are resolved, 
you can create new artifacts using a GitHub Action: [Create Plugin Artifacts](https://github.com/AlexanderSkrock/camunda-modeler-code-editor/actions/workflows/create-plugin-artifacts.yml).

When everything seems alright, use another Github Action: [Release a version](https://github.com/AlexanderSkrock/camunda-modeler-code-editor/actions/workflows/release-version.yml). This will handle any follow-up tasks such as tagging the current state and publishing to any package repositories.


Checklist:
- [ ] Plugin artifacts are up to date
- [ ] Plugins could be installed into the current Camunda Desktop Modeler version
- [ ] All core functionality was usable as expected (open editor, search for elements, save changes)