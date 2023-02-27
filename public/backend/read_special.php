<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding');
header('Content-Type: application/json;');
header('Cache-Control: no-cache');

include_once 'config/database.php';
include_once 'class/specials.php';

$database = new DB();
$db = $database->get_connection();

$item = new Specials($db);
$item->spec_day = isset($_GET['spec_day']) ? $_GET['spec_day'] : die();
$stmt = $item->get_daily_special();
$stmt->store_result();
$stmt->bind_result($cat_name, $spec_name, $spec_price, $img_src, $img_alt);

http_response_code(200);
if ($stmt->fetch()) {
    $special = array(
        'cat_name' => $cat_name,
        'spec_name' => $spec_name,
        'spec_price' => $spec_price,
        'img_src' => $img_src,
        'img_alt' => $img_alt
    );

    echo json_encode($special);
} else {
    echo json_encode("Error: No Special Found");
}
