$(document).ready(function() {
	
	// Expand Panel
	$('body').on('click', '.accesAdherentTrigger', function(e){
	    e.preventDefault();
	    $('div#panel').slideToggle("slow");
	});
		
});