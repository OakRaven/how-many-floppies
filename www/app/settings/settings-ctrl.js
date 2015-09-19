var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SettingsController = (function () {
            function SettingsController($scope, settingsService) {
                var _this = this;
                this.settingsService = settingsService;
                this.title = 'Settings';
                var settings = settingsService.getSettings();
                this.units = settings.units;
                $scope.$watch('vm.units', function () {
                    settings.units = _this.units;
                    settingsService.setSettings(settings);
                });
            }
            return SettingsController;
        })();
        angular.module('howManyFloppiesApp').controller('SettingsController', ['$scope', 'settingsService', SettingsController]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
