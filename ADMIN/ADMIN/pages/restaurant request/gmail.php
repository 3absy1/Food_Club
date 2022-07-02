<?php
//get data from form  
$email= $_POST['mail'];
$to = "yossfeabdaslm123@gmail.com";
$subject = "Mail From website";
$txt =  Email = " . $email . ";
$headers = "From: noreply@codeconia.com" . "\r\n" .
"CC: somebodyelse@example.com";
// if($email!=NULL){
    mail($to,$subject,$txt,$headers);
// }
//redirect
 header("Location:thankyou.html");
?>