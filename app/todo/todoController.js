'use strict';
angular.module('todoApp.todo', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/todo', {
    templateUrl: 'todo/todo.html',
    controller: 'todoController as vm'
  });
}])

.controller('todoController', ["$http",function($http) {
  var vm = this;
  vm.sortType     = 'text'; // set the default sort type
	vm.sortReverse  = false;  // set the default sort order
	vm.query   = '';     // set the default search/filter term
  vm.archive = Archive;
  vm.addTodo = AddToDo;
  vm.remaining = TasksRemaining;

  $http.get('json/tasks.json').success(function(data) {
      vm.todos = data;
  });
	
 	// Create a new to-do
  function AddToDo() {
      vm.todos.push({text:vm.todoText, done:false});
      vm.todoText = '';
    };
 
    // How many tasks are remaining in the count
	function TasksRemaining() {
      var count = 0;
        angular.forEach(vm.todos, function(todo) {
           count += todo.done ? 0 : 1; // converts true 0 and false 1
        });
	    return count;
    };
 
 	// Remove any todos that have been done
   function Archive () {
      var oldTodos = vm.todos;
      vm.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) vm.todos.push(todo);
      });
    };
}]);