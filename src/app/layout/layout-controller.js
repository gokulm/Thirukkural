(function () {

    'use strict';

    var layoutController = function ($rootScope, locale, thirukkuralsUtil) {

        var self = this;

        var init = function(){

            // todo: find value from cookie and set it
            //locale.setLocale('tamil');
            setLanguage('tamil');
        };

        self.AllowedLanguages = [
            {code: 'tamil', value: 'Tamil'},
            {code: 'english', value: 'English & Tamil'},
            //{ code: 'englishTamil', value: 'English & Tamil' }
        ];

        self.SetLocale = function (code) {
            //locale.setLocale(code);
            setLanguage(code);
            thirukkuralsUtil.Log('language changed: ' + code);
        };

        self.IsTamil = function(){
            return self.LocaleCode == 'tamil';
        };

        self.IsActiveMenu = function(menus){

            var menuClass = null;

            menus.forEach(function(menu){
               if($rootScope.$state.$current.name === menu)
               {
                   menuClass = "active";
                   return; // exit for loop
               }
            });

            return menuClass;
        };

        function setLanguage(code){
            locale.setLocale(code);
            self.LocaleCode = code;
        };

        init();
    };

    angular.module('thirukkuralApp').controller('layoutController', layoutController);
    layoutController.$inject = ['$rootScope', 'locale', 'thirukkuralsUtil'];

})();