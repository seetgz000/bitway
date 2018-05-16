<?php
	$contact_name = @trim(stripslashes($_POST['contact_name'])); 
	$contact_email = @trim(stripslashes($_POST['contact_email']));
	$contact_subject = @trim(stripslashes($_POST['contact_subject']));
	$contact_message = @trim(stripslashes($_POST['contact_message']));

    $email_subject = 'Bitway - Crypto Currency HTML5 Template Contact Form';//replace with subject name
	$email_to = 'themechoices77@gmail.com';//replace with your email

	$body = 'Name: ' . $contact_name . "\n\n" . 'Email: ' . $contact_email . "\n\n" . 'Subject: ' . $contact_subject . "\n\n" . 'Message: ' . $contact_message;

	$success = @mail($email_to, $email_subject, $body);
	
?>

<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<script>alert("Thank you for contact us. As early as possible  we will contact you.");</script>
        <meta HTTP-EQUIV="REFRESH" content="0; url=../index-light.html">        
</head>