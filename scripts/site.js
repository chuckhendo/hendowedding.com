require('./modules/parallax.js');

var angular = require('angular');

var app = angular.module('hendowedding', [require('angular-animate')]);

require('./modules/stars.js');


app.controller('MainCtrl', ['$window', '$scope', function($window) {
  this.rsvpVisible = false;

  this.showRsvp = function() {
    this.rsvpVisible = true;
  }

  this.hideRsvp = function() {
    this.rsvpVisible = false;
  }
}]);

app.directive('mapNoScroll', [function() {
  return {
    link: function(scope, element, attribute) {
      element.css('pointer-events', 'none');
      element.parent().on('mousedown', function () {
        element.css('pointer-events', '');
      });

      element.on('mouseleave', function () {
        element.css('pointer-events', 'none');
      });
    }
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
