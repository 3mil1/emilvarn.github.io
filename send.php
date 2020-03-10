
<?php 

// ini_set('display_errors','On');
// error_reporting('E_ALL');


$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
$subject = htmlspecialchars($subject);
$message = htmlspecialchars($message);

$name = urldecode($name);
$email = urldecode($email);
$subject = urldecode($subject);
$message = urldecode($message);

$name = trim($name);
$email = trim($email);
$subject = trim($subject);
$message = trim($message);

// echo $name;
// echo "<br>";
// echo $email;
// echo "<br>";
// echo $subject;
// echo "<br>";
// echo $message;

if (mail("emilvarn@gmail.com", "Portfolio", "Nimi:".$name.". E-mail: ".$email.". subject:".$subject.". message:".$message))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}
?>