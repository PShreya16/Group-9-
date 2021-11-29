<?php
  echo "HEllo";
$host="localhost";
$dbUsername="root";
$dbPassword="";
$dbName="form";
//create connection
$conn=new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
$Name= $_POST['name'];
$Email= $_POST['email'];
$Message= $_POST['message'];

$INSERT= "INSERT Into feedback (name, mail, message) values ('$Name', '$Email', '$Message')";
if ($conn->query($INSERT) === TRUE) {
    echo "New record created successfully";
  } else {
    echo "Error: " . $INSERT . "<br>" . $conn->error;
  }

$conn->close();

?>