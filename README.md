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

To prepare the plugin for release, executing all necessary steps, run:

```sh
npm run all
```

## Extending the plugin

To extend or modify the functionality and ui, feel free to implement another plugin next to this one!

This package provides a js api to enhance the development process of extensions. Simply add this package as a dependency via your package manager to consume the api.

```js
import CodeEditorApi from 'camunda-modeler-code-editor/lib';
```

### Support additional fields

To support additional fields to be editable using the editor interface, all you'll need to do is to register your implementation via `registerType`.

```js
import { registerType } from 'camunda-modeler-code-editor/lib';
registerType('bpmn:ScriptTask', ScriptTask); 
```

The implementation should align to the following structure:

```js
{
    properties: {
        entrySelector,  // (element, groups) => array of entries
        entryDecorator, // (element, entry, openElement) => void
    },
    search: {
        toSearchables   // (element) => array of moddle elements
    },
    accessors: {
        getLanguage,    // (moddle element) => string
        getValue,       // (moddle element) => string
        setValue,       // (modifyElement, element, moddle element, value) => void
    },
}
```

### Custom Editor

To integrate a custom editor implementation, all you'll need to do is to register your implementation via `registerEditor` or `registerDefaultEditor`.

```js
import { registerEditor } from 'camunda-modeler-code-editor/lib';
registerEditor('JavaScript', JavaScriptEditor);
```

The editor implementation should be a `React` component which consumes the following properties:

```js
{
    element,        // the current bpmn element
    moddleElement,  // the current specific moddle element
    language,       // the current script language which is most likely only important for editors that support multiple
    value,          // the current script value
    onChange,       // function to call when the value was changed within the editor
}
```

For reference, have a look on the default editor implementation: [Default Code Editor](./client/components/DefaultCodeEditor.js)

> [!IMPORTANT]
> This library dependency does not include runtime code. This, you'll need to have this plugin nex to your custom implementation.

## Licence

MIT
