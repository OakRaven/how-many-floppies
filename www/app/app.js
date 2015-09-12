var app;
(function (app) {
    angular.module('howManyFloppiesApp', ['ionic'])
        .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
            url: '/',
            views: {
                'main': {
                    templateUrl: 'app/home/home.html',
                    controller: 'HomeCtrl as home'
                }
            }
        })
            .state('results', {
            url: '/results/:quantity/:unit/:disk',
            views: {
                'main': {
                    templateUrl: 'app/results/results.html',
                    controller: 'ResultsCtrl as results'
                }
            }
        });
        $urlRouterProvider.otherwise('/');
    })
        .run(function ($ionicPlatform, $state) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                window.StatusBar.styleDefault();
            }
        });
    });
})(app || (app = {}));
