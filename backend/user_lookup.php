<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Content-Type: application/json;');
header('Cache-Control: no-cache');

include_once 'config/database.php';
include_once 'class/users.php';

$database = new DB();
$db = $database->get_connection();

$item = new Users($db);
$item->email = isset($_GET['email']) ? $_GET['email'] : die();
$stmt = $item->user_lookup();
$row_count = $stmt->rowCount();

if ($row_count == 1) {
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    extract($row);
    $data = array(
        'first_name' => $first_name,
        'last_name' => $last_name,
        'pass' => $pass
    );
    http_response_code(200);
    echo json_encode($data);
} else if ($row_count > 1) {
    http_response_code(500);
    echo json_encode('Duplicate user present.');
} else {
    http_response_code(200);
    echo json_encode('User not present.');
}
