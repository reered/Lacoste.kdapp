class LacosteMainView extends KDView

  constructor:(options = {}, data)->
    options.cssClass = 'lacoste main-view'
    super options, data

  viewAppended:->
    @addSubView new KDView
      partial  : "Welcome to Lacoste app!"
      cssClass : "welcome-view"

class LacosteController extends AppController

  constructor:(options = {}, data)->
    options.view    = new LacosteMainView
    options.appInfo =
      name : "Lacoste"
      type : "application"

    super options, data

do ->

  # In live mode you can add your App view to window's appView
  if appView?

    view = new LacosteMainView
    appView.addSubView view

  else

    KD.registerAppClass LacosteController,
      name     : "Lacoste"
      routes   :
        "/:name?/Lacoste" : null
        "/:name?/Apps/dicle/Lacoste/run" : null
      dockPath : "/Apps/dicle/Lacoste/run"
      behavior : "application"