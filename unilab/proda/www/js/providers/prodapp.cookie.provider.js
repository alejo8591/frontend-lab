'use strict';

angular.module('prodapp.cookie.provider', [])

.provider('cookieProvider', function cookieProvider() {

        this.cookie = '';

        this.$get = function() {

            var self = this;

            return { cookie : self.cookie }
        }
});