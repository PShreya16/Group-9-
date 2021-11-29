<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="Feedback.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap" rel="stylesheet">
    <title>Feedback</title>
</head>

<body>
    <div id="center">
        <div id="heading">
            <h2>Feedback Form</h2>
        </div>
        <form id="form">
        <?php
        echo "hello";
            include 'insert1.php';
            ?>
            <form action="./InsertData" method="post">
                <div class="input">
                    <label for="name" class="label">Name:</label>
                    <input type="text" id="name" class="input_text">
                </div>
                <div class="input">
                    <label for="email" class="label">Email Address:</label>
                    <input type="email" id="email" class="input_text">
                </div>
                <div class="input" id="message_input">
                    <label for="message" class="label">Message:</label>
                    <textarea id="message" name="message" placeholder="Write something.." class="input_text"></textarea>
                </div>
                <div class="input">
                    <input type="submit" value="Submit" id="submit_button">
                </div>
            </form>
            
    </div>
</body>

</html>