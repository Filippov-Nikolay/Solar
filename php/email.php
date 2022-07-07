<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $to = 'solar@gmail.com';
    $subjeck = 'Solar заявка';
    $message = "Имя: $name \n Номер телефона: $phone";
    $headers = 'Content-type: text/plain; charset = utf-8';
    $send = mail($to, $subjeck, $message, $headers);
    if($send == true)
        header('location: index.html');
    else
        header('location: index.html');
?>