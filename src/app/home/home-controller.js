(function () {

    'use strict';

    var homeController = function (thirukkuralsRepository) {

        var vm = this;

        var onThirukkuralsByChaptersComplete = function (data) {
            vm.Thirukkurals = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        thirukkuralsRepository.GetThirukkuralsByChapters(1).then(onThirukkuralsByChaptersComplete, onError);
    };

    angular.module('thirukkuralApp').controller('homeController', homeController);
    homeController.$inject = ['thirukkuralsRepository'];

})();