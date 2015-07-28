(function() {
  'use strict';
  angular.module('tcUIComponents').directive('profileWidget', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/profile-widget/profile-widget.html',
      scope: {
        profile: '=profile'
      }
    };
  });
})();