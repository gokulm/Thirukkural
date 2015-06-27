(function () {

    'use strict';

    var homeController = function ($scope, thirukkuralUtil, thirukkuralsRepository) {

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

        var init = function(){
            vm.maxSize = 30;
            vm.bigTotalItems = 1330;
            vm.bigCurrentPage = 1;

            getData();
        };

        var getData = function(){
            thirukkuralsRepository.GetThirukkuralsByChapters(vm.bigCurrentPage).then(onThirukkuralsByChaptersComplete, onError);
            thirukkuralsRepository.GetThirukkuralChapters(vm.bigCurrentPage).then(onThirukkuralChaptersComplete, onError);
        };

        vm.setPage = function (pageNo) {
            vm.bigCurrentPage = pageNo;
        };

        vm.pageChanged = function() {
            getData();
        };

        init();
    };

    angular.module('thirukkuralApp').controller('homeController', homeController);
    homeController.$inject = ['$scope', 'thirukkuralUtil', 'thirukkuralsRepository'];

})();