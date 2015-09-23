
// Initialize Masonry
var $container = $('.masonry-container');
$container.imagesLoaded( function () {
  $container.masonry({
    columnWidth: '.item',
    itemSelector: '.item'
  });   
});


// Fix interior tabs with masonry items - keep them from stacking
$('a[data-toggle=tab]').each(function () {
  var $this = $(this);

  $this.on('shown.bs.tab', function () {
    $container.imagesLoaded( function () {
      $container.masonry({
        columnWidth: '.item',
        itemSelector: '.item'
      });   
    });  
  });
});