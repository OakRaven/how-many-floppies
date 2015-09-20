var app;
(function (app) {
    var services;
    (function (services) {
        var SettingsService = (function () {
            function SettingsService() {
            }
            SettingsService.prototype.getSettings = function () {
                if (window.localStorage['settings']) {
                    return JSON.parse(window.localStorage['settings']);
                }
                return {
                    units: 'Imperial'
                };
            };
            SettingsService.prototype.setSettings = function (settings) {
                window.localStorage['settings'] = JSON.stringify(settings);
            };
            SettingsService.prototype.isMetric = function () {
                return this.getSettings().units === 'Metric';
            };
            return SettingsService;
        })();
        angular.module('howManyFloppiesApp')
            .service('settingsService', [SettingsService]);
    })(services = app.services || (app.services = {}));
})(app || (app = {}));
