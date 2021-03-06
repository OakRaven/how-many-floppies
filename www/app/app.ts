module app {
  angular.module('howManyFloppiesApp', ['ionic'])
    .config(($stateProvider, $urlRouterProvider) => {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/home/home.html',
          controller: 'HomeController as vm'
        })
        .state('results', {
          url: '/results/:quantity/:unit/:disk',
          templateUrl: 'app/results/results.html',
          controller: 'ResultsController as vm'
        })
        .state('settings', {
          url: '/settings',
          templateUrl: 'app/settings/settings.html',
          controller: 'SettingsController as vm'
        });

      $urlRouterProvider.otherwise('/');
    })
    .run(($ionicPlatform, $state) => {
      $ionicPlatform.ready(function() {
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
}