angular.module('portfolio', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home_partial.html',
      controller: 'MainCtrl'
    })
    .state('sites', {
      url: '/sites/{id}',
      templateUrl: 'views/sites_partial.html',
      controller: 'SitesCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])
.controller('MainCtrl', [
  '$scope',
  'sites',
  function($scope, sites) {
    $scope.sites = sites.sites;
    $scope.displayImage = function() {
      $scope.hover = true;
    }
  }
])
.controller('SitesCtrl', [
  '$scope',
  '$stateParams',
  'sites',
  function($scope, $stateParams, sites) {
    $scope.site = sites.sites[$stateParams.id];
  }
])
