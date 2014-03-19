/* Compiled by kdc on Wed Mar 19 2014 22:10:13 GMT+0000 (UTC) */
(function() {
/* KDAPP STARTS */
/* BLOCK STARTS: /home/dicle/Applications/Lacoste.kdapp/index.coffee */
var LacosteController, LacosteMainView,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

LacosteMainView = (function(_super) {
  __extends(LacosteMainView, _super);

  function LacosteMainView(options, data) {
    if (options == null) {
      options = {};
    }
    options.cssClass = 'lacoste main-view';
    LacosteMainView.__super__.constructor.call(this, options, data);
  }

  LacosteMainView.prototype.viewAppended = function() {
    return this.addSubView(new KDView({
      partial: "Welcome to Lacoste app!",
      cssClass: "welcome-view"
    }));
  };

  return LacosteMainView;

})(KDView);

LacosteController = (function(_super) {
  __extends(LacosteController, _super);

  function LacosteController(options, data) {
    if (options == null) {
      options = {};
    }
    options.view = new LacosteMainView;
    options.appInfo = {
      name: "Lacoste",
      type: "application"
    };
    LacosteController.__super__.constructor.call(this, options, data);
  }

  return LacosteController;

})(AppController);

(function() {
  var view;
  if (typeof appView !== "undefined" && appView !== null) {
    view = new LacosteMainView;
    return appView.addSubView(view);
  } else {
    return KD.registerAppClass(LacosteController, {
      name: "Lacoste",
      route: "/:name?/Lacoste",
      dockPath: "/Apps/dicle/Lacoste/run",
      behavior: "application",
      menu: {
        items: [
          {
            title: "Create a new App",
            eventName: "create"
          }, {
            type: "separator"
          }, {
            title: "Save",
            eventName: "save"
          }, {
            title: "Save All",
            eventName: "saveAll"
          }, {
            title: "Close All",
            eventName: "closeAll"
          }
        ]
      }
    });
  }
})();

/* KDAPP ENDS */
}).call();