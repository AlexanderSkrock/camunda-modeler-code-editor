# Camunda Modeler Code Editor

[![Compatible with Camunda Modeler version 5](https://img.shields.io/badge/Modeler_Version-5.0.0+-blue.svg)](#) [![Plugin Type](https://img.shields.io/badge/Plugin_Type-BPMN-orange.svg)](#)

This plugin aims to simplify the development of scripts without the need for external tools.

## Development setup

Use [npm](https://www.npmjs.com/), the [Node.js](https://nodejs.org/en/) package manager to download and install required dependencies:

```sh
npm install
```

To make the Camunda Modeler aware of your plugin you must link the plugin to the [Camunda Modeler plugin directory](https://github.com/camunda/camunda-modeler/tree/develop/docs/plugins#plugging-into-the-camunda-modeler) via a symbolic link.
Available utilities to do that are [`mklink /d`](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/mklink) on Windows and [`ln -s`](https://linux.die.net/man/1/ln) on MacOS / Linux.

Re-start the app in order to recognize the newly linked plugin.

Alternatively, if you prefer not to modify your local Camunda Modeler installation, you can run the following to have a preconfigured distribution provisioned. If you choose to use this, no manual linking is required.

```sh
npm run provision
```

## Building the plugin

You may spawn the development setup to watch source files and re-build the client plugin on changes:

```sh
npm run dev
```

Given you've setup and linked your plugin [as explained above](#development-setup), you should be able to reload the modeler to pick up plugin changes. To do so, open the app's built in development toos via `F12`. Then, within the development tools press the reload shortcuts `CTRL + R` or `CMD + R` to reload the app.

## Extending the plugin

To extend or modify the functionality and ui, feel free to implement another plugin next to this one!

This package provides a js api to enhance the development process of extensions. Simply add this package as a dependency via your package manager to consume the api.

```js
import CodeEditorApi from '@camunda-modeler-code-editor/api';
```

> [!IMPORTANT]
> This library dependency does not include runtime code. Thus, you'll need to have this plugin next to your custom implementation.

### Custom editors

To integrate a custom editor implementation, all you'll need to do is to register your implementation via `registerEditor` or `registerDefaultEditor`.

```js
import { registerEditor } from '@camunda-modeler-code-editor/api';
registerEditor('JavaScript', JavaScriptEditor);
```

The editor implementation should be a `React` component which consumes the following properties:

```js
{
    key,            // a key attribute that is different for all editor instances, e. g. for ace editors you'll need to provide unique names
    element,        // the current bpmn element
    moddleElement,  // the current specific moddle element
    type,           // the type this moddle element belongs to, e. g. for scripts it can be an execution listener or a task listener
    scope,          // contextual information provided by scope providers implementation, could contain available variables for example
    language,       // the current script language which is most likely only important for editors that support multiple
    value,          // the current script value
    onValueChange,  // function to call when the value was changed within the editor
}
```

For reference, have a look on the default editor implementation: [Default Code Editor](./client/components/DefaultCodeEditor.js)

### Additional types

When you feel that another property or moddle element should be editable within the code editor, you are welcome to raise an issue or implement it for yourself.

To achieve this, you can call the following library method:

```js
import { registerEditableType } from '@camunda-modeler-code-editor/api';
registerEditableType(InputParameter);
```

A so-called editable type needs to provide two properties:

```js
{
    properties,     // the properties provider function to integrate with the properties panel
    search,         // the search implementation for integration in the open dialog
}
```

In addition, you may need to implement an accessor. An Accessor tells this plugin how it can read and modify properties. For a couple moddle element types, there already exists such an implementation.

```js
import { registerAccessor } from '@camunda-modeler-code-editor/api';
registerAccessor(ScriptAccessor);
```

You'll have to align with following structure:

```js
{
    getLanguage,    // function to retrieve the language for a given moddle element
    getValue,       // function to retrieve the value for a given moddle element
    setValue,       // function to modify the value for this moddle element
}
```

### Extend provided scope

```js
import { registerScopeProvider } from 'camunda-modeler-code-editor/lib';
registerScopeProvider('scope-variables', ScopeVariablesProvider);
```

### Bundle your own distribution

Instead of using the afore described extension points to add functionality you can also use the `@camunda-modeler-code-editor/plugin-base` and optionally `@camunda-modeler-code-editor/config-default` to create your own plugin artifact tailored to your needs. Currently the ui code from `@camunda-modeler-code-editor/plugin-base` is barely customizable but this might change in the future.

## Licence

MIT
