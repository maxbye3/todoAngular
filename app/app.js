'use strict';

// Declare app level module which depends on views, and components
angular.module('todoApp', [
  'ngRoute',
  'todoApp.todo',
  'todoApp.contact',
  'todoApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/todo'});
}]);
