var app;
(function (app) {
    var domain;
    (function (domain) {
        var Answer = (function () {
            function Answer(bytes, floppyCount, weight, distance) {
                this.bytes = bytes;
                this.floppyCount = floppyCount;
                this.weight = weight;
                this.distance = distance;
            }
            return Answer;
        })();
        domain.Answer = Answer;
    })(domain = app.domain || (app.domain = {}));
})(app || (app = {}));
