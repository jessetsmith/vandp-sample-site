// Cookies Toast Script
// Make Cookie Container Fade in on page load

$('.accept-button').click(function () {
	$('.cookie-container').fadeOut(500); //fade modal out
	$('#cookie-toast-1').delay(800).fadeIn(500).delay(1000).fadeOut(500);//dealy, fade toast in, delay, fade toast out
});

// Cookies Set and Get Script

		// get the element
		var accept_button = document.getElementById('accept-button');	
		var modal_cookie = Cookies.get('V&P_consent'); // set the cookie to variable

		// if click add a cookie and set the value to true
		accept_button.addEventListener("click", () => {
			Cookies.set('V&P_consent', 'true', { path: '/' });
		});

		if (modal_cookie) {
			(document.getElementById('cookie-container').remove()); //remove modal
		}