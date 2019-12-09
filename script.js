// Closure

// Untuk membuat Function Factories
// Untuk membuat private method

// function init() {
//     // let nama = 'Sandhika';
//     function tampilNama(nama) {
//         console.log(nama);
//     }
//     return tampilNama;
// }
// let panggilNama = init();
// panggilNama('Galih');

// function init() {
//     // let nama = 'Sandhika';
//     return function (nama) {
//         console.log(nama);
//     }
// }
// let panggilNama = init();
// panggilNama('Sandhika');
// panggilNama('Galih');


// Function Factories

// function ucapkanSalam(waktu) {
//     return function (nama) {
//         console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('Siang');
// let selamatMalam = ucapkanSalam('Malam');

// // selamatPagi('Sandhika');
// // selamatSiang('Galih');

// console.dir(selamatMalam('Sandhika'));

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})(); //immadiately involved function  -> tanda kurung buka sblm function dan kurung tutup setelah kurung kurawal akhir.

// let a = add();
counter = 100; //tidak berpengaruh

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
