var express       = require('express')
var bodyParser    = require("body-parser")
var app           = express()
var http          = require('http').Server(app)
var _             = require('lodash')
var compression   = require('compression')

app.use(compression({
  filter: function (req, res) {
    return true;
  }
}))
app.use(express.static('www', { maxAge: 14*86400000 }))
app.use( bodyParser.json() )
app.use(bodyParser.urlencoded({
  extended: true
}))
http.listen(process.env.PORT || 3000)

var language = require('./language')()
var helpers  = require('./helpers')()
var routes   = require('./routes')(app)

global.AppConfig = require('./config/app_config')

general_Helper.serverStarted()
