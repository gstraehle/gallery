$(document).ready(function() {
  $('.doneviewing, .headarea').click(GalleryApp.doneViewing);
  lightbox.option({
    'resizeDuration': 100,
    'wrapAround': true
  });
  jQuery.get('http://gstraehle.github.io/gallery/gallery-db.csv', function(data) {DB = $.csv.toArrays(data);});
  $('.gallery').click(GalleryApp.getGallery);
  // $('.lb-close').click(function(){console.log('close gallery');});
  $('.eventdetailcue').click(function(){$('.eventdetail, .eventsummary').toggle("slow");});
});

var GalleryApp = GalleryApp || {};
var DB = [];
var yposition = 0;

// window.onload = function(){
//   $('head').append("<link rel='shortcut icon' href='https://s3.amazonaws.com/gms-gallery/favicon.ico' type='image/x-icon'><link rel='icon' href='https://s3.amazonaws.com/gms-gallery/favicon.ico' type='image/x-icon'>");
// };

GalleryApp.doneViewing = function(){
  $('.thumbnaildivs, .livegallery h3').remove();
  $('.livegallery').hide('slow');
  $('.gallerysummary').show();
  $('.topbar').css('text-align', 'center');
  $('body').scrollTop(yposition);
};

GalleryApp.getGallery = function(){
  yposition = $(this).offset().top - 100;
  $('.topbar').css('text-align', 'left');
  var galleryTitle = $(this).data('title');
  var galleryDescription = $(this).data('description');
  $('.gallerysummary').hide();
  $('.livegallery').show();
  $('body').scrollTop(0);
  $('.livegallery').append("<h3>" + galleryTitle + "</h3");
  var galleryID = $(this).attr('id');
  jQuery.each(DB,function(){
    if($(this)[2] === galleryID){
      $(".livegallery").append("<div class='thumbnaildivs'><a href='" + $(this)[0] + "' data-lightbox='gallery-1' data-title='" + $(this)[3]+ "<br><i>" + $(this)[4] +"</i>" +"'><span class='spantitle'>" + $(this)[3] + "</span><img class='thumbnails' title='" + $(this)[4] + "' src='" + $(this)[1] + "' alt=''/></a></div>" );
    }
  });
};

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-72832610-1', 'auto');
ga('send', 'pageview');



