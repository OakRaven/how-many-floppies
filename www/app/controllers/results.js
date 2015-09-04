(function () {
	'use strict';

	angular.module('howManyFloppiesApp').controller('ResultsCtrl', ['dataFactory', ResultsCtrl]);

	function ResultsCtrl(dataFactory) {
		var self = this;

		self.items = dataFactory.getItems();
	}
})();