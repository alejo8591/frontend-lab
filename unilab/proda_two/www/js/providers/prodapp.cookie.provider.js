'use strict';

angular.module('prodapp.cookie.provider', ['prodapp.constants'])

.provider('cookieProvider', function cookieProvider(COOKIE_VALUE) {

        this._cookie = '';

        this._setCookie = function() {

            this._cookie = window.localStorage.getItem('cookie');

        };

        this._getCookie = function() {

            return this._cookie;
        };

        this._flagCookie = function() {
            return this._cookie === COOKIE_VALUE;
        }

        this.$get = function() {

            var self = this;

            return {

                getCookie: function() {

                    return self._getCookie();
                },

                setCookie: function() {

                    self._setCookie();
                },

                flagCookie: function() {

                    return self._flagCookie();
                }

            }
        };
});