'use strict';
$(function(){
// Declare app level module which depends on views, and components

    var app = app.module('PharmaStore', []);
    app.controller('StoreController', function () {
this.product=meds;
    });
app.controller('GalleryController', function(){
    this.current=0;
    this.setCurrent = function(newGallery){
      this.current = newGallery||0;
    };

});
app.controller('TabController', function(){
    this.tab=1;
    this.setTab= function(newValue){
        this.tab=newValue;
    };
    this.isSet = function(tabName){
      return this.tab==tabName
    };
});

var meds=[{
    name: 'Aceclofenac',
    description: "ANALGESIC/ ANTI-INFLAMMATORY/ MUSCLOSKELETAL DISORDER",
    price: 6.77,
    unit: "10's",
    images: [
        "images/Aceclofenac-1.jpg",
        "images/Aceclofenac-1.jpg"
    ],
    review: [{
        stars: 5,
        body: "Love It",
        author: "john@me.com"
    }]
},
    {
        name: 'Diclofenac Gel',
        description: "ANALGESIC/ ANTI-INFLAMMATORY/ MUSCLOSKELETAL DISORDER",
        price: 9.66,
        unit: "15g",
        images: [
            "images/DiclofenacGel-1.jpg",
            "images/DiclofenacGel-2.jpg"
        ],
        review: [{
            stars: 4,
            body: "Tubes are Nice, dry action, not sticky would recommend",
            author: "sam@me.com"
        }]
    },
    {
        name: 'Cefixime',
        description: "ANTIBIOTIC",
        price: 38.89,
        unit: "10's",
        images: [
            "images/Cefixime-1.jpg",
            "images/Cefixime-2.jpg"
        ],
        review: [{
            stars: 1,
            body: "Not Recomended",
            author: "dean@me.com"
        }]
    }];
});
