/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../services/data.ts" />

'use strict';

angular.module('howManyFloppiesApp').controller('HomeCtrl', ['$state', 'dataFactory', homeCtrl]);

function homeCtrl($state, dataFactory): HomeCtrl {
	return new HomeCtrl($state, dataFactory);
}

class HomeCtrl {
	private title: string;
	private units: Array<SizeUnit>;
	private disks: Array<Diskette>;
	private selectedUnit: number;
	private selectedDisk: number;
	private quantity: number;
	
	constructor(private $state, private dataFactory){
		this.title = 'How Many Floppies?';
		this.units = dataFactory.getUnits();
		this.disks = dataFactory.getDisks();
		this.selectedUnit = this.units[0].id;
		this.selectedDisk = this.disks[0].id;
		this.quantity = 128;
	}
	
	public calculate() : void {
		this.$state.go('results', {quantity: this.quantity, unit: this.selectedUnit, disk: this.selectedDisk});
	}
}