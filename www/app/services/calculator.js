/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="data.ts" />
'use strict';
angular.module('howManyFloppiesApp')
    .factory('calculatorFactory', [calculatorFactory]);
function calculatorFactory() {
    return new CalculatorFactory();
}
var CalculatorFactory = (function () {
    function CalculatorFactory() {
    }
    CalculatorFactory.prototype.calculate = function (disk, quantity, unit) {
        var bytesInMb = Math.pow(1024, 2);
        var gramsInKg = 1000;
        var milimetersInKm = 1000 * 1000;
        var totalBytes = quantity * unit.bytes;
        var floppyCount = totalBytes / (disk.capacity * bytesInMb);
        var weightInKg = floppyCount * disk.weight / gramsInKg;
        return {
            bytes: totalBytes,
            floppyCount: floppyCount,
            weight: weightInKg,
            distance: floppyCount * disk.length / milimetersInKm
        };
    };
    return CalculatorFactory;
})();
