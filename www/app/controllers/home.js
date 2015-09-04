(function () {
	'use strict';

	angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', HomeCtrl]);

	function HomeCtrl($state) {
		var self = this;

		self.title = 'How Many Floppies?';
		self.units = 'GB';
		self.quantity = 0;

		self.calculate = function () {
			$state.go('results');
		};
	}
})();