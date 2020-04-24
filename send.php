<?php

$modalName = $_POST['modalName'];
$modalPhone = $_POST['modalPhone'];
$costName = $_POST['costName'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

if (!empty($modalName)) {
  try {
    //Server settings
    $mail->SMTPDebug = 0;                                       // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = "smtp.gmail.com";                         // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'vasya555vas@gmail.com';               // SMTP username
    $mail->Password   = '77788olaola66';                         // SMTP password
    $mail->SMTPSecure = 'ssl';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
    $mail->Port       = 465;                                    // TCP port to connect to
  
    //Recipients
    $mail->setFrom('vasya555vas@gmail.com', 'SAYTSPB');
    $mail->addAddress('richy_555@mail.ru', 'Joe');                  // Add a recipient
  
    // Content
    $mail->CharSet = "UTF-8";
    $mail->isHTML(true);                                        // Set email format to HTML
    $mail->Subject = "Заказ звонка SAYTSPB";
    $mail->Body    = "Имя пользователя: ${modalName}<br>
                      Телефон: ${modalPhone}";
  
    if ($mail->send()) {
      echo "Ok";
    } else {
      echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
    }
  } catch (Exception $e) {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
  }
}