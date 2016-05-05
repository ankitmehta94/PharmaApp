/**
 * Created by ankit94 on 03-05-2016.
 */
(function(){
   var app= angular.module('store-directives',[]);
    app.directive("productDescription", function(){
        return{
            restrict:'E',
            templateUrl:'product-description.html'
        };
    });
    app.directive("productUnit", function(){
        return{
            restrict:'A',
            templateUrl:'product-unit.html'
        };
    });
    app.directive("productReviews", function(){
        return{
            restrict:'E',
            templateUrl:'product-reviews.html'
        };
    });
    app.controller('GalleryController', function(){
        return{
            restrict:'E',
            templateUrl:'product-gallery.html',
        controller:function() {
            this.current = 0;
            this.setCurrent = function (newGallery) {
                this.current = newGallery || 0;
            };
        },
        controllerAs:'gallery'
        };
    });
    app.controller('TabController', function(){
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {

                this.tab = 1;
                this.setTab = function (newValue) {
                    this.tab = newValue;
                };
                this.isSet = function (tabName) {
                    return this.tab == tabName
                };
            },
            controllerAs: 'tab'

        };
    });
});