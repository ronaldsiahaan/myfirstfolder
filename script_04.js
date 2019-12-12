// Function Expression

// const tampilNama = function (nama) {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Sandhika'));

// const tampilNama = (nama) => {
//     return `Halo, ${nama}`;
// }

// console.log(tampilNama('Doddy'));

// const tampilNama = (nama, waktu) => {
//     return `Halo, ${nama} selamat ${waktu} !`;
// }

// console.log(tampilNama('Sandhika Galih', 'Malam'.toLowerCase()));


// implisit return
// const tampilNama = nama => `Halo, ${nama}`;
// console.log(tampilNama('Doddy'));

// const tampilNama = () => `Hello World`;
// console.log(tampilNama());

// let mahasiswa = ['Sandhika Galing', 'Doddy Ferdiansyah', 'Erik'];
// let jumlahHuruf = mahasiswa.map(function (nama) {
//     return nama.length;
// });
// console.log(jumlahHuruf);


// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);


// Konsep this pada Arrow Function

// Constructor Function

// const Mahasiswa = function () {
//     this.nama = 'Sandhika Galih';
//     this.umur = 33;
//     // console.log(this);
//     this.sayHello = function () {
//         console.log(`Hellow, nama saya ${this.nama}, umur ${this.umur} tahun`);
//     }
// }
// const sandhika = new Mahasiswa();

// // Arrow Function

// const Mahasiswa = function () { //constructor tidak dapat menggunakan arrow function
//     this.nama = 'Sandhika Galih';
//     this.umur = 33;
//     this.sayHello = () => {  //method dpt menggunakan arrow function
//         console.log(`Hellow, nama saya ${this.nama}, umur ${this.umur} tahun`);
//     }
// }
// const sandhika = new Mahasiswa();

// Object Literal

// const mhs1 = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     sayHello: () => { //method ini tdk dpt menggunakan arrow function, this akan dikenal sbg window
//         console.log(`Hellow, nama saya ${this.nama}, umur ${this.umur} tahun`); //
//         // console.log(this);
//     }
// }


// const Mahasiswa = function () {
//     this.nama = 'Sandhika Galih';
//     this.umur = 33;
//     this.sayHello = function () {
//         console.log(`Hellow, nama saya ${this.nama}, umur ${this.umur} tahun`);
//     }

//     // Function Declaration
//     setInterval(() => { //disini function arrow dapat dipergunakan
//         console.log(this.umur++);
//     }, 500);
// }
// const sandhika = new Mahasiswa();

// const box = document.querySelector('.box');
// box.addEventListener('click', function () {
//     let satu = 'size';
//     let dua = 'caption';

//     if (this.classList.contains(satu)) {
//         [satu, dua] = [dua, satu];
//     }

//     this.classList.toggle(satu);
//     setTimeout(() => {
//         this.classList.toggle(dua);
//     }, 800);
// });