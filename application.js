$(document).ready(function() {
  $('.doneviewing').click(function(){
    $('.livegallery a, .livegallery h3,.livegallery span').remove();
    $('.livegallery').hide('slow');
    $('.gallerysummary').show();
  });
  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  });
  jQuery.get('http://gstraehle.github.io/gallery/gallery-db.csv', function(data) {DB = $.csv.toArrays(data);});
  $('.gallery').click(GalleryApp.getGallery);
});

var GalleryApp = GalleryApp || {};
var DB = [];

window.onload = function(){
  $('head').append("<link rel='shortcut icon' href='https://s3.amazonaws.com/gms-gallery/favicon.ico' type='image/x-icon'><link rel='icon' href='https://s3.amazonaws.com/gms-gallery/favicon.ico' type='image/x-icon'>");

};

GalleryApp.getGallery = function(){
  var galleryTitle = $(this).data('title');
  var galleryDescription = $(this).data('description');
  $('.gallerysummary').hide();
  $('.livegallery').show();
  $('.livegallery').append("<h3>" + galleryTitle + "</h3");
  var galleryID = $(this).attr('id');
  jQuery.each(DB,function(){
    if($(this)[2] === galleryID){
      $(".livegallery").append("<span class='spantitle'>" + $(this)[3] + "</span><a href='" + $(this)[0] + "' data-lightbox='gallery-1' data-title='"+$(this)[3]+"'><img class='thumbnails' title='" + $(this)[4] + "' src='" + $(this)[1] + "' alt=''/></a>" );
    }
  });
};


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-72832610-1', 'auto');
ga('send', 'pageview');



