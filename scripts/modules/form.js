// var $ = require('jquery');
//
// var rsvpSection = $('section.rsvp');
// var form = $('.rsvp-form');
//
// $('.show-rsvp').on('click', function() {
//   rsvpSection.addClass('visible-start');
//   setTimeout(function() {
//     rsvpSection.addClass('visible');
//   },0);
// });
//
// $('.rsvp').on('click', function() {
//   rsvp.
// });
//
// form.on('submit', function(e) {
//   e.preventDefault();
//
//   $.ajax({
//     dataType: 'jsonp',
//     url: "http://getsimpleform.com/messages/ajax?form_api_token=74e4f498c5d74da75f8580f516fd5133",
//     data: form.serialize()
//   }).done(function() {
//   //callback which can be used to show a thank you message
//   //and reset the form
//     alert("Thank you, for contacting us");
//   });
//
//
// });
//
// var additionalSection = $('.additional-info');
//
// $('#rsvp-yes, #rsvp-no').on('change', function(e) {
//   var val = $(this).val();
//
//   if(val === "yes") {
//     additionalSection.css({
//       height: `${additionalSection[0].scrollHeight}px`
//     });
//
//     additionalSection.removeClass('hidden');
//   } else {
//     additionalSection.addClass('hidden');
//
//     additionalSection.css({
//       height: ''
//     });
//   }
// });
