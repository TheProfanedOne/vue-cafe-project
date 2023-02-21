<?php

class Users {
    private PDO $conn;

    public string $first_name;
    public string $last_name;
    public string $email;
    public string $pass;

    public function __construct(PDO $db) {
        $this->conn = $db;
    }

    public function create_user(): bool {
        $query = <<<SQL
            INSERT INTO users (first_name, last_name, email, pass)
            VALUES (:first_name, :last_name, :email, :pass)
        SQL;

        $stmt = $this->conn->prepare($query);

        $this->first_name = htmlspecialchars(strip_tags($this->first_name));
        $this->last_name = htmlspecialchars(strip_tags($this->last_name));
        $this->email = htmlspecialchars(strip_tags($this->email));
        $this->pass = htmlspecialchars(strip_tags($this->pass));

        $stmt->bindParam(':first_name', $this->first_name);
        $stmt->bindParam(':last_name', $this->last_name);
        $stmt->bindParam(':email', $this->email);
        $stmt->bindParam(':pass', $this->pass);

        return $stmt->execute();
    }

    public function user_lookup() {
        $query = <<<SQL
            SELECT first_name, last_name, pass FROM users
            WHERE email = :email
        SQL;
        
        $stmt = $this->conn->prepare($query);
        $this->email = htmlspecialchars(strip_tags($this->email));
        $stmt->bindParam(':email', $this->email);
        $stmt->execute();
        return $stmt;
    }
}
