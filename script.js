 // Menangkap elemen tombol berdasarkan kelas '.btn'
const tombolJelajahi = document.querySelector('.btn');

// Menambahkan event listener ketika tombol diklik oleh pengguna
tombolJelajahi.addEventListener('click', function(event) {
    // Mencegah link langsung terbuka agar pengguna bisa melihat efek interaksinya dulu
    event.preventDefault();

    // Memunculkan kotak dialog sambutan interaktif
    alert('Hai terimakasih telah masuk ke profil Ai hoshino, apakah anda ingin menjelajah lebih banyak tentang manga [Oshi no Ko]?');

    // Mengarahkan halaman ke link tujuan setelah tombol diklik dan alert ditutup
    window.location.href = tombolJelajahi.href;
});

// Menambahkan efek sapaan di Console browser saat halaman selesai dimuat
window.addEventListener('DOMContentLoaded', function() {
    console.log('Website Profil PPLG berhasil dimuat dengan sempurna! 🚀');
});