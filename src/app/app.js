/**
 * Created by Goldenrod on 6/24/2015.
 */

(function(){

    'use strict';

    var thirukkuralApp = angular.module('thirukkuralApp', ['ui.router']);
    var stateProvider = function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    };

    thirukkuralApp.config(['$stateProvider', '$urlRouterProvider', stateProvider]);

    thirukkuralApp.run(['$state', function ($route) {
    }]);

})();