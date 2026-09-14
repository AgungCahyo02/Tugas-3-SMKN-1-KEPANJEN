// 1. Ambil elemen HTML yang dibutuhkan dan simpan Variable

const btnTema = document.querySelector('#btnToggleTema');
const bodyHalaman = document.querySelector('body');

// 2. Beri perintah saat tombol diklik (Event Listener)

btnTema.addEventListener('click', function () {
    
// toggle akan menambah class 'light-mode' jika belum ada,
// dan menghapusnya jika sudah ada.

bodyHalaman.classList.toggle('light-mode');

// Opsi tambahan: Ubah teks ikon di dalam tombol
if (bodyHalaman.classList.contains('light-mode')) {
    btnTema.textContent = '🌙 Mode Gelap'
} else {
    btnTema.textContent = '☀️ Mode Terang'
}
}) ;

// Pastikan tombol 'Kirim Pesan' di HTML mu punya id="btnKontak" ya!
// Jika belum, tambahkan id="btnKontak" di HTML tag <a> pada btn-contact.

const btnBukaModal = document.querySelector('#btnKontak');
const elemenModal = document.querySelector('#modalKontak');
const btnTutupModal = document.querySelector('#btnTutupModal');

// Event saat tombol Kirim Pesan ditekan

btnBukaModal.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah link pindah halaman
    elemenModal.classList.add('show'); // Tambahkan class .show (lihat CSS)
});

// Event saat tombol Tutup ditekan

btnTutupModal.addEventListener('click', function (event) {
    elemenModal.classList.remove ('show'); // Hapus class .show
});

// --- FITUR 1: Menutup modal dengan tombol ESC ---

document.addEventListener('keydown', function (event) {

    // Mengecek apakah tombol yang ditekan adalah 'Escape'
    
    if (event.key === 'Escape') {

        // Hapus class 'show' agar modal menghilang

        elemenModal.classList.remove ('show');
    }
});

// --- FITUR 2: Greeting otomatis berdasarkan jam ---

const elemenRole = document.querySelector ('.student-role')
const jamSaatIni = new Date () .getHours ();
let teskSapaan = '';

// Menentukan sapaan berdasarkan rentang jam (0 - 23)

if (jamSaatIni >= 4 && jamSaatIni < 11) {
    teskSapaan = 'Selamat Pagi 🌅';
} else if (jamSaatIni >= 11 && jamSaatIni < 15) {
    teskSapaan = 'Selamat Siang ☀️';
} else if (jamSaatIni >= 15 && jamSaatIni < 18) {
    teskSapaan = 'Selamat Sore 🌇';
} else {
    teskSapaan = 'Selamat Malam 🌙';
}

// Mengganti isi teks pada HTML

elemenRole.textContent = teskSapaan;

// --- FITUR 3: Animasi putar avatar saat diklik ---

const avatarBox = document.querySelector('.avatar-box');

avatarBox.addEventListener('click', function () {

    // classList.toggle akan menambah class 'putar-avatar' jika belum ada
    // dan menghapusnya jika diklik lagi (sehingga berputar balik)

    avatarBox.classList.toggle('putar-avatar');
});