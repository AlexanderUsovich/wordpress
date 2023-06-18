window.onload = function() {
	let logo = document.querySelector('img.first-screen__logo-icon');
		logo.addEventListener('click', function() {
			logo.classList.add('animate__animated');
			logo.classList.add('animate__jello');
	});
};

$(document).ready(function () {
	$('[data-modal=modal]').on('click', function() {
		$('.overlay, #modal').fadeIn("slow");
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #modal, #thanks').fadeOut('slow');
	});
	$('form').submit(function(e) {
		e.preventDefault();
		if (!$(this).valid()){
				return;
		}
		$.ajax({
				type: "POST",
				url: "mailer/smart.php",
				data: $(this).serialize()
		}).done(function() {
				$(this).find("input").val("");
				$('#modal').fadeOut();
				$('.overlay, #thanks').fadeIn('slow');
				$('form').trigger('reset');
		});
		return false;
	});

	function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true,
                },
                // phone: "required",
            },
            messages: {
                name: {
                    required: "Пожалуйста, укажите Ваше имя",
                    minlength: jQuery.validator.format("Введите не менее {0} символов!")
                },
                email: {
                    required: "Укажите Ваш email",
                    email: "Укажите правильный email",
                },
                phone: "Укажите Ваш номер телефона",
            }
        });
    }
    validateForms('#modal form');

	$("input[name=phone]").mask("+375(99) 999-99-99");

	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('#pageup').fadeIn();
		} else {
			$('#pageup').fadeOut();
		}

		$('.optimization__img').each(function(){
				var imagePos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+650) {
						$(this).addClass("animate__animated animate__slideInLeft");
				}
		});

		$('.finish__item').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__bounceInDown");
			}
		});

		$('.gift__img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__heartBeat");
			}
		});
		
		$('.webinar__img').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__zoomIn");
			}
		});

		$('.waiting__left').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__slideInLeft");
			}
		});

		$('.waiting__middle').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__zoomIn");
			}
		});

		$('.waiting__right').each(function(){
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+650) {
					$(this).addClass("animate__animated animate__slideInRight");
			}
		});
	});
});