// require userHandler, listHandler
var userHandler = require('../users/userHandler.js')
var listHandler = require('../lists/listHandler.js')

// export function
module.exports = function (app, express) {
  // TODO:  Coordinate with frontend on
  //        the request url names ('/api/...')

  // POST - signin
  app.post('/api/signin', userHandler.signin)
  // POST - signup
  app.post('/api/signup', userHandler.signup)

  // POST - addList
  app.post('/api/lists', listHandler.addList)
  // GET - getList (single list)
  app.get('/api/list/:id', listHandler.getOneList)
  // GET - getLists (users lists)
  app.get('/api/lists/:id', listHandler.getLists)
  // PUT - for updating list
  app.put('/api/lists', listHandler.updateList)
  // DELETE - deletes a single list
  app.delete('/api/lists/:id', listHandler.deleteList)
  // GET - getAllLists
  app.get('/api/crowd', listHandler.getAllLists)
  // GET - getJobs (users accepted jobs)
  app.get('/api/jobs/:id', listHandler.getJobs)
  // POST - getJobs (user updates job when completed)
  app.post('/api/jobs', listHandler.updateJobStatus)
  // POST - updateStatus (reflects when jobs/lists are assigned)
  app.post('/api/status', listHandler.updateStatus)

  // Will probably need more routes over time
}
