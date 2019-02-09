// require express, mongoose, middleware, routes
var express = require('express')
var middleware = require('./config/middleware.js')
var routes = require('./config/routes.js')

// start express
var app = express()

// set middleware
middleware(app, express)

// set routes
routes(app, express)

// export app
module.exports = app
