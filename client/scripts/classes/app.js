function App() {}

App.prototype.init = function(){
  Framework.init()
  $('#app').html(Framework.loadTemplate('helloTemplate'))
}

global.App = module.exports = App