'use strict';

describe('todoApp.todo module', function() {

  beforeEach(module('todoApp.todo'));

  describe('todo controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var TodoListController = $controller('TodoListController');
      expect(TodoListController).toBeDefined();
    }));

  });
});