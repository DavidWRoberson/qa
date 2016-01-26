var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/partials/dashboard.html'    
        })
        .when('/new_question', {
            templateUrl: '/partials/new_question.html'
        })
        .when('/answer/:id', {
            templateUrl: '/partials/new_answer.html'
        })
        .when('/show/:id', {
            templateUrl: '/partials/question.html'
        })
        .otherwise({redirectTo: "/"})
});



