(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./js/controllers/home.js":2,"./js/directives/table-data.js":3,"./js/services/users.js":4}],2:[function(require,module,exports){
angular.module('techtrial.controllers')
.controller('HomeCtrl',
  ['$scope', '$state',
    function($scope, $state) {

      $scope.data = [
        {
          changelist: 456789,
          owner: 'Soulman',
          time_started: new Date(),
          build: 5,
          unit_test: 45,
          functional: 85,
          status: 'Pending'
        },
        {
          changelist: 456789,
          owner: 'John',
          time_started: new Date(),
          build: 10,
          unit_test: 20,
          functional: 30,
          status: 'Passed'
        },
        {
          changelist: 456789,
          owner: 'Doe',
          time_started: new Date(),
          build: 20,
          unit_test: 60,
          functional: 90,
          status: 'Failed'
        },
        {
          changelist: 456789,
          owner: 'Pater',
          time_started: new Date(),
          build: 67,
          unit_test: 89,
          functional: 100,
          status: 'Running'
        },
        {
          changelist: 456789,
          owner: 'Pan',
          time_started: new Date(),
          build: 20,
          unit_test: 75,
          functional: 90,
          status: 'Failed'
        }
      ];

      $scope.toggleDetail = function($index, $event) {
        var clasname = $event.currentTarget.className;
        switch (clasname) {
          case 'pending':
            angular.element($event.currentTarget).addClass('pending-details');
            break;
          case 'failed':
            angular.element($event.currentTarget).toggleClass('failed-details');
            break;
          case 'passed':
            angular.element($event.currentTarget).toggleClass('passed-details');
            break;
          case 'running':
            angular.element($event.currentTarget).toggleClass('running-details');
            break;
        }

        $scope.activePosition = $scope.activePosition === $index ? -1 : $index;
      }

      var details = {
        Pending: 'pending-details'
      }

      $scope.statusDetails = function($index) {
        if ($scope.activePosition === $index) {
          return {
            'background': 'tomato'
          }
        }
      }

      var borderColor = {
        Pending: 'pending',
        Failed: 'failed',
        Passed: 'passed',
        Running: 'running'
      }

      $scope.getStatus = function(status) {
        return borderColor[status];
      }

    }
 ]);

},{}],3:[function(require,module,exports){
'use strict';
angular.module('techtrial.directives')
.directive('buildTable', [function () {
  return {
    restrict: 'E',
    replace: 'true',
    templateUrl:'views/directive/data-table.html',
    link: function(scope, element) {
      // element.bind('click', function(event) {
      //   var elem = event.currentTarget.children[scope.activePosition + 1];
      //   angular.element(elem).toggleClass('pending-details');
      // });
    }
  };
}]);

},{}],4:[function(require,module,exports){
angular.module('techtrial.services')
  .factory('Users', ['$firebase', 'Refs',
    function($firebase, Refs) {
      return {
        all: function(cb) {
          if(!cb) {
            return $firebase(Refs.users).$asArray();
          }
          else {
            Refs.users.once('value', function(snap) {
              cb(snap.val());
            });
          }
        },

        find: function(uid, cb) {
          if(!cb) {
            return $firebase(Refs.users.child(uid)).$asObject();
          }
          else {
            Refs.users.child(uid).once('value', function(snap) {
              cb(snap.val());
            });
          }
        }
      };
    }
  ]);

},{}]},{},[1]);
