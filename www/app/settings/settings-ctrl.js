var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var SettingsController = (function () {
            function SettingsController($scope, $rootScope, $ionicNavBarDelegate, settingsService) {
                var _this = this;
                this.$ionicNavBarDelegate = $ionicNavBarDelegate;
                this.settingsService = settingsService;
                this.title = 'Settings';
                var settings = settingsService.getSettings();
                this.units = settings.units;
                $scope.$watch('vm.units', function () {
                    settings.units = _this.units;
                    settingsService.setSettings(settings);
                    $rootScope.$broadcast('units-changed');
                });
            }
            SettingsController.prototype.goBack = function () {
                window.history.back();
            };
            return SettingsController;
        })();
        angular.module('howManyFloppiesApp').controller('SettingsController', ['$scope', '$rootScope', '$ionicNavBarDelegate', 'settingsService', SettingsController]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
