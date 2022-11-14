<?php
   use PHPMailer\PHPMailer\PHPMailer;
//    use PHPMailer\PHPMailer\SMTP;
   use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';
    // require 'PHPMailer/src/SMTP.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true);


    // $mail->isSMTP();  
    // $mail->Host = 'smtp.gmail.com';
    // $mail->SMTPAuth = true;
    // $mail->Username = 'tinaschool777@gmail.com';
    // $mail->Password = 'TinaSchool777';  
    // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    // $mail->Port = 587;   

    $mail->setFrom('test@gmail.com', 'Адмін');
    $mail->addAddress('test@gmail.com');
    $mail->Subject = 'Нова заявка';


    $body = '<h1>Вам лист</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Імя:<strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Номер:<strong> '.$_POST['phone'].'</p>';
    }
    if(trim(!empty($_POST['city']))){
        $body.='<p><strong>Місто:<strong> '.$_POST['city'].'</p>';
    }   

    $mail->Body = $body;


    if(!$mail->send()){
        $message = 'Помилка';
    } else {
        $message = 'Заявка надіслана! Чекайте на наш дзвінок';
    }


    // if (!$mail->send()) $message = 'Помилка';
    
    // if (!$mail->send()) $message = 'Заявка надіслана! Чекайте на наш дзвінок';
    
        
    

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>