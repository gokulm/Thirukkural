(function(){

    'use strict';

    var sectionChaptersController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralSectionComplete = function (data) {
            vm.ThirukkuralSection = data;
        };

        var onThirukkuralChaptersBySectionComplete = function (data) {
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
            thirukkuralsRepository.GetThirukkuralSections(index).then(onThirukkuralSectionComplete, onError);
            thirukkuralsRepository.GetThirukkuralChaptersBySection(index).then(onThirukkuralChaptersBySectionComplete, onError);
        };

        vm.HasSection = true;
        vm.HasChapterGroup = false;

        init();
    };

    angular.module('thirukkuralApp').controller('sectionChaptersController', sectionChaptersController);
    sectionChaptersController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
