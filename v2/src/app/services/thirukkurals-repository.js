(function(){

    'use strict';

    var thirukkuralsRepository = function($http, thirukkuralsUtil){

        // todo: should be added to a app constants
        var baseUrl = "http://api.gokulnath.com/";
        // var baseUrl = "http://localhost:55130/";

        var getThirukkural = function(index){
            thirukkuralsUtil.Log("repository: getThirukkural");
            return $http.get(baseUrl + "thirukkurals/" + index)
                .then(function(response){
                    return response.data.Data;
                });
        };

        var getThirukkuralChapters = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChapters");
            var url = baseUrl + "thirukkuralchapters/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralSections = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralSections");
            var url = baseUrl + "thirukkuralsections/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralChapterGroups = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChapterGroups");
            var url = baseUrl + "thirukkuralchaptergroups/" + (index === null ? "" : index);

            return $http.get(url)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralsByChapters = function (chapterIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsByChapters");
            return $http.get(baseUrl + "thirukkuralchapters/" + chapterIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralsBySections = function (sectionIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsBySections");
            return $http.get(baseUrl + "thirukkuralsections/" + sectionIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralsByChapterGroups = function (sectionIndex) {
            thirukkuralsUtil.Log("repository: getThirukkuralsByChapterGroups");
            return $http.get(baseUrl + "thirukkuralchaptergroups/" + sectionIndex + "/thirukkurals")
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralChaptersBySection = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChaptersBySection");
            return $http.get(baseUrl + "thirukkuralsections/" + index + "/chapters")
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var getThirukkuralChaptersByChapterGroup = function (index) {
            thirukkuralsUtil.Log("repository: getThirukkuralChaptersByChapterGroup");
            return $http.get(baseUrl + "thirukkuralchaptergroups/" + index + "/chapters")
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var searchThirukkuralsInTamil = function (searchText) {
            thirukkuralsUtil.Log("repository: searchThirukkuralsInTamil");
            return $http.get(baseUrl + "thirukkuralstamilsearch/" + searchText)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        var searchThirukkuralsInEnglish = function (searchText) {
            thirukkuralsUtil.Log("repository: searchThirukkuralsInEnglish");
            return $http.get(baseUrl + "thirukkuralsenglishsearch/" + searchText)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        function startsWith(searchText) {
            thirukkuralsUtil.Log("repository: startsWith");
            return $http.get(baseUrl + "thirukkuralsstartswith/" + searchText)
                .then(function (response) {
                    return response.data.Data;
                });
        };

        function endsWith(searchText) {
            thirukkuralsUtil.Log("repository: endsWith");
            return $http.get(baseUrl + "thirukkuralsendswith/" + searchText)
                .then(function (response) {
                    return response.data.Data;
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
            SearchThirukkuralsInEnglish: searchThirukkuralsInEnglish,
            StartsWith: startsWith,
            EndsWith: endsWith
        };
    };

    angular.module('thirukkuralApp').factory('thirukkuralsRepository', thirukkuralsRepository);
    thirukkuralsRepository.$inject = ['$http', 'thirukkuralsUtil'];

})();
