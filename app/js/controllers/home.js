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
