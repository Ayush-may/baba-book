$(document).ready(function () {
	// whatsapp button click event
	$(".whatsapp").click(function () {
		const s = `https://api.whatsapp.com/send?phone=+919039497832&text=${encodeURIComponent("I Want Baba Play Book ID")}&app_absent=0`;
		window.open(s, "_blank");
	});

	//instagram  button click event
	$(".instagram").click(function () {
		const s = `https://www.instagram.com/baba_play_book`;
		window.open(s, "_blank");
	});

	//facebook  button click event


	//form
	$('.contact-us-form').on('submit', function (e) {
		e.preventDefault();

		const name = $('input[name="name"]').val();
		const phone = $('input[name="phone"]').val();
		const message = $('textarea[name="msg"]').val();

		const s = `name:${name}\nphone:${phone}\nmessage:${message}`;
		const whatsappLink = `https://api.whatsapp.com/send?phone=+919039497832&text=${encodeURIComponent(s)}&app_absent=0`;
		window.open(whatsappLink, "_blank");
	});
});