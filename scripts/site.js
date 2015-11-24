require('./modules/parallax.js');

var angular = require('angular');
var attachFastClick = require('fastclick');

var app = angular.module('hendowedding', [
  require('angular-animate'),
  require('angular-scroll')
]);

require('./modules/stars.js');

app.run(['$rootScope', function($rootScope) {
  if(!window.history || !history.replaceState) {
    return;
  }
  $rootScope.$on('duScrollspy:becameActive', function($event, $element, $target){
    var hash = $element.prop('hash');
    if (hash) {
      history.replaceState(null, null, hash);
    }
  });

  attachFastClick(document.body);
}]);

app.controller('MainCtrl', ['$window', '$scope', function($window, $scope) {
  this.rsvpVisible = false;

  this.showRsvp = function() {
    this.rsvpVisible = true;
    this.mobileNavIsVisible = false;
  }

  this.hideRsvp = function() {
    this.rsvpVisible = false;
  }

  this.toggleMobileNav = function(e) {
    e.preventDefault();
    this.mobileNavIsVisible = !this.mobileNavIsVisible;
  }

  angular.element($window).on('resize', () => {
    if(this.mobileNavIsVisible) {
      $scope.$apply(() => {
        this.mobileNavIsVisible = false;
      });
    }
  });
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

app.directive('noTouchScroll', [function() {
  return {
    link: function(scope, element, attribute) {
      element.on('touchmove', function(e) {
        e.preventDefault();
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
