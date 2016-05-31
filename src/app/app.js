(function () {

    'use strict';

    var thirukkuralApp = angular.module('thirukkuralApp', ['ui.router', 'ui.bootstrap', 'ui.utils', 'ngLocalize', 'angular-loading-bar', 'ngCookies']);

    var stateProvider = function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'home'
            })
            .state('thirukkuralsbychapters', {
                url: '/thirukkuralchapters/:index/thirukkurals',
                templateUrl: 'app/home/home.html',
                controller: 'homeController',
                controllerAs: 'home'
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
            .state('sectionchapters', {
                url: '/thirukkuralsections/:index/chapters',
                templateUrl: 'app/chapters/chapters.html',
                controller: 'sectionChaptersController',
                controllerAs: 'vm'
            })
            .state('chaptergroups', {
                url: '/thirukkuralchaptergroups/:index',
                templateUrl: 'app/chaptergroups/chaptergroups.html',
                controller: 'chapterGroupsController',
                controllerAs: 'vm'
            })
            .state('chaptergroupchapters', {
                url: '/thirukkuralchaptergroups/:index/chapters',
                templateUrl: 'app/chapters/chapters.html',
                controller: 'chapterGroupChaptersController',
                controllerAs: 'vm'
            })
            // todo: need to change url on search
            .state('search', {
                url: '/search',
                templateUrl: 'app/search/search.html',
                controller: 'searchController',
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

    thirukkuralApp.directive('script', function () {
        return {
            restrict: 'E',
            scope: false,
            link: function (scope, elem, attr) {
                if (attr.type === 'text/javascript-lazy') {
                    var code = elem.text();
                    var f = new Function(code);
                    f();
                }
            }
        };
    });

    // todo: check whether this is the right way to handle this
    // to rebind the angular model, need to trigger input
    thirukkuralApp.directive('reBind', function () {
        return function (scope, elem) {
            $(elem).bind('blur', function () {
                var elementScope = angular.element($(elem)).scope();
                scope.$apply(function(){
                    elementScope.searchEntity.SearchTamilText = $(elem).val().trim();
                });
            });
        };
    });

  /*  thirukkuralApp.directive('onloadDirective', function($rootScope, $document){
        return {
            restrict: 'A',
            link: function(elem, attrs){
                $(window).load(function() {
                    //get element
                    var myElement = elem;
                    console.log(elem);
                    console.log("width" + $document[0].body.clientWidth);
                    if (myElement.width() > 100 && myElement.width() < 500) {

                        $rootScope.customWidth = "> 100 and < 500";
                        console.log("testing 22");
                    } else {
                        console.log("testing");
                        $rootScope.customWidth = "> 500";
                    }
                });
            }
        } });*/

    thirukkuralApp.value('localeConf', {
        basePath: 'assets/languages',
        defaultLocale: 'tamil',
        sharedDictionary: 'common',
        fileExtension: '.lang.json',
        persistSelection: true,
        cookieName: 'COOKIE_LOCALE_LANG',
        observableAttrs: new RegExp('^data-(?!ng-|i18n)'),
        delimiter: '::'
    });

    thirukkuralApp.value('localeSupported', [
        'english',
        'tamil'
    ]);

    thirukkuralApp.run(['$state', '$rootScope', function ($state, $rootScope) {
        $rootScope.$state = $state;
    }]);

    thirukkuralApp.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        //cfpLoadingBarProvider.includeSpinner = false;
    }]);

})();