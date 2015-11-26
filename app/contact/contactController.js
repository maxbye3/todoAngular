'use strict';

angular.module('todoApp.contact', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/contact', {
    templateUrl: 'contact/contact.html',
    controller: 'contactController'
  });
}])

.controller('contactController', [function() {
  	    var vm = this;
	    vm.name = 'Max Bye';
		  vm.siteName = 'Mr Moonhead';
		  vm.siteHref = 'http://mrmoonhead.com/home'; 	
	    vm.result = 'hidden';
	    vm.resultMessage;
	    vm.formData; //formData is an object holding the name, email, subject, and message
	    vm.submitButtonDisabled = false;
	    vm.submitted = false; //used so that form errors are shown only after the form has been submitted
	    vm.submit = function(contactform) {
			
			   debugger;
						   
	           vm.submitted = true;
	           vm.submitButtonDisabled = true; 
			   
			   console.log(vm.formData);

	    if (contactform.$valid) {    
	           $http({
	                   method  : 'POST',
	                   url     : 'test.js',
	                   data    : $.param(vm.formData),  //param method from jQuery
	                   headers : { 'Content-Type': 'application/x-www-form-urlencoded' }//set the headers so angular passing info as form data (not request payload)
	               }).success(function(data){
	                   console.log(data);
	                   if (data.success) { //success comes from the return json object
	                       vm.submitButtonDisabled = true;
	                       vm.resultMessage = data.message;
	                       vm.result='bg-success';
	                   } else {
	                       vm.submitButtonDisabled = false;
	                       vm.resultMessage = data.message;
	                       vm.result='bg-danger';
	                   }
	               });
	      } 
	      else {
	               vm.submitButtonDisabled = false;
	               vm.resultMessage = 'Failed. Please fill out all the fields.';
	               vm.result='bg-danger';
	           }  
	       };
}]);