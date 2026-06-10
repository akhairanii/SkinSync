# SkinSync

SkinSync adalah aplikasi berbasis web yang membantu pengguna memahami kondisi kulit mereka, mendapatkan rekomendasi skincare yang sesuai, membangun rutinitas perawatan kulit, serta mengakses berbagai tips edukatif seputar skincare.

## Fitur Utama

### Skin Type Analysis
- Identifikasi jenis kulit pengguna.
- Menampilkan hasil analisis berdasarkan jawaban pengguna.

### Product Recommendation
- Rekomendasi produk skincare berdasarkan jenis kulit.
- Informasi produk lengkap dan mudah dipahami.

### Product Library
- Katalog produk skincare yang dapat dijelajahi pengguna.
- Detail manfaat dan kegunaan setiap produk.

### Routine Builder
- Membantu pengguna menyusun rutinitas skincare pagi dan malam.
- Langkah penggunaan produk yang terstruktur.

### SkinCare Tips
- Artikel dan edukasi mengenai kesehatan kulit.
- Tips perawatan berdasarkan kebutuhan kulit.

### Review & Testimonial
- Pengguna dapat melihat dan memberikan ulasan.
- Menampilkan pengalaman pengguna lain terhadap produk dan layanan.

### Authentication
- Registrasi akun.
- Login pengguna.
- Penyimpanan data pengguna.

---

## Teknologi yang Digunakan

### Frontend
- React.js
- React Router DOM
- Axios
- CSS

### Backend
- Spring Boot
- Spring Security
- Spring Data JPA
- Maven

### Database
- H2 Database

### Version Control
- Git
- GitHub

---

## Struktur Project

```text
SkinSync/
│
├── Skin SyncFrontend/
│   ├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── styles/
│
└── SkinSyncBackend/
    ├── src/main/java/
    │   ├── controller/
    │   ├── service/
    │   ├── repository/
    │   ├── entity/
    │   └── config/
    │
    └── src/main/resources/
```

---

## Cara Menjalankan Project

### 1. Clone Repository

```bash
git clone https://github.com/akhairanii/SkinSync.git
```

---

### 2. Menjalankan Backend

Masuk ke folder backend:

```bash
cd SkinSyncBackend
```

Jalankan Spring Boot:

```bash
mvn spring-boot:run
```

Backend berjalan di:

```text
http://localhost:8080
```

---

### 3. Menjalankan Frontend

Masuk ke folder frontend:

```bash
cd "Skin SyncFrontend"
```

Install dependencies:

```bash
npm install
```

Jalankan aplikasi:

```bash
npm run dev
```

Frontend berjalan di:

```text
http://localhost:5173
```

---

## API Endpoint

### Authentication

#### Register

```http
POST /api/auth/register
```

#### Login

```http
POST /api/auth/login
```

#### Get Users

```http
GET /api/auth/users
```

## Tujuan Project

SkinSync dikembangkan sebagai proyek pembelajaran untuk membantu pengguna memperoleh rekomendasi skincare yang lebih sesuai dengan kebutuhan kulit mereka serta meningkatkan kesadaran akan pentingnya perawatan kulit yang tepat.

---

## 📄 License

Project ini dibuat untuk keperluan akademik dan pembelajaran.
