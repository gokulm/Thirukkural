/**
 * Created by Goldenrod on 6/24/2015.
 */
'use strict'

angular.module('thirukkuralApp')

.factory('thirukkuralsRepository', ['$http', function($http){

        var baseUrl = "http://devl-api.gokulnath.com/";

        var getThirukkuralsByChapters = function (chapterIndex) {
            //fireFlyService.log("repository: getThirukkuralsByChapters");
            console.log("trying to get data from the server");
            return $http.get(baseUrl + "thirukkuralchapters/" + chapterIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChapters = function () {
            //fireFlyService.log("repository: getThirukkuralChapters");
            return $http.get(baseUrl + "ThirukkuralChapters/")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChaptersBySection = function (index) {
            //fireFlyService.log("repository: getThirukkuralChaptersBySection");
            return $http.get(baseUrl + "ThirukkuralChaptersBySection/" + index)
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChaptersByChapterGroup = function (index) {
            //fireFlyService.log("repository: getThirukkuralChaptersByChapterGroup");
            return $http.get(baseUrl + "ThirukkuralChaptersByChapterGroup/" + index)
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralSections = function () {
            //fireFlyService.log("repository: getThirukkuralSections");
            return $http.get(baseUrl + "ThirukkuralSections/")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChapterGroups = function () {
            //fireFlyService.log("repository: getThirukkuralChapterGroups");
            return $http.get(baseUrl + "ThirukkuralChapterGroups/")
                .then(function (response) {
                    return response.data;
                });
        };

        var searchThirukkuralsInTamil = function (searchText) {
            //fireFlyService.log("repository: searchThirukkuralsInTamil");
            return $http.get(baseUrl + "ThirukkuralsTamilSearch/?searchText=" + searchText)
                .then(function (response) {
                    return response.data;
                });
        };

        var searchThirukkuralsInEnglish = function (searchText) {
            //fireFlyService.log("repository: searchThirukkuralsInEnglish");
            return $http.get(baseUrl + "ThirukkuralsEnglishSearch/?searchText=" + searchText)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            GetThirukkuralsByChapters: getThirukkuralsByChapters,
            GetThirukkuralChapters: getThirukkuralChapters,
            GetThirukkuralSections: getThirukkuralSections,
            GetThirukkuralChaptersBySection: getThirukkuralChaptersBySection,
            GetThirukkuralChapterGroups: getThirukkuralChapterGroups,
            SearchThirukkuralsInTamil: searchThirukkuralsInTamil,
            SearchThirukkuralsInEnglish: searchThirukkuralsInEnglish,
            GetThirukkuralChaptersByChapterGroup: getThirukkuralChaptersByChapterGroup
        };

    }])