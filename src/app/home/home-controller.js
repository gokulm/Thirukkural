(function () {

    'use strict';

    var homeController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

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

                self.maxSize = 15;
                self.bigTotalItems = 1330;
                self.bigCurrentPage = $stateParams.index;

                getData();
            }
        };

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralsByChapters(self.bigCurrentPage).then(onThirukkuralsByChaptersComplete, onError);
            thirukkuralsRepository.GetThirukkuralChapters(self.bigCurrentPage).then(onThirukkuralChaptersComplete, onError);
        };

 /*       locale.setLocale('english');

        locale.ready('common').then(function () {
            self.sampleText = locale.getString('common.helloWorld');
        });*/

        self.setPage = function (pageNo) {
            self.bigCurrentPage = pageNo;
        };

        self.pageChanged = function () {
            $state.go('thirukkuralsbychapters', {index: self.bigCurrentPage});
        };

        init();
    };

    angular.module('thirukkuralApp').controller('homeController', homeController);
    homeController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();