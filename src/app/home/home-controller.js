(function () {

    'use strict';

    var homeController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralsByChaptersComplete = function (data) {
            vm.Thirukkurals = data;
        };

        var onThirukkuralChaptersComplete = function (data) {
            vm.ThirukkuralChapter = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            if ($stateParams.index == undefined) {
                $state.go('thirukkuralsbychapters', {index: 1});
            }
            else {

                vm.maxSize = 25;
                vm.bigTotalItems = 1330;
                vm.bigCurrentPage = $stateParams.index;

                getData();
            }
        };

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralsByChapters(vm.bigCurrentPage).then(onThirukkuralsByChaptersComplete, onError);
            thirukkuralsRepository.GetThirukkuralChapters(vm.bigCurrentPage).then(onThirukkuralChaptersComplete, onError);
        };

 /*       locale.setLocale('english');

        locale.ready('common').then(function () {
            vm.sampleText = locale.getString('common.helloWorld');
        });*/

        vm.setPage = function (pageNo) {
            vm.bigCurrentPage = pageNo;
        };

        vm.pageChanged = function () {
            $state.go('thirukkuralsbychapters', {index: vm.bigCurrentPage});
        };

        init();
    };

    angular.module('thirukkuralApp').controller('homeController', homeController);
    homeController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();