var app = angular.module('lolApp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ngRoute']);

app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'partials/home.html'})
    .when('/champions', {templateUrl: 'partials/championslist.html'})
    .when('/champions/:id', {templateUrl: 'partials/champion-infos.html'})
})
