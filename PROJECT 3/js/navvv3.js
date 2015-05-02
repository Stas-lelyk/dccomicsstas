jQuery(function(){
	// Dropdown toggle
	jQuery('.dropdown-toggle3').click(function(){
	  jQuery(this).next('.dropdown3').toggle();
	});
	jQuery(document).click(function(e) {
	  var target = e.target;

	  if (!jQuery(target).is('.dropdown-toggle3') && !jQuery(target).parents().is('.dropdown-toggle3')) {
		jQuery('.dropdown3').hide();
	  }
	});
});