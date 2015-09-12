'use strict';
var models;
(function (models) {
    var Answer = (function () {
        function Answer(bytes, floppyCount, weight, distance) {
            this.bytes = bytes;
            this.floppyCount = floppyCount;
            this.weight = weight;
            this.distance = distance;
        }
        return Answer;
    })();
    models.Answer = Answer;
})(models || (models = {}));
