(function(){

    'use strict';

    var chaptersController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

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
            thirukkuralsRepository.GetThirukkuralChapters(null).then(onThirukkuralChaptersComplete, onError);
        };

        vm.HasSection = false;

        init();
    };

    angular.module('thirukkuralApp').controller('chaptersController', chaptersController);
    chaptersController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
