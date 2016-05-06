'use strict';
(function() {
    var app = angular.module('gemStore', ['store-directives'],['ngRoute']);

    app.controller('StoreController', function(){
        var store = this;
        store.products = [];

    });

    app.controller('ReviewController', function() {
        this.review = {};

        this.addReview = function(product) {
            product.reviews.push(this.review);

            this.review = {};
        };
    });
    angular.module('myApp', [
        'ngRoute',
        'myApp.view1',
        'myApp.view2',
        'myApp.version'
    ]).
        config(['$routeProvider', function($routeProvider) {
            $routeProvider.otherwise({redirectTo: '/view1'});
        }]);

})();
