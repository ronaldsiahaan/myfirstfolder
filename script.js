// Destructuring yg berpengaruh pada function

// function penjumlahanPerkalian(a, b) {
//     return [a + b, a * b];
// }

// // Cara biasa
// const jumlahKali = penjumlahanPerkalian(2, 3);
// console.log(jumlahKali);

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// console.log(jumlah);

// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// // Cara Destructuring
// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(jumlah);
// console.log(kali);


// // Jika argumentnya lebih banyak
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b, a / b];
// }

// const [tambah, kurang, kali, bagi] = kalkulasi(3, 2);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// // Jika argumentnya lebih banyak dan memberika nilai default
// function kalkulasi(a, b) {
//     return [a + b, a - b, a * b];
// }

// const [tambah, kurang, kali, bagi = 'tidak ada'] = kalkulasi(3, 2);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);

// // Jika argumentnya tidak saling berurutan, maka return value harus dalam bentuk Objek bukan dalam bentuk array seperti diatas
// function kalkulasi(a, b) {
//     return {
//         tambah: a + b,
//         kurang: a - b,
//         kali: a * b,
//         bagi: a / b
//     };
// }

// const { kali, kurang, bagi, tambah } = kalkulasi(3, 2);
// console.log(tambah);
// console.log(kurang);
// console.log(kali);
// console.log(bagi);


// Destructuring function arguments
// const mhs1 = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@galih.com'
// }

// function cetakMhs(nama, umur) {
//     return `Halo, nama saya ${nama}, umur ${umur} tahun.`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// // Cara lain
// const mhs1 = {
//     nama: 'Ronald Siahaan',
//     umur: 56,
//     email: 'ronald@siahaan.com'
// }

// function cetakMhs(mhs) {
//     return `Halo, nama saya ${mhs.nama}, umur ${mhs.umur} tahun.`;
// }

// console.log(cetakMhs(mhs1));


// Menggunakan cara destructuring variabel mhs1 pd saat dipanggil
const mhs1 = {
    nama: 'Sandhika Galih',
    umur: 33,
    email: 'sandhika@galih.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}

// function cetakMhs({ nama, umur, nilai }) {
//     return `Halo, nama saya ${nama}, umur ${umur} tahun. Nilai tugas saya adalah ${nilai.tugas}`;
// }

// console.log(cetakMhs(mhs1));

// argument 'nilai' dapat dipecah lagi menjadi:
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
    return `Halo, nama saya ${nama}, umur ${umur} tahun. Nilai tugas saya adalah ${tugas}`;
}

console.log(cetakMhs(mhs1));