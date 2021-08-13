<?php
    $name = $_POST['name'];
    $lastname = $_POST['lastname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_from = 'rodriguez.terron.gonzalo@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "User Name: $name $lastname.\n".
                    "User Email: $email.\n".
                        "User Phone: $phone.\n".
                            "User Message: $message.\n";

    $to = "rodriguez.terron.gonzalo@gmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");