(function(){

    'use strict';

    var thirukkuralsRepository = function($http, thirukkuralsUtil){

        // todo: should be added to a app constants
        var baseUrl = "http://devl-api.gokulnath.com/";

        var getThirukkural = function(index){
            thirukkuralsUtil.Log("repository: getThirukkural");
            return $http.get(baseUrl + "thirukkurals/" + index)
                .then(function(response){
                    return response.data;
                });
        };

        var getThirukkuralChapters = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChapters");
            var url = baseUrl + "thirukkuralchapters/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralSections = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralSections");
            var url = baseUrl + "thirukkuralsections/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChapterGroups = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChapterGroups");
            var url = baseUrl + "thirukkuralchaptergroups/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralsByChapters = function (chapterIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsByChapters");
            return $http.get(baseUrl + "thirukkuralchapters/" + chapterIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralsBySections = function (sectionIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsBySections");
            return $http.get(baseUrl + "thirukkuralsections/" + sectionIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralsByChapterGroups = function (sectionIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsByChapterGroups");
            return $http.get(baseUrl + "thirukkuralchaptergroups/" + sectionIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChaptersBySection = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChaptersBySection");
            return $http.get(baseUrl + "thirukkuralsections/" + index + "/chapters")
                .then(function (response) {
                    return response.data;
                });
        };

        var getThirukkuralChaptersByChapterGroup = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChaptersByChapterGroup");
            return $http.get(baseUrl + "thirukkuralchaptergroups/" + index + "/chapters")
                .then(function (response) {
                    return response.data;
                });
        };

        var searchThirukkuralsInTamil = function (searchText) {
            thirukkuralsUtil.Log("repository: searchThirukkuralsInTamil");
            return $http.get(baseUrl + "thirukkuralstamilsearch/?searchText=" + searchText)
                .then(function (response) {
                    return response.data;
                });
        };

        var searchThirukkuralsInEnglish = function (searchText) {
            thirukkuralsUtil.Log("repository: searchThirukkuralsInEnglish");
            return $http.get(baseUrl + "thirukkuralsenglishsearch/?searchText=" + searchText)
                .then(function (response) {
                    return response.data;
                });
        };

        return {
            GetThirukkural: getThirukkural,
            GetThirukkuralChapters: getThirukkuralChapters,
            GetThirukkuralSections: getThirukkuralSections,
            GetThirukkuralChapterGroups: getThirukkuralChapterGroups,
            GetThirukkuralsByChapters: getThirukkuralsByChapters,
            GetThirukkuralsBySections: getThirukkuralsBySections,
            GetThirukkuralsByChapterGroups: getThirukkuralsByChapterGroups,
            GetThirukkuralChaptersBySection: getThirukkuralChaptersBySection,
            GetThirukkuralChaptersByChapterGroup: getThirukkuralChaptersByChapterGroup,
            SearchThirukkuralsInTamil: searchThirukkuralsInTamil,
            SearchThirukkuralsInEnglish: searchThirukkuralsInEnglish
        };
    };

    angular.module('thirukkuralApp').factory('thirukkuralsRepository', thirukkuralsRepository);
    thirukkuralsRepository.$inject = ['$http', 'thirukkuralsUtil'];

})();
