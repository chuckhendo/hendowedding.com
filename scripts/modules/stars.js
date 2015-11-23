// var $ = require('jquery');
// require('jquery.transit');
//
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var COLORS = [
  "#E6E5EB",
  "#E6E5EB",
  "#E6E5EB",
  "#8ABEAF",
  "#8ABEAF",
  "#F1AAB4",
]

var angular = require("angular");

var app = angular.module('hendowedding');

app.directive('stars', ['$window', function($window) {
  return {
    link: function(scope, element, attribute) {
        var layers=9;
        var starDensity=0.0012;


        // function startBlinking($layer){
        //   // function blink(){
        //   //   TweenMax.to($layer,0.2+(Math.random()*0.4),{
        //   //     opacity:0.4+(Math.random()*0.4),
        //   //     onComplete:blink,
        //   //     repeat:1,
        //   //     yoyo:true,
        //   //     ease:Quad.easeInOut
        //   //   });
        //   // }
        //   // blink();
        //   function fadeOut() {
        //     $layer.transition({
        //       opacity: 0.4+(Math.random()*0.4),
        //       duration: 200+(Math.random()*400),
        //       complete: fadeIn
        //     });
        //   }
        //   function fadeIn() {
        //     $layer.transition({
        //       opacity: 1,
        //       duration: 200+(Math.random()*400),
        //       complete: fadeOut
        //     });
        //   }
        //   fadeOut();
        // }

        function createLayers() {
          var ww=document.body.clientWidth;
          var wh=document.body.clientHeight;

          var dpi=window.devicePixelRatio;
          var cw=ww*dpi;
          var ch=wh*dpi;
          var stars=ww*ww*starDensity*dpi;

          var contexts=[];

          for(var i=0;i<layers;i++){
            var $layer=angular.element("<canvas />")
            	.addClass("layer")
              .attr({
                width:ww,
                height:wh
              })
              .css({
                width:ww,
                height:wh
              });

            element.append($layer);


            var ctx=$layer[0].getContext("2d");
            ctx.fillStyle=COLORS[getRandomInt(0,5)];
            console.log(ctx.fillStyle)
            contexts.push(ctx);
            // startBlinking($layer);

          }



          for(var i=0;i<stars;i++){
            var x=Math.round(Math.random()*cw)-0.5;
            var y=Math.round(Math.random()*ch)-0.5;

            var s=Math.random();
            s=Math.pow(s,8)*1.5;
            s+=0.3
            if(Math.random()<0.1){
              s*=2;
            }
            if(s<0) s=0;

            var a=1;
            if(s<1){
              a=s;
              s=1;
            }

            var id=Math.round(Math.random()*(contexts.length-1));
            var ctx=contexts[id];

            ctx.translate(x,y);
            ctx.globalAlpha = a;
            ctx.rotate(Math.PI/4);
            ctx.fillRect(0,0,s*dpi,s*dpi);

            ctx.rotate(-Math.PI/4);
            ctx.translate(-x,-y);
          }

        }

        function removeLayers() {
          element.html("");
        }

        createLayers();

        angular.element($window).on('resize', function() {
          removeLayers();
          createLayers();
        });

    }
  }
}]);
