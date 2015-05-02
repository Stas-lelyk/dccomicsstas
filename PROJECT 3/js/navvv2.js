jQuery(function(){
	// Dropdown toggle
	jQuery('.dropdown-toggle2').click(function(){
	  jQuery(this).next('.dropdown2').toggle();
	});
	jQuery(document).click(function(e) {
	  var target = e.target;

	  if (!jQuery(target).is('.dropdown-toggle2') && !jQuery(target).parents().is('.dropdown-toggle2')) {
		jQuery('.dropdown2').hide();
	  }
	});
});