(function () {

    'use strict';

    var homeController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository, $rootScope, $window) {

        var self = this;

        var onThirukkuralsByChaptersComplete = function (data) {
            self.Thirukkurals = data;
        };

        var onThirukkuralChaptersComplete = function (data) {
            self.ThirukkuralChapter = data;
        };

        var onError = function (errorMessage) {
            self.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            if ($stateParams.index == undefined) {
                $state.go('thirukkuralsbychapters', {index: 1});
            }
            else {

                self.maxSize = 20;
                self.bigTotalItems = 1330;
                self.bigCurrentPage = $stateParams.index;

                getData();
                setPageMaxSize();
            }
        };

        var w = angular.element($window);
        w.bind('resize', setPageMaxSize);

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralsByChapters(self.bigCurrentPage).then(onThirukkuralsByChaptersComplete, onError);
            thirukkuralsRepository.GetThirukkuralChapters(self.bigCurrentPage).then(onThirukkuralChaptersComplete, onError);
        };

        self.setPage = function (pageNo) {
            self.bigCurrentPage = pageNo;
        };

        self.pageChanged = function () {
            $state.go('thirukkuralsbychapters', {index: self.bigCurrentPage});
        };

        self.CustomWidth = $rootScope.customWidth;
        console.log($rootScope.customWidth);

        init();

        function setPageMaxSize() {

            // Get window width
            $scope.windowWidth = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth;

            // Change maxSize based on window width
            if($scope.windowWidth > 1000) {
                self.maxSize = 22;
            } else if($scope.windowWidth > 800) {
                self.maxSize = 15;
            } else if($scope.windowWidth > 600) {
                self.maxSize = 8;
            } else if($scope.windowWidth > 400) {
                self.maxSize = 5;
            } else {
                self.maxSize = 1;
            }

            if(!$scope.$$phase) {
                $scope.$apply();
            }
        };

    };

    angular.module('thirukkuralApp').controller('homeController', homeController);
    homeController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository', '$rootScope', '$window'];

})();