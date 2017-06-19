var app = angular.module('lolApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'views/home.html'})
    .when('/champions', {templateUrl: 'views/championslist.html'})
    .when('/champions/:id', {templateUrl: 'views/champion-infos.html'})
})
