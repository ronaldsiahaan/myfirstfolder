// Destructuring Variable /Assignment

// Desturcturing Array

// const perkenalan = ['Halo', 'nama', 'saya', 'Sandhika Galih'];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// const [salam, satu, dua, tiga] = perkenalan;
// const [salam, , , tiga] = perkenalan; // dapat dilakukan skipping items
// console.log(tiga);

// //swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// // return value pada function
// function coba() {
//     return [1, 2];
// }

// // cara biasa
// // const a = coba();
// // console.log(a[1]);

// // cara return value pada function
// const [a, b] = coba();
// console.log(b);


// // Rest parameter
// // const [a, b] = [1, 2, 3, 4, 5];
// // console.log(a);
// // console.log(b);

// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values); //sisanya masuk kesini

// Destructuring Object
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const { nama, umur } = mhs;
// console.log(nama);
// console.log(umur);

// Assigment tanpa deklarasi Object
// const { nama, umur } = {
//     nama: 'Sandhika Galih',
//     umur: 33
// };
// console.log(nama);
// console.log(umur);

// tanpa deklarasi variable
// ({ nama, umur } = {
//     nama: 'Sandhika Galih',
//     umur: 33
// });
// console.log(nama);
// console.log(umur);

// Assign ke variabel baru
// const mhs = {
//     nama: 'Ronald Siahaan',
//     umur: 56
// }

// const { nama: n, umur: u } = mhs; // titik dua sebagai pengganti alias
// console.log(n);
// console.log(u);

// // Memberikan Default Value
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33
// }

// const { nama, umur, email = 'email@default.com' } = mhs;
// console.log(nama);
// console.log(umur);
// console.log(email);

// Memberikan Default Value dan memberikan nama alias
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@unpas.ac.id'
// }

// const { nama: n, umur: u, email: e = 'email@default.com' } = mhs;
// console.log(n);
// console.log(u);
// console.log(e);


// // Rest Parameter 
// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@unpas.ac.id'
// }

// const { nama: n, ...sisa } = mhs;
// console.log(n);
// console.log(sisa);

// // Mengambil field pada object, setelah dikirim sebagai parameter utk function
// const mhs = {
//     id: 123,
//     nama: 'Sandhika Galih',
//     umur: 33,
//     email: 'sandhika@unpas.ac.id'
// }

// // // Cara biasa
// // function getIdMhs(mhs) {
// //     return mhs.id;
// // }
// // console.log(getIdMhs(mhs));

// // Cara ambil salah satu atau beberapa field
// function getIdMhs({ id, umur }) {
//     return (umur);
// }
// console.log(getIdMhs(mhs));