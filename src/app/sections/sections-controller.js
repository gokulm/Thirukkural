(function(){

    'use strict';

    var sectionsController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralChaptersComplete = function (data) {
            vm.ThirukkuralChapters = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            getData();
        };

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralSections(null).then(onThirukkuralChaptersComplete, onError);
        };

        init();
    };

    angular.module('thirukkuralApp').controller('sectionsController', sectionsController);
    sectionsController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
