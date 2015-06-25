/**
 * Created by Goldenrod on 6/24/2015.
 */
'use strict'

angular.module('thirukkuralApp')

.controller('homeController', ['$scope', 'thirukkuralsRepository', function($scope, thirukkuralsRepository){

        console.log("homecontroller loading...");

        // var vm = this;
        $scope.Test = "testing 1 2 3";

        var onThirukkuralsByChaptersComplete = function (data) {
            $scope.Thirukkurals = data;
        };

        var onError = function (errorMessage) {
            $scope.ErrorMessage = "An error occurred!";
        };

        thirukkuralsRepository.GetThirukkuralsByChapters(1).then(onThirukkuralsByChaptersComplete, onError);

    }]);