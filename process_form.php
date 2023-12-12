<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Replace 'your_email@example.com' with your actual email address where you want to receive the form submissions
    $to = "your_email@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Compose the email message
    $email_message = "Name: $name\n";
    $email_message .= "Email: $email\n\n";
    $email_message .= "Message:\n$message";

    // Send the email and display a confirmation message
    if (mail($to, $subject, $email_message, $headers)) {
        $confirmation_message = "Thank you for your message, $name! We will get back to you soon.";
    } else {
        $confirmation_message = "Oops! Something went wrong. Please try again later.";
    }
}
?>
