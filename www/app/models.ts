'use strict';

module models {
	export interface IComparisonItem {
		id: number;
		name: string;
		weight: number;
		image: string;
	}

	export interface IDiskette {
		id: number;
		label: string;
		length: number;
		weight: number;
		capacity: number;
	}

	export interface ISizeUnit {
		id: number;
		label: string;
		bytes: number
	}

	export interface IAnswer {
		bytes: number;
		floppyCount: number;
		weight: number;
		distance: number;
	}

	export class Answer implements IAnswer {
		constructor(public bytes: number, public floppyCount: number,
			public weight: number, public distance: number) { }
	}
}