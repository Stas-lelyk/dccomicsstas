jQuery(function(){
	// Dropdown toggle
	jQuery('.dropdown-toggle5').click(function(){
	  jQuery(this).next('.dropdown5').toggle();
	});
	jQuery(document).click(function(e) {
	  var target = e.target;

	  if (!jQuery(target).is('.dropdown-toggle5') && !jQuery(target).parents().is('.dropdown-toggle5')) {
		jQuery('.dropdown5').hide();
	  }
	});
});