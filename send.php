<?php

$modalName = $_POST['modalName'];
$modalPhone = $_POST['modalPhone'];

$costName = $_POST['costName'];
$costEmail = $_POST['costEmail'];
$costAddress = $_POST['costAddress'];
$costMessage = $_POST['costMessage'];


// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();


try {
  //Server settings
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = "smtp.gmail.com";                         // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'vasya555vas@gmail.com';               // SMTP username
  $mail->Password   = '7778olala6';                         // SMTP password
  $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to

  //Recipients
  $mail->setFrom('vasya555vas@gmail.com', 'Игорь');
  $mail->addAddress('richy_555@mail.ru', 'Joe');                  // Add a recipient

  // Content
  $mail->CharSet = "UTF-8";
  $mail->isHTML(true);                                        // Set email format to HTML
  
  if (!empty($modalName)) {

    $mail->Subject = "Заказ звонка SAYTSPB";
    $mail->Body    = "<b>Имя пользователя:</b> ${modalName}<br>
                      <b>Телефон:</b>          ${modalPhone}";

  } elseif(!empty($costName)) {

    $mail->Subject = "Узнать стоимость";
    $mail->Body    = "<b>Имя пользователя:</b> ${costName}<br>
                      <b>E-mail:</b>           ${costEmail}<br>
                      <b>Адрес веб-сайта:</b>  ${costAddress}<br>
                      <b>Сообщение:</b>        ${costMessage}";
                      
  }

  if ($mail->send()) {
    echo "Ok";
  } else {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
  }
} catch (Exception $e) {
  echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}

  