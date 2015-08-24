(function() {
  'use strict';

  angular.module('tc.settings').config([
    '$stateProvider',
    routes
  ]);

  function routes($stateProvider) {
    var states = {
      'settings': {
        parent: 'root',
        abstract: true,
        url: '/settings/',
        templateUrl: 'settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings',
        data: {
          authRequired: true,
          UIRefresh: true
        }
      },
      'settings.profile': {
        url: 'profile/',
        templateUrl: 'settings/edit-profile/edit-profile.html',
        controller: 'EditProfileController',
        controllerAs: 'vm',
        data: {
          title: 'Edit Profile'
        },
        resolve: {
          userData: ['UserService', function(UserService) {
            return {
              location: 'China',
              aboutMe: 'I like algorithms and stuff.',
              image: 'path/to/image.svg',
              tracks: {
                'development': true,
                'design': false,
                'data science': true
              },
              skills: ['nunchuck skills', 'bow hunting skills', 'computer hacking skills'],
              externalLinks: ['github', 'stack overflow']
            };
          }]
        },
      },
      'settings.account': {
        url: 'account/',
        templateUrl: 'settings/account-info/account-info.html',
        controller: 'AccountInfoController',
        controllerAs: 'vm',
        data: {
          title: 'Account Info'
        }
      }
    };

    for (var name in states) {
      var state = states[name];
      $stateProvider.state(name, state);
    }
  }
})();