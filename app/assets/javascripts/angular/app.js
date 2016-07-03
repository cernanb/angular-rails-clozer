var app = angular.module('closerApp', ['ui.router', 'ngResource', 'templates', 'ngMessages', 'Devise']);
var API_URL = 'http://localhost:3000/api/'

app
  .config(function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){

    $locationProvider.html5Mode({
      enabled: true
    });

    $httpProvider.defaults.withCredentials = true;

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.opportunities', {
        url: 'opportunities',
        templateUrl: 'home/opportunities.html',
        controller: 'OpportunitiesController as ctrl'
      })
      .state('home.signup', {
        url: 'signup',
        templateUrl: 'home/signup.html',
        controller: 'SessionsController as session'
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'home/about.html'
      })
      .state('home.opportunity', {
        url: 'opportunity/:id',
        templateUrl: 'home/show.html',
        controller: 'ShowOpportunityController as ctrl'
      })
      .state('home.new', {
        url: 'new',
        templateUrl: 'home/new.html',
        controller: 'NewOpportunityController as ctrl'
      })
      .state('home.edit', {
        url: 'edit/:id',
        templateUrl: 'home/edit.html',
        controller: "EditOpportunityController as ctrl"
      });

      $urlRouterProvider.otherwise('/');
  });

  app.run(function(Auth){
    Auth.currentUser().then(function(user){
      // $scope.setCurrentUser(user);
      console.log('user loaded after refresh');
      console.log(Auth.isAuthenticated());
    })
  })
