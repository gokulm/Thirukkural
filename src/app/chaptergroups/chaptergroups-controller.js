(function(){

    'use strict';

    var chapterGroupsController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralChapterGroupsComplete = function (data) {
            vm.ThirukkuralChapterGroups = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            getData();
        };

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralChapterGroups(null).then(onThirukkuralChapterGroupsComplete, onError);
        };

        init();
    };

    angular.module('thirukkuralApp').controller('chapterGroupsController', chapterGroupsController);
    chapterGroupsController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
