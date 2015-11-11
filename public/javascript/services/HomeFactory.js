(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q', '$rootScope'];

	function HomeFactory($http, $q, $rootScope) {
		var o = {};
		return o;
	}
})();
