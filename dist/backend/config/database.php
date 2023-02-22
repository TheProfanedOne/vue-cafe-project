<?php

class DB {
    private const host = 'localhost';
    private const name = 'steverq1_matthew';
    private const user = 'steverq1_matthew';
    private const pass = 'Csci213+#001';

    public $conn;

    public function get_connection(): mysqli {
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
        $this->conn = null;
        try {
            $this->conn = new mysqli(
                self::host,
                self::user,
                self::pass,
                self::name
            );
            $this->conn->set_charset('utf8');
        } catch (mysqli_sql_exception $e) {
            echo 'Database not connected: ' . $e->getMessage();
        }
        return $this->conn;
    }
}
