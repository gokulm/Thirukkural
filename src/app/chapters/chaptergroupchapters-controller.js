(function(){

    'use strict';

    var chapterGroupChaptersController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralChapterGroupComplete = function (data) {
            vm.ThirukkuralChapterGroup = data;
        };

        var onThirukkuralChaptersByChapterGroupComplete = function (data) {
            vm.ThirukkuralChapters = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {

            var index = $stateParams.index == undefined ? 1 : $stateParams.index;
            getData(index);
        };

        var getData = function (index) {
            thirukkuralsRepository.GetThirukkuralChapterGroups(index).then(onThirukkuralChapterGroupComplete, onError);
            thirukkuralsRepository.GetThirukkuralChaptersByChapterGroup(index).then(onThirukkuralChaptersByChapterGroupComplete, onError);
        };

        vm.HasSection = false;
        vm.HasChapterGroup = true;

        init();
    };

    angular.module('thirukkuralApp').controller('chapterGroupChaptersController', chapterGroupChaptersController);
    chapterGroupChaptersController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
