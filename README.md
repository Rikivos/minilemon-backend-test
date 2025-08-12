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
│   ├── controllers/    
│   ├── usecases/       
│   ├── repositories/   
│   ├── middlewares/    
│   ├── routes/                    
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
   docker compose up
   ```

4. **Akses aplikasi**
   ```bash
   http://localhost:3000
   ```

---

## 📡 API Endpoint

Endpoint tersedia di:

```
https://berita-desa-api2.vercel.app/
```

Contoh:
- `/api/users` — Data pengguna
---

## 🗃️ Struktur Tabel Database (MongoDB)

### 🔐 `users`
| Field      | Tipe Data |
|------------|-----------|
| _id        | ObjectId  |
| name       | String    |
| email      | String    |
| password   | String    |
| createdAt  | Date      |
| updatedAt  | Date      |

---

## 🚀 Deployment

Backend sudah dideploy secara publik di:

🔗 [https://minilemon-backend-test.vercel.app/](https://minilemon-backend-test.vercel.app/)

---

## 👨‍💻 Kontributor

Proyek ini dibangun oleh:

- [@Rikivos](https://github.com/Rikivos)

---

