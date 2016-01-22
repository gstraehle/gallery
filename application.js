$(document).ready(function() {
  $('.gallery').click(GalleryApp.toggleGallery);
  $('.doneviewing').click(function(){$('.livegallery').hide('slow'); $('.gallery').show('slow');});

  lightbox.option({
    'resizeDuration': 400,
    'wrapAround': true
  });
});

var GalleryApp = GalleryApp || {};

GalleryApp.toggleGallery = function(){
  var activeGallery = $(this).attr('id');
  $('#' + activeGallery + 'detail').show('slow');
  $('.gallery').hide('slow');
};

