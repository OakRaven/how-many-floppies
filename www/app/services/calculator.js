'use strict';
var Answer = (function () {
    function Answer(bytes, floppyCount, weight, distance) {
        this.bytes = bytes;
        this.floppyCount = floppyCount;
        this.weight = weight;
        this.distance = distance;
    }
    return Answer;
})();
var CalculatorService = (function () {
    function CalculatorService() {
    }
    CalculatorService.prototype.calculate = function (disk, quantity, unit) {
        var bytesInMb = Math.pow(1024, 2);
        var gramsInKg = 1000;
        var milimetersInKm = 1000 * 1000;
        var totalBytes = quantity * unit.bytes;
        var floppyCount = totalBytes / (disk.capacity * bytesInMb);
        var weightInKg = floppyCount * disk.weight / gramsInKg;
        return new Answer(totalBytes, floppyCount, weightInKg, floppyCount * disk.length / milimetersInKm);
    };
    return CalculatorService;
})();
angular.module('howManyFloppiesApp')
    .service('calculatorService', [CalculatorService]);
