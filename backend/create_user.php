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

$data = json_decode(file_get_contents('php://input'));

$item->first_name = $data->first_name;
$item->last_name = $data->last_name;
$item->email = $data->email;
$item->pass = $data->pass;

if ($item->create_user()) {
    http_response_code(201);
    echo json_encode('User added to database.');
} else {
    http_response_code(503);
    echo json_encode('Failed to add user to database.');
}
