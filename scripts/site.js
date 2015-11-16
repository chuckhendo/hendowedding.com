// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require('jquery');

require('./modules/parallax.js');
// require('./modules/form.js');

var angular = require('angular');

var app = angular.module('hendowedding', [require('angular-animate')]);



app.controller('MainCtrl', ['$window', '$scope', function($window) {
  this.rsvpVisible = false;

  this.showRsvp = function() {
    this.rsvpVisible = true;
  }

  this.hideRsvp = function() {
    this.rsvpVisible = false;
  }
}]);

app.directive('noScroll', ['$parse',function($parse) {
  return {
    link: function(scope, element, attribute) {
      scope.$watch(attribute.noScroll, function() {
        var noScrollVal = $parse(attribute.noScroll)(scope);
        if(noScrollVal) {
          element.css('overflow', 'hidden');
        } else {
          element.css('overflow', '');
        }
      });
    }
  }
}]);
