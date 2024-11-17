<?php
$host = 'localhost'; // Your database host
$db_name = 'rpl_db'; // Your database name
$username = 'root'; // Your database username
$password = ''; // Your database password

$conn = mysqli_connect($host, $username, $password, $db_name);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
?>