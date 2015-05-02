jQuery(function(){
	// Dropdown toggle
	jQuery('.dropdown-toggle1').click(function(){
	  jQuery(this).next('.dropdown1').toggle();
	});
	jQuery(document).click(function(e) {
	  var target = e.target;

	  if (!jQuery(target).is('.dropdown-toggle1') && !jQuery(target).parents().is('.dropdown-toggle1')) {
		jQuery('.dropdown1').hide();
	  }
	});
});