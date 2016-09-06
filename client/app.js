// create the crowdcart app
angular.module("crowdcart", [
  // "crowdcart.auth",
  // "crowdcart.lists",
  "crowdcart.services",
  "ngRoute"
])

//config/routing
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
    .when('/signin', {
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })
    .when('/signup', {
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })
    .when('/mylists', {
      templateUrl: 'lists/mylists.html',
      controller: 'ListsController',
      authenticate: true
    })
    .otherwise({
      redirectTo: '/'
    });
    
    $httpProvider.interceptors.push('AttachTokens');

})

.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem('crowdcarttoken');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})

// run directive