
jQuery(document).ready(function(){
	var height = jQuery('.slidePanel').height();
	jQuery('.btn-slide').click(function(event){
		event.preventDefault();
		var container = jQuery('#panelBox');
		if (container.css('bottom') == '0px'){
			container.animate({
			  'bottom': '-200px'
			}, 500, function(){
				jQuery(event.target)
				.removeClass('icon-down-big')
				.addClass('icon-up-big');			
			});
		} else {
		  container.animate({
			  'bottom': '0px'
		  }, 500, function(){
			  jQuery(event.target)
				.removeClass('icon-up-big')
				.addClass('icon-down-big');
		  });
						
		}
	});
});
