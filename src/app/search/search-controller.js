(function(){
    
    'use strict';

    var searchController = function ($scope, $stateParams, $state, thirukkuralsUtil, thirukkuralsRepository) {

        var vm = this;

        var onSearchComplete = function (data) {
            vm.Thirukkurals = data;
        };

        var onError = function (errorMessage) {
            vm.ErrorMessage = "An error occurred!";
        };

        var init = function () {
            vm.IsTransliterationEnabled = true;
            vm.SearchText = "";
        };

        vm.EnableTransliterate = function(searchEntity){
            if (searchEntity.IsTransliterationEnabled) {
                vm.IsTransliterationEnabled = true;
                searchEntity.SearchEnglishText = "";
            } else {
                searchEntity.SearchTamilText = "";
                vm.IsTransliterationEnabled = false;
            }
        };

        vm.SearchThirukkurals = function (searchEntity) {
            thirukkuralsUtil.Log(searchEntity);
            //thirukkuralsUtil.Log("scopeSearchEntity: " + $scope.searchEntity);
            if (searchEntity.IsTransliterationEnabled) {
                thirukkuralsRepository.SearchThirukkuralsInTamil(searchEntity.SearchTamilText)
                    .then(onSearchComplete, onError);
            } else {
                thirukkuralsRepository.SearchThirukkuralsInEnglish(searchEntity.SearchEnglishText)
                    .then(onSearchComplete, onError);
            }
        };


        init();
    };

    angular.module('thirukkuralApp').controller('searchController', searchController);
    searchController.$inject = ['$scope', '$stateParams', '$state', 'thirukkuralsUtil', 'thirukkuralsRepository'];


})();