/**
 * Created by Goldenrod on 6/24/2015.
 */
'use strict'

angular.module('thirukkuralApp', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home-tpl.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');


    }])

.run(['$state', function ($route) {

    }]);