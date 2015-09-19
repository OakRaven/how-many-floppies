module app.services {	
	export interface ISettingsService {
		getSettings(): app.domain.ISettings;
		setSettings(settings: app.domain.ISettings) : void;
	}
	
	class SettingsService implements ISettingsService {
		getSettings(): app.domain.ISettings {
			if(window.localStorage['settings']){
				return <app.domain.ISettings> JSON.parse(window.localStorage['settings']);
			}
			
			return {
				units: 'Imperial'
			};
		}
		
		setSettings(settings: app.domain.ISettings) {
			window.localStorage['settings'] = JSON.stringify(settings);
		}
		
	}
	
	angular.module('howManyFloppiesApp')
		.service('settingsService', [SettingsService]);
}