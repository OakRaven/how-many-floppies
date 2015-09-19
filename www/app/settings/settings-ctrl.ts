module app.controllers {
	interface ISettingsController {
		units: string;
		title: string;
	}

	class SettingsController implements ISettingsController {
		units: string;
		title: string;

		constructor($scope, private settingsService: app.services.ISettingsService) {
			this.title = 'Settings';

			var settings = <app.domain.ISettings> settingsService.getSettings();
			this.units = settings.units;

			$scope.$watch('vm.units', () => {
				settings.units = this.units;
				settingsService.setSettings(settings);
			});
		}
	}

	angular.module('howManyFloppiesApp').controller('SettingsController', ['$scope', 'settingsService', SettingsController]);
}