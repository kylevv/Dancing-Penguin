var pkg = require('../../package.json')
var userHandler = require('../users/userHandler.js')
var listHandler = require('../lists/listHandler.js')

module.exports = function (app, express) {
  app.post('/api/signin', userHandler.signin)
  app.post('/api/signup', userHandler.signup)

  // add single list
  app.post('/api/lists', listHandler.addList)
  // get single list
  app.get('/api/list/:id', listHandler.getOneList)
  // git all lists
  app.get('/api/lists/:id', listHandler.getLists)
  // update single list
  app.put('/api/lists', listHandler.updateList)
  // delete single list
  app.delete('/api/lists/:id', listHandler.deleteList)
  // get all lists
  app.get('/api/crowd', listHandler.getAllLists)

  // get all of single user's accepted jobs
  app.get('/api/jobs/:id', listHandler.getJobs)
  // update single job when complete
  app.post('/api/jobs', listHandler.updateJobStatus)
  // update status of job/list when assigned
  app.post('/api/status', listHandler.updateStatus)

  // identify current version of app
  app.get('/version', function (req, res) {
    res.json({ version: pkg.version })
  })
}
