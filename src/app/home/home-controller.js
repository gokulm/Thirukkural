/**
 * Created by Goldenrod on 6/24/2015.
 */
'use strict'

angular.module('thirukkuralApp')

.controller('homeController', ['thirukkuralsRepository', function(thirukkuralsRepository){

        console.log("homecontroller loading...");

        var vm = this;

        var onThirukkuralsByChaptersComplete = function (data) {
            vm.Thirukkurals = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        thirukkuralsRepository.GetThirukkuralsByChapters(1).then(onThirukkuralsByChaptersComplete, onError);

    }]);