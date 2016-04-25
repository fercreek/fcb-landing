$(document).ready(function() {
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
	$('.slider').slider({full_width: true});
	$('.carousel').carousel();

	$('#vol1').hide();
	$('#vol2').hide();

	$('.volumeBtn').click(function () {
		 var val = ($(this).attr("value"));
		 if (val == 1) {
		 	$('#vol1').show(1000);
		 	$('#vol2').hide(1000);
		 } else {
		 	$('#vol1').hide(1000);
		 	$('#vol2').show(1000);
		 }	
	})

});

