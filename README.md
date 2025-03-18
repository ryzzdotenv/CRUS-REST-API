```md
🚀 CRUD REST API

API sederhana berbasis Node.js, Express.js, dan PostgreSQL untuk manajemen pengguna (CRUD).

📌 Fitur
- CRUD User: Create, Read, Update, dan Delete pengguna.
- PostgreSQL + Pool: Koneksi database yang lebih optimal.

🚀 Instalasi
sh
git clone https://github.com/ryzzdotenv/CRUS-REST-API.git
cd CRUS-REST-API
npm install
```

⚙️ Konfigurasi
Buat file `.env` dengan isi berikut:
env
PORT=5000
DB_HOST=localhost
DB_USER=username
DB_PASSWORD=password
DB_NAME=database_name
```
▶️ Menjalankan Server
sh
npm start
```

📡 API Endpoints
| Method | Endpoint     | Description                      |
|--------|-------------|----------------------------------|
| GET    | `/users`    | Mendapatkan semua pengguna      |
| GET    | `/users/:id` | Mendapatkan pengguna berdasarkan ID |
| POST   | `/users`    | Menambahkan pengguna baru       |
| PUT    | `/users/:id` | Memperbarui data pengguna      |
| DELETE | `/users/:id` | Menghapus pengguna            |

📜 Lisensi
MIT License. Dibuat oleh [@ryzzdotenv](https://github.com/ryzzdotenv). 🚀

