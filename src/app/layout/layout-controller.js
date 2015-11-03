(function () {

    'use strict';

    var layoutController = function (locale, thirukkuralsUtil) {

        var self = this;

        var init = function(){

            // todo: find value from cookie and set it
            //locale.setLocale('tamil');
            setLanguage('tamil');
        };

        self.AllowedLanguages = [
            {code: 'english', value: 'English'},
            {code: 'tamil', value: 'Tamil'},
            //{ code: 'englishTamil', value: 'English & Tamil' }
        ];

        self.SetLocale = function (code) {
            //locale.setLocale(code);
            setLanguage(code);
            thirukkuralsUtil.Log('language changed: ' + code);
        };

        self.IsTamil = function(){
            return self.LocaleCode == 'tamil';
        }

        function setLanguage(code){
            locale.setLocale(code);
            self.LocaleCode = code;
        };
 ;

        init();
    };

    angular.module('thirukkuralApp').controller('layoutController', layoutController);
    layoutController.$inject = ['locale', 'thirukkuralsUtil'];

})();