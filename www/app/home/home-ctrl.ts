module app.controllers {
	interface IHomeCtrl {
		title: string;
		units: app.domain.ISizeUnit[];
		disks: app.domain.IDiskette[];
		selectedUnit: number;
		selectedDisk: number;
		quantity: number;

		calculate(): void;
	}

	export class HomeCtrl implements IHomeCtrl {
		title: string;
		units: app.domain.ISizeUnit[];
		disks: app.domain.IDiskette[];
		selectedUnit: number;
		selectedDisk: number;
		quantity: number;

		constructor(private $state, private dataService) {
			this.title = 'How Many Floppies?';
			this.units = dataService.getUnits();
			this.disks = dataService.getDisks();
			this.selectedUnit = this.units[0].id;
			this.selectedDisk = this.disks[0].id;
			this.quantity = 128;
		}

		public calculate(): void {
			this.$state.go('results', { quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk });
		}
	}
	
	angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataService', HomeCtrl]);
}