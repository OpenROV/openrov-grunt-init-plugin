(function (window, $, undefined) {
    'use strict';

    var {%= name %};

    {%= name %} = function {%= name %}(cockpit) {
        console.log("Loading {%= name %} plugin in the browser.");

        // Instance variables
        this.cockpit = cockpit;

    //example keyboard hook
    /*
    this.cockpit.emit('inputController.register',
      {
        name: "{%= name %}.keyBoardMapping",
        description: "Example for keymapping.",
        defaults: { keyboard: 'alt+0', gamepad: 'X' },
        down: function() { console.log('0 down'); },
        up: function() { console.log('0 up'); },
        secondary: [
          {
            name: "{%= name %}.keyBoardMappingDepdent",
            dependency: "{%= name %}.keyBoardMapping",
            defaults: { keyboard: '9', gamepad: 'RB' },
            down: function() { console.log('####'); }
          }
        ]
      });
    */

    // for plugin management:
    this.name = '{%= name %}';   // for the settings
    this.viewName = '{%= name %} plugin'; // for the UI
    this.canBeDisabled = true; //allow enable/disable
    this.enable = function () {
      alert('{%= name %} enabled');
    };
    this.disable = function () {
      alert('{%= name %} disabled');
    };
  };

  //This will be called by the input manager automatically
  {%= name %}.prototype.listen = function listen() {
    var rov = this;

    //This example will put an entry in the pop-up Heads Up Menu
    /*
    var item = {
      label: ko.observable("{%= name %} menu"),
      callback: function () {
        alert('{%= name %} menu item');
        item.label(this.label() + " Foo Bar");
      }
    };
    rov.cockpit.emit('headsUpMenu.register', item);
    */

  };

    window.Cockpit.plugins.push({%= name %});

}(window, jQuery));
