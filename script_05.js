const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// const newAngka = [];
// for (let i = 0; i < angka.length; i++) {
//     if (angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);



// // jika menggunakan filter

// const newAngka = angka.filter(function (a) {
//     return a >= 3;
// });

// console.log(newAngka);



// // jika menggunakan filter dan arrow function

// const newAngka = angka.filter(a => a >= 3);
// const newAngkaDouble = newAngka.map(a => a * 2);  //menambahkan contoh setelah di filter kemudian dikali 2

// console.log(newAngka);
// console.log(newAngkaDouble);



// // array map
// // kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);



// // array reduce
// // jumlahkan seluruh elemen pada array angka!
// // "ada nilai awal disini" -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9  -> contoh nilai awal 5 (default 0)

// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// console.log(newAngka);



// Method Chaining, metode berantai contoh filter, map dan reduce digabungkan dlm satu barus
// Contoh kasus
// Cari dari array angka yang nilainya > 5
// hasilnya dikalikan 3
// hasil perkalian di jumlahkan

// const hasil = angka.filter(a => a > 5)  //8,9,9
//     .map(a => a * 3) //24, 27, 27
//     .reduce((acc, cur) => acc + cur); //78
// console.log(hasil);
