module app.controllers {
	interface ISettingsController {
		units: string;
		title: string;
		goBack(): void;
	}

	class SettingsController implements ISettingsController {
		units: string;
		title: string;

		constructor($scope, $rootScope, private $ionicNavBarDelegate, private settingsService: app.services.ISettingsService) {
			this.title = 'Settings';

			var settings = <app.domain.ISettings> settingsService.getSettings();
			this.units = settings.units;

			$scope.$watch('vm.units', () => {
				settings.units = this.units;
				settingsService.setSettings(settings);
				$rootScope.$broadcast('units-changed');
			});
		}
		
		goBack(){
			window.history.back();
		}
	}

	angular.module('howManyFloppiesApp').controller('SettingsController', ['$scope', '$rootScope', '$ionicNavBarDelegate', 'settingsService', SettingsController]);
}