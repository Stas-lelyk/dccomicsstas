jQuery(function(){
	// Dropdown toggle
	jQuery('.dropdown-toggle4').click(function(){
	  jQuery(this).next('.dropdown4').toggle();
	});
	jQuery(document).click(function(e) {
	  var target = e.target;

	  if (!jQuery(target).is('.dropdown-toggle4') && !jQuery(target).parents().is('.dropdown-toggle4')) {
		jQuery('.dropdown4').hide();
	  }
	});
});