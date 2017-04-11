angular.module('portfolio', ['ui.router'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/_home.html',
      controller: 'MainCtrl'
    })
    .state('sites', {
      url: '/sites/{id}',
      templateUrl: 'partials/_sites.html',
      controller: 'SitesCtrl'
    });
  $urlRouterProvider.otherwise('home');
}])

.controller('MainCtrl', [
  '$scope',
  'sites',
  function($scope, sites) {
    $scope.sites = sites.sites;
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
