<?php

class DB {
    private string $host = 'localhost';
    private string $db = 'steverq1_matthew';
    private string $user = 'steverq1_matthew';
    private string $pass = 'Csci213+#001';

    public $conn;

    public function get_connection(): PDO {
        $this->conn = null;
        try {
            $this->conn = new PDO(
                'mysql:host=' . $this->host .
                ';dbname=' . $this->db,
                $this->user,
                $this->pass
            );
            $this->conn->exec('set names utf8');
        } catch (PDOException $exception) {
            echo 'Database not connected: ' . $exception->getMessage();
        }
        return $this->conn;
    }
}
