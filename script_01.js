//Cara membuat Object pada javascript

// PROBLEM: tidak efektif jika objectnya banyak

//1. Object Literal

// let mahasiswa1 = {
//     nama: 'Shandika',
//     energi: 10,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`)
//     }
// }

// let mahasiswa2 = {
//     nama: 'Doddy',
//     energi: 20,
//     makan: function (porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }



//2. Function Declaration

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
    
//     mahasiswa.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Shandika', 10);
// let doddy = Mahasiswa('Doddy', 20);

//PROBLEM no. 2 : Jika melakukan instansiasi, fungsinya disimpan dua kali
// Cara mengatasinya, method dipisah dari object mahasiswa utk dipanggil,
//seperti dibawah ini:

// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
    
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat beristirahat!`)
//     }
// };

// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;
    
//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Shandika', 10);
// let doddy = Mahasiswa('Doddy', 20);



//3. Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
    
//     this.makan = function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     this.main = function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10);






//4. Object.create
// Digunakan pada object Mahasiswa, agar tidak perlu 
// dipanggil setiap ada perubahan method pada methodMahasiswa
// const methodMahasiswa = {
//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },
    
//     main: function (jam) {
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat beristirahat!`)
//     }
// };

// function Mahasiswa(nama, energi) {
//     // let mahasiswa = {};
//     let mahasiswa = Object.create(methodMahasiswa); //dengan ini setiap penambahan method pada methodMahasiswa, tidak perlu diinisiasi lagi
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     // mahasiswa.makan = methodMahasiswa.makan;
//     // mahasiswa.main = methodMahasiswa.main;
//     // mahasiswa.tidur = methodMahasiswa.tidur;
    
//     return mahasiswa;
// }

// let sandhika = Mahasiswa('Shandika', 10);
// let doddy = Mahasiswa('Doddy', 20);

//5. Prototype inheritance

// function Mahasiswa(nama, energi) {
//     // let mahasiswa = Object.create(methodMahasiswa); 
//     // let mahasiswa = {};
//     // let this = Object.create(Mahasiswa.prototype) --> ada di blkg layar
//     this.nama = nama;
//     this.energi = energi;
    
//     // return mahasiswa;
//     // return this; --> ada di blkg layar
// }

// Mahasiswa.prototype.makan = function (porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, selamat makan!`;
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, selamat bermain!`;
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return `Halo ${this.nama}, selamat istirahat!`;
// }

// let sandhika = new Mahasiswa('Sandhika', 10);

//6. Prototype Class version
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//    makan (porsi) {
//         this.energi += porsi;
//         return `Halo ${this.nama}, selamat makan!`;
//     }

//     main (jam) {
//         this.energi -= jam;
//         return `Halo ${this.nama}, selamat bermain!`;
//     }

//     tidur (jam) {
//         this.energi += jam * 2;
//         return `Halo ${this.nama}, selamat istirahat!`;
//     }
// }

// let sandhika = new Mahasiswa('Sandhika', 10);
// let doddy = new Mahasiswa('Doddy', 20);

let angka = [3,2,1];
console.log(angka);
