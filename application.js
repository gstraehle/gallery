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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72832610-1', 'auto');
    ga('send', 'pageview');
