var angular = require('angular');

var app = angular.module('hendowedding');

var scrollTo = 1000;
var currentScrollPos = 0;
var duration = 1000;
var startTime = 0;
var finishTime = 0;

function update(timestamp) {
  var percentage = (timestamp - startTime) / finishTime;
  console.log(percentage);

  var newScrollTop = scrollTo * percentage;
  if(newScrollTop < scrollTo) {
    document.body.scrollTop = newScrollTop;
    requestAnimationFrame(update);

  }

}

function startAnimation(timestamp) {
  startTime = timestamp;
  finishTime = startTime + duration;
  console.log(startTime, finishTime)
  requestAnimationFrame(update);
}

setTimeout(function() {
  requestAnimationFrame(startAnimation);
}, 2000);
