<?php
include 'db.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = $data['username'];
    $password = $data['password'];

    // Vulnerable SQL query using '=' operator for password checking
    $query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";

    $result = mysqli_query($conn, $query);
    $user = mysqli_fetch_assoc($result);

    // If the user is found, return success
    if ($user) {
        echo json_encode(['status' => 'success', 'message'=>'Berhasil login! Selamat Datang '.$user['full_name'].'!', 'user' => $user]);
    } else {
        echo json_encode(['status' => 'error', 'message'=>'Username atau Password salah!']);
    }
}
?>
