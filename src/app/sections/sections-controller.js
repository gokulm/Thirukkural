(function(){

    'use strict';

    var sectionsController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralSectionsComplete = function (data) {
            vm.ThirukkuralSections = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            getData();
        };

        var getData = function () {
            thirukkuralsRepository.GetThirukkuralSections(null).then(onThirukkuralSectionsComplete, onError);
        };

        init();
    };

    angular.module('thirukkuralApp').controller('sectionsController', sectionsController);
    sectionsController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];

})();
