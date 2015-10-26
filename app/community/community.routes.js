(function() {
  'use strict';

  angular.module('tc.community').config([
    '$stateProvider',
    '$urlRouterProvider',
    '$locationProvider',
    routes
  ]);

  function routes($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    var states = {
      'community': {
        parent: 'root',
        url: '/community/',
        data: {
          authRequired: false,
        },
        controller: 'BaseCommunityController'
      },
      'community.members': {
        parent: 'root',
        url: '/community/members/',
        templateUrl: 'community/members.html',
        controller: 'MembersController',
        controllerAs: 'ctrl',
        data: {
          authRequired: false,
          title: 'Community Members'
        },
        resolve: {
          membersData: function($http) {
            // TODO this needs to move to a service
            return $http.get('community/mock-data/members.json', {skipAuthorization: true});
          }
        }
      },

      'community.statistics': {
        parent: 'root',
        url: '/community/statistics/',
        templateUrl: 'community/statistics.html',
        controller: 'StatisticsController',
        controllerAs: 'ctrl',
        data: {
          title: 'Community Statistics'
        },
        resolve: {
          statData: function($http) {
            // TODO this needs to move to a service
            return $http.get('community/mock-data/statistics.json', {skipAuthorization: true});
          }
        }
      },
    };

    angular.forEach(states, function(state, name) {
      $stateProvider.state(name, state);
    });
  };
})();