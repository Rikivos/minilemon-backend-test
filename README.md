# minilemon-backend-test
This is repository for test backend developer in Minilemon

---

## 🚀 Fitur Utama

- Manajemen pengguna CRUD (buat, edit, hapus)

---

## 🗂️ Struktur Folder (Clean Architecture)

Proyek backend ini mengikuti pendekatan **Clean Architecture** dengan struktur direktori sebagai berikut:

```
backend-v2/
├── api
   ├── index.js
├── src/
│   ├── domain/        
│   ├── infrastructure/    
│   ├── repositories/       
│   ├── usecases/                        
├── .env                
├── .env.example

```

---

## 🧰 Teknologi yang Digunakan

- **Express.js** – Web framework untuk Node.js
- **MongoDB Atlas** – Database NoSQL berbasis cloud
- **Mongoose** – ODM (Object Data Modeling) untuk MongoDB
- **Vercel** – Deployment backend API

---

## 🛠️ Instalasi Backend

Ikuti langkah-langkah berikut untuk menjalankan backend secara lokal:

1. **Clone repository**
   ```bash
   git clone https://github.com/Rikivos/minilemon-backend-test.git
   ```

2. **Masuk ke direktori proyek**
   ```bash
   cd minilemon-backend-test
   ```

3. **Install dependensi**
   ```bash
   npm install
   ```

4. **Jalankan server lokal**
   ```bash
   npm start
   ```

5. **Akses aplikasi**
   ```bash
   http://localhost:3000
   ```

---

Ikuti langkah-langkah berikut untuk menjalankan backend jika menggunakan docker:

1. **Clone repository**
   ```bash
   git clone https://github.com/Rikivos/minilemon-backend-test.git
   ```

2. **Masuk ke direktori proyek**
   ```bash
   cd minilemon-backend-test
   ```

3. **Jalankan server via docker**
   ```bash
   npm install
   ```

4. **Jalankan server via docker**
   ```bash
   docker compose up
   ```

5. **Akses aplikasi**
   ```bash
   http://localhost:3000
   ```

---

## 📡 API Endpoint

Endpoint tersedia di:

```
https://minilemon-backend-test.vercel.app
```

Contoh:
- GET `/api/users` — Mengambil Semua Data pengguna
- POST `/api/users` — Menambah Data pengguna
- PUT `/api/users/:id` — Memperbarui Data pengguna
- DELETE `/api/users/:id` — Menghapus Data pengguna
---

## 🗃️ Struktur Tabel Database (MongoDB)

### 🔐 `users`
| Field      | Tipe Data |
|------------|-----------|
| _id        | ObjectId  |
| name       | String    |
| email      | String    |
| phone      | String    |
| password   | String    |
| active     | Boolean   |
| departement| String    |
| createdAt  | Date      |
| updatedAt  | Date      |

---

## 🚀 Deployment

Backend sudah dideploy secara publik di:

🔗 [https://minilemon-backend-test.vercel.app/](https://minilemon-backend-test.vercel.app/)

---

---

## 🚀 Postman Collection

Postman Collection juga dibuat dan dapat diakses di:

🔗 [https://berita-8122.postman.co/workspace/minilemon-backend-test~c781a70f-8a48-40da-9aa1-82cc4671d760/collection/36315161-86b4cb06-b8a9-4539-82c3-810bac94d6a1?action=share&creator=36315161](https://berita-8122.postman.co/workspace/minilemon-backend-test~c781a70f-8a48-40da-9aa1-82cc4671d760/collection/36315161-86b4cb06-b8a9-4539-82c3-810bac94d6a1?action=share&creator=36315161)

---

## 👨‍💻 Kontributor

Proyek ini dibangun oleh:

- [@Rikivos](https://github.com/Rikivos)

---

