/* define our modules */
angular.module('techtrial.services', ['firebase','ngCookies']);
angular.module('techtrial.filters', []);
angular.module('techtrial.directives', []);
angular.module('techtrial.controllers', []);

/* load directives */
require('./js/directives/table-data.js')

/* load services */
require('./js/services/users.js');

/* load controllers */
require('./js/controllers/home.js');

window.TechTrial = angular.module("TechTrial", [
  'ui.router',
  'techtrial.controllers',
  'techtrial.directives',
  'techtrial.filters',
  'techtrial.services',
  'ngAnimate'
]);

TechTrial.run(['$rootScope', '$state',
  function($rootScope, $state) {
  $rootScope._ = window._;
  $rootScope.moment = window.moment;
}]);

/* application routes */
TechTrial.config(['$stateProvider','$locationProvider', '$urlRouterProvider',
 function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
}]);
