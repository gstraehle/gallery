$(document).ready(function() {

  $('.gallery').click(GalleryApp.toggleGallery);
  $('.doneviewing').click(function(){$('.livegallery').hide('slow'); $('.gallery').show();});

  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  });
});

var GalleryApp = GalleryApp || {};

GalleryApp.toggleGallery = function(){
  var activeGallery = $(this).attr('id');
  $('.livegallery').show('slow');
  $('.gallery').hide();
};

