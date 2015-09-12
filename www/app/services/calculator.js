'use strict';
var services;
(function (services) {
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
            return new models.Answer(totalBytes, floppyCount, weightInKg, floppyCount * disk.length / milimetersInKm);
        };
        return CalculatorService;
    })();
    services.CalculatorService = CalculatorService;
})(services || (services = {}));
angular.module('howManyFloppiesApp')
    .service('calculatorService', [services.CalculatorService])
    .constant('conversions', { kgInLbs: 0.453592, kmInMiles: 1.60934 });
