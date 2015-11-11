(function(){
	'use strict'
	angular.module('app').controller('PinInfoController', PinInfoController);
	PinInfoController.$inject = ['$stateParams', '$state', 'HomeFactory', 'UserFactory', '$timeout']

	function PinInfoController($stateParams, $state, HomeFactory, UserFactory, $timeout){
		var vm = this;
		
	}
})();