$(document).ready(function () { 
  // Инициализация библиотеки WOW
  new WOW().init();

  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

  // Бургер-меню
    // Бургер-меню
    var buttonWrapper = $('.button-wrapper'),
        wrapper = $('wrapper');

    buttonWrapper.on('click', () => {
        wrapper.toggleClass('wrapper--active');
    });

    window.addEventListener('scroll', function() {
      $('.menu').innerHTML = pageYOffset;
      if (pageYOffset > 0){
        $('.menu').addClass('menu--scroll')
      }else{
        $('.menu').removeClass('menu--scroll')
      }
    });

    // Получение элементов
    var modal = $('.modal'),                    //Модальное окно
        modalBtn = $('[data-toggle=modal]');    // все элементы вызывающие модальное окно

    // Функция вызова модального окна
    modalBtn.on('click', () => {
        modal.toggleClass('modal--visible');
    });

    // Функция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
    modal.on('click', () => {
        if (event.target.className === "modal modal--visible") {
    
          modal.removeClass('modal--visible');
    
        };
    });
    
    window.addEventListener("keydown", function(event){
        if (event.keyCode == 27) {
          modal.removeClass('modal--visible');
          modalThanks.removeClass('modal--visible');
        }
    }, true);

    // modal-thanks
    var modalThanks = $('.modal-thanks');                    // Модальное окно
    
    // Функция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
    modalThanks.on('click', () => {
        if (event.target.className === "modal-thanks modal--visible") {

        modalThanks.removeClass('modal--visible');

        };
    });

    // Маска для номера телефона
    $('[type=tel]').mask('+7 (000) 000-00-00');


// Валидация форм
  // Модальное окно
  $('.modal__form').validate({
    rules: {
      modalName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      modalPhone: {
        required: true,
        minlength: 18,
      }
    },
    errorClass: "invalid",

    messages: {
      modalName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      modalPhone:{
        required: "Телефон обязательно",
        minlength: "Введите телефон полностью",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          modalThanks.toggleClass('modal--visible');
          ym(62380534,'reachGoal','call');
        }
      });
    }
  });

  // Узнать стоимость
  $('.cost__form').validate({
    rules: {
      costName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      costEmail: {
        required: true,
        email: true,
      },
      costAddress: {
        required: true,
      },
      costMessage: {
        required: true,
      }
    },
    errorClass: "invalid",
    
    messages: {
      costName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      costEmail:{
        required: "E-mail обязательно",
        email: "Введите в формате: name@domain.com"
      },
      costAddress:{
        required: "Напишите адрес сайта",
        
      },
      costMessage:{
        required: "Нашишите сообшение",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          modalThanks.toggleClass('modal--visible');
          ym(62380534,'reachGoal','cost');
        }
      });
    }
  });

  // Остались вопросы
  $('.contacts__form').validate({
    rules: {
      contactsName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      contactsEmail: {
        required: true,
        email: true,
      },
      contactsPhone: {
        required: true,
        minlength: 18,
      },
      contactsMessage: {
        required: true,
      }
    },
    errorClass: "invalid",

    messages: {
      contactsName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      contactsEmail:{
        required: "E-mail обязательно",
        email: "Введите в формате: name@domain.com"
      },
      contactsPhone:{
        required: "Телефон обязательно",
        minlength: "Введите телефон полностью",
      },
      contactsMessage:{
        required: "Нашишите сообшение",
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          modalThanks.toggleClass('modal--visible');
          ym(62380534,'reachGoal','question');
        }
      });
    }
  });

  //Видео в секции figures
  var player;

  $('.figures__video-play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('figuresPlayer', {
      height: '465',
      width: '100%',
      videoId: '3wPeND2gvqc',
      events: {
        'onReady': videoPlay,
      }
    });
    $('.figures__card').addClass('figures__card--video-active');
    $('.hero').addClass('hero--video-active');
  });

  

  function videoPlay(event) {
    event.target.playVideo();
  }

  //  Слайдеры

  // //cases
  // var casesSwiper = new Swiper ('.cases__swiper-container', {
  //   loop: true,
  //   // Стрелки навигации
  //   navigation: {
  //     prevEl: '.cases__swiper-button-prev',
  //     nextEl: '.cases__swiper-button-next',
  //   },
  // });

  // //reviews
  // var reviewsSwiper = new Swiper ('.reviews__swiper-container', {
  //   loop: true,
  //   // Стрелки навигации
  //   navigation: {
  //     prevEl: '.reviews__swiper-button-prev',
  //     nextEl: '.reviews__swiper-button-next',
  //   },
  // });


  // // news
  // var newsSwiper = new Swiper ('.news__swiper-container', {
  //   loop: true,
  //   // Стрелки навигации
  //   navigation: {
  //     prevEl: '.news__swiper-button-prev',
  //     nextEl: '.news__swiper-button-next',
  //   },
  // });


  // Плавная прокрутка при нажатие на якорную ссылку
  jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash,
        _hash = hash.replace(/#/, ''),
        theHref = $(this).attr('href').replace(/#.*/, '');


    if (theHref && location.href.replace(/#.*/, '') != theHref) return;

      var $target = _hash === '' ? $('body') : $(hash + ', a[id="' + _hash + '"]').first();

      if (!$target.length) return;

      e.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $target.offset().top - 0
      }, 600, 'swing', function () {  // 400 это время прокрутки в миллисекундах
        window.location.hash = hash;
      });

    });
  });

  
})