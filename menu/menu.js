module.exports = function(electronApp, menuState) {
  return [
    {
      label: 'Configure Code Editor',
      accelerator: 'CommandOrControl+Shift+C',
      enabled: true,
      action: function() {
        electronApp.emit('menu:action', 'open-code-editor-configuration');
      }
    }
  ];
};
