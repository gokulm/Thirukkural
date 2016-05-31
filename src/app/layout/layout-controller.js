(function () {

    'use strict';

    var layoutController = function ($rootScope, locale, thirukkuralsUtil, $cookies) {

        var self = this;

        var init = function(){
            var langFromCookie = $cookies.get('language');
            if(langFromCookie){
                setLanguage(langFromCookie);
            }
            else {
                $cookies.put('language', 'tamil');
                setLanguage('tamil');
            }
        };

        self.AllowedLanguages = [
            {code: 'tamil', value: 'Tamil'},
            {code: 'english', value: 'English & Tamil'}
        ];

        self.SetLocale = function (code) {
            setLanguage(code);
            $cookies.put('language', code);
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
    layoutController.$inject = ['$rootScope', 'locale', 'thirukkuralsUtil', '$cookies'];

})();