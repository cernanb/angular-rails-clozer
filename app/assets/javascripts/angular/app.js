var app = angular.module('closerApp', ['ui.router', 'ngResource', 'templates', 'ngMessages']);

app
  .config(function($stateProvider, $urlRouterProvider){
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
  })
