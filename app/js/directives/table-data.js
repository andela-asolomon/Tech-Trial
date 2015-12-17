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
