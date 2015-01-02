
$('#nav').affix({
      offset: {
        top: $('header').height()
      }
});	

$('#navsecond').affix({
      offset: {
        top: $('#navstatic').height()
      }
});
