$(document).ready(function () {
    // Бургер-меню
    var buttonWrapper = $('.button-wrapper'),
        wrapper = $('wrapper');

    buttonWrapper.on('click', () => {
        wrapper.toggleClass('wrapper--active');
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
          //ym(61250854,'reachGoal','form');
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

  })

  function videoPlay(event) {
    event.target.playVideo();
  }



})