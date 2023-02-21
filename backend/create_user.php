<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json;');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Max-Age: 3600');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once 'config/database.php';
include_once 'class/users.php';

$database = new DB();
$db = $database->get_connection();

$item = new Users($db);

$item->first_name = $_POST['first_name'];
$item->last_name = $_POST['last_name'];
$item->email = $_POST['email'];
$item->pass = $_POST['pass'];

if ($item->create_user()) {
    http_response_code(201);
    echo json_encode('User added to database.');
} else {
    http_response_code(503);
    echo json_encode('Failed to add user to database.');
}
