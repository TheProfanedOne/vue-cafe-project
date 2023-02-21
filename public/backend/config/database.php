<?php

class DB {
    private const host = 'localhost';
    private const db   = 'steverq1_matthew';
    private const user = 'steverq1_matthew';
    private const pass = 'Csci213+#001';

    public $conn;

    public function get_connection(): PDO {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                'mysql:host=' . self::host .
                ';dbname=' . self::db,
                self::user,
                self::pass
            );
            $this->conn->exec('set names utf8');
        } catch (PDOException $exception) {
            echo 'Database not connected: ' . $exception->getMessage();
        }
        return $this->conn;
    }
}
