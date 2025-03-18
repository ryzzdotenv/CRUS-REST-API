const pool = require("../db/pool");
exports.getAllUsers = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: `User tidak ditemukan dengan id ${id}` });
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const result = await pool.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const result = await pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", [name, email, id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: `User tidak ditemukan dengan id ${id}` });
        }

        res.json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query("DELETE FROM users WHERE id = $1 RETURNING *", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: `User dengan id ${id} tidak ditemukan` });
        }

        res.json({ message: `User berhasil dihapus dengan id ${id}` });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.searchUserByName = async (req, res) => {
    try {
        const { name } = req.query;
        const result = await pool.query(
            "SELECT * FROM users WHERE name ILIKE $1", 
            [`%${name}%`]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }

        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


