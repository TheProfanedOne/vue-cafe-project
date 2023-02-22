<?php

class Users {
    private mysqli $conn;

    public string $first_name;
    public string $last_name;
    public string $email;
    public string $pass;

    public function __construct(mysqli $db) {
        $this->conn = $db;
    }

    public function create_user(): bool {
        $query = <<<SQL
            INSERT INTO users (first_name, last_name, email, pass)
            VALUES (?, ?, ?, ?)
        SQL;

        $stmt = $this->conn->prepare($query);

        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->pass = htmlspecialchars(strip_tags($this->pass));

        $stmt->bind_param('ssss',
            $this->first_name,
            $this->last_name,
            $this->email,
            $this->pass
        );

        return $stmt->execute();
    }

    public function user_lookup() {
        $query = <<<SQL
            SELECT first_name, last_name, pass FROM users
            WHERE email = ?
        SQL;
        
        $stmt = $this->conn->prepare($query);
        $this->email = htmlspecialchars(strip_tags($this->email));
        $stmt->bind_param('s', $this->email);
        $stmt->execute();
        return $stmt;
    }
}
