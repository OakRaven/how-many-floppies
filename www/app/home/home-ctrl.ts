module app.controllers {
	interface IHomeController {
		title: string;
		units: app.domain.ISizeUnit[];
		disks: app.domain.IDiskette[];
		selectedUnit: number;
		selectedDisk: number;
		quantity: number;

		calculate(): void;
	}

	class HomeController implements IHomeController {
		title: string;
		units: app.domain.ISizeUnit[];
		disks: app.domain.IDiskette[];
		selectedUnit: number;
		selectedDisk: number;
		quantity: number;
		aboutModal: any;

		constructor(private $state, private $ionicModal, private dataService) {
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
			}).then((modal) => {
				this.aboutModal = modal;
				this.aboutModal.show();
			});
		}

		calculate(): void {
			this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
		}
	}

	angular.module('howManyFloppiesApp')
		.controller('HomeController', ['$state', '$ionicModal', 'dataService', HomeController]);
}