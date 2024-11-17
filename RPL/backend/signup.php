<?php
include 'db.php';
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $username = $data['username'];
    $password = $data['password'];
    $full_name = $data['full_name'];

    // Vulnerable SQL injection point
    $query = "INSERT INTO users (username, password, full_name) VALUES ('$username', '$password', '$full_name')";
    if (mysqli_query($conn, $query)) {
        echo json_encode(['status' => 'success', 'message'=>'Berhasil mendaftarkan akun!']);
    } else {
        echo json_encode(['status' => 'error', 'message'=>'Gagal mendaftarkan akun!']);
    }
}
?>
