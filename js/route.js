/**
 * Created by ankit94 on 06-05-2016.
 */
'use:strict';
(function(){
    var app=angular.module('gemstore').config(function($routeProvider){
$routeProvider.when('/index.html',{
    templateUrl:'/index.html',
    controller: function(){
        alert("$routeprovider gets called");
    }
})

    });
})();