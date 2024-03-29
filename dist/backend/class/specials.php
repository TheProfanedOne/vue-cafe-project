<?php

class Specials {
    private mysqli $conn;
    public string $spec_day;

    public function __construct(mysqli $db) {
        $this->conn = $db;
    }

    public function get_daily_special() {
        $query = <<<SQL
            SELECT cat_name, spec_name, spec_price, img_src, img_alt FROM specials
            JOIN category ON specials.cat_id = category.cat_id
            JOIN image ON specials.img_id = image.img_id
            WHERE spec_day = ?
        SQL;
        
        $stmt = $this->conn->prepare($query);
        $this->spec_day = htmlspecialchars(strip_tags($this->spec_day));
        $stmt->bind_param('s', $this->spec_day);
        $stmt->execute();
        return $stmt;
    }
}
