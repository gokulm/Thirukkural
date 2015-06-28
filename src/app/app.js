(function () {

    'use strict';

    var thirukkuralApp = angular.module('thirukkuralApp', ['ui.router', 'ui.bootstrap', 'ui.utils']);
    var stateProvider = function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/:index',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('thirukkuralsbychapters', {
                url: '/thirukkuralchapters/:index/thirukkurals',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            })
            .state('chapters', {
                url: '/thirukkuralchapters/:index',
                templateUrl: 'app/chapters/chapters.html',
                controller: 'chaptersController',
                controllerAs: 'vm'
            })
            .state('sections', {
                url: '/thirukkuralsections/:index',
                templateUrl: 'app/sections/sections.html',
                controller: 'sectionsController',
                controllerAs: 'vm'
            })
            .state('chaptergroups', {
                url: '/thirukkuralchaptergroups/:index',
                templateUrl: 'app/chaptergroups/chaptergroups.html',
                controller: 'chapterGroupsController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/:index');
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