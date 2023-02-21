<?php

class Menu {
    private PDO $conn;
    public string $cat_name;

    public function __construct(PDO $db) {
        $this->conn = $db;
    }

    public function get_menu() {
        $query = <<<SQL
            SELECT item_name, item_price, img_src, img_alt
            FROM menu JOIN category ON menu.cat_id = category.cat_id
            JOIN image ON menu.img_id = image.img_id
            WHERE cat_name = :cat_name
        SQL;
        
        $stmt = $this->conn->prepare($query);
        $this->cat_name = htmlspecialchars(strip_tags($this->cat_name));
        $stmt->bindParam(':cat_name', $this->cat_name);
        $stmt->execute();
        return $stmt;
    }
}
