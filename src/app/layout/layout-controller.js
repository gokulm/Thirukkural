(function () {

    'use strict';

    var layoutController = function (locale, thirukkuralsUtil) {

        var vm = this;

        var init = function(){

            // todo: find value from cookie and set it
            locale.setLocale('tamil');
        };

        vm.AllowedLanguages = [
            {code: 'english', value: 'English'},
            {code: 'tamil', value: 'Tamil'},
            //{ code: 'englishTamil', value: 'English & Tamil' }
        ];

        vm.SetLocale = function (code) {
            locale.setLocale(code);
            thirukkuralsUtil.Log('language changed: ' + code);
        };

        init();
    };

    angular.module('thirukkuralApp').controller('layoutController', layoutController);
    layoutController.$inject = ['locale', 'thirukkuralsUtil'];

})();