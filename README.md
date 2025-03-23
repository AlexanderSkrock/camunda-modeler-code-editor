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

To provide a custom editor ui feel free to implement another plugin next to this one.

You need to listen to the `code-editor.open` which has the following structure:

```json
{
  "element": {},
  "language": "",
  "value": ""
}
```
It is important that, in case you decide to handle the event, that the stopPropagation function is called on the event, to prevent multiple code editor to pop up.

When the user finished editing the code you'll need to fire the `code-editor.close` event with the following data:

```json
{
  "element": {},
  "language": "",
  "value": ""
}
```

To simplify event consumption, have a look on [useCodeEditorEvents](./lib/hooks/useCodeEditorEvents.js) and its usage within [CodeEditorExtension](./client/CodeEditorExtension.js).

## Licence

MIT
