// 2.1 EXCECUTION CONTEXT, HOISTING & SCOPE

// console.log(nama);
// var nama = 'Sandhika';

//creation phase pada Global Context
// semua variabel akan diset undifined
// nama function = fn()
// hoisting --> nama konsepnya
// javascript mendifinisikan window sebagai global object
// this = window

//execution phase


// var nama = 'Sandhika';
// var umur = 33;

// console.log(sayHello());
// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
// }

// function membuat Local Execution Context
// yang didalamnya terdapat juga creation dan execution phase
// bisa access window
// access arguments
// hoisting -> lihat function dan function dalam function


// var nama = 'Sandhika Galih';
// var username = '@sandhikagalih';

// function cetakURL() {
//     console.log(arguments);
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('@doddyferdiansyah', '@erik'));

// function a() {
//     console.log('ini function a');

//     function b() {
//         console.log('ini function b');

//         function c() {
//             console.log('ini function c');
//         }
//         c();
//     }
//     b();
// }
// a();

function satu() {
    var nama = 'Sandhika';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'Erik';

satu();
dua('Doddy');
console.log(nama);
