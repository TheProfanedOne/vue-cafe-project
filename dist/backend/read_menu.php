<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Content-Type: application/json;');
header('Cache-Control: no-cache');

include_once 'config/database.php';
include_once 'class/menu.php';

$database = new DB();
$db = $database->get_connection();

$items = new Menu($db);
$items->cat_name = isset($_GET['cat_name']) ? $_GET['cat_name'] : die();
$stmt = $items->get_menu();
$row_count = $stmt->rowCount();

if ($row_count > 0) {
    $menu_arr = array();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        extract($row);
        $item = array(
            'item_name' => $item_name,
            'item_price' => $item_price,
            'img_src' => $img_src,
            'img_alt' => $img_alt
        );
        array_push($menu_arr, $item);
    }

    http_response_code(200);
    echo json_encode($menu_arr);
} else {
    http_response_code(200);
    echo json_encode("Error: Invalid category");
}
