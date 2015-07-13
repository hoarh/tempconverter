$(function() {
// Handler for .ready() called.
	$('.convert').click(tempConvert);
//detect click
	function tempConvert () {
//on click, get user input
	var userTemp = $('.userTemp').val();
	userTemp = parseInt(userTemp);
	
	var newTemp = ((userTemp-32)*(5/9));
	console.log('Aha! '+userTemp+' F is '+newTemp+' C!');

	$('.result').html(newTemp);
}

//convert user input (f) to celsius (c)

//display celsius result

});