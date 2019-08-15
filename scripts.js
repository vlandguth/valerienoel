var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer'
  
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry();
});  

$('img').mousedown(function (e) {
  if(e.button == 2) { // right click
    return false; // do nothing!
  }
}