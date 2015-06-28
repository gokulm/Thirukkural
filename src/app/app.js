(function () {

    'use strict';

    var thirukkuralApp = angular.module('thirukkuralApp', ['ui.router', 'ui.bootstrap', 'ui.utils']);
    var stateProvider = function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('thirukkuralsbychapters', {
                url: '/thirukkuralchapters/:index/thirukkurals',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    };

    var renderHtml = function ($sce) {
        return function (htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        }
    };

    thirukkuralApp.config(['$stateProvider', '$urlRouterProvider', stateProvider]);
    thirukkuralApp.filter("renderHtml", ['$sce', renderHtml]);

    thirukkuralApp.run(['$state', function ($route) {
    }]);

})();