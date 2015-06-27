(function(){

    'use strict';

    var thirukkuralUtil = function ($sce) {
        var log = function (message) {
            console.log(message);
        };

        var renderHtml = function(rawHtml) {
            return $sce.trustAsHtml(rawHtml);
        };

        return {
            Log: log,
            RenderHtml : renderHtml
        };
    };

    angular.module('thirukkuralApp').factory('thirukkuralUtil', thirukkuralUtil);
    thirukkuralUtil.$inject = ['$sce'];

})();
