var app;
(function (app) {
    var controllers;
    (function (controllers) {
        var HomeController = (function () {
            function HomeController($state, $ionicModal, dataService) {
                var _this = this;
                this.$state = $state;
                this.$ionicModal = $ionicModal;
                this.dataService = dataService;
                this.title = 'How Many Floppies?';
                this.units = dataService.getUnits();
                this.disks = dataService.getDisks();
                this.selectedUnit = this.units[0].id;
                this.selectedDisk = this.disks[0].id;
                this.quantity = 128;
                this.$ionicModal.fromTemplateUrl('app/home/about-modal.html', {
                    animation: 'slide-in-up',
                    backdropClickToClose: true,
                    hardwareBackButtonClose: true
                }).then(function (modal) {
                    _this.aboutModal = modal;
                    _this.aboutModal.show();
                });
            }
            HomeController.prototype.calculate = function () {
                this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
            };
            return HomeController;
        })();
        angular.module('howManyFloppiesApp')
            .controller('HomeController', ['$state', '$ionicModal', 'dataService', HomeController]);
    })(controllers = app.controllers || (app.controllers = {}));
})(app || (app = {}));
