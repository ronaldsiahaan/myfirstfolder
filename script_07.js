// Template Literals or Template String

// const nama = 'Sandhika';
// const umur = 33;
// // console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun.`);
// console.log('Halo, nama saya ' + nama + ', dan saya ' + umur + ' tahun.');



//Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert('haloo!')}`);

// const x = 11;
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);



//HTML Fragments

// const mhs = {
//     nama: 'Sandhika Galih',
//     umur: 33,
//     nrp: '043040023',
//     email: 'sandhikagalih@unpas.ac.id'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="nrp">${mhs.nrp}</span>
// </div>`;

// console.log(el);

// 2. Looping
// const mhs = [
//     {
//         nama: 'Sandhika Galih',
//         email: 'sandhikagalih@unpas.ac.id'
//     },
//     {
//         nama: 'Doddy Ferdiansyah',
//         email: 'doddy@unpas.ac.id'
//     },
//     {
//         nama: 'Erik Doang',
//         email: 'erik@unpas.ac.id'
//     }
// ];

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// 3. Conditionals (dapat juga menggunakan ternary)

// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi: 'Isyana Sarasvati',
//     feat: 'Rayu Putra'
// }

// const el = `<div class="lagu">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;



// 4. Nested
// HTML Fragments bersarang

// const mhs = {
//     nama: 'Sandhika Galih',
//     semester: 5,
//     mataKuliah: [
//         'Rekayasa Web',
//         'Analisis dan Perancangan Sistem Informasi',
//         'Pemrograman Sistem Interaktif',
//         'Perancangan Sistem Berorientasi Object'
//     ]
// };

// function cetakMataKuliah(mataKuliah) {
//     return `
//         <ol>
//             ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
//         </ol>
//     `;

// }

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span class="semester">Semester: ${mhs.semester}</span>
//     <h4>Mata Kuliah:</h4>
//     ${cetakMataKuliah(mhs.mataKuliah)}
// </div>`;

// document.body.innerHTML = el;



//Video 14 Javascript Lanjutan Sandhika Galih

//Tagged Templates

// const nama = 'Sandhika';
// const umur = 33;

// // function coba(strings, nama, umur) {
// function coba(strings, ...values) {
//     // // return values;
//     // // Jika ingin menggabungkan semua isinya
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     // result += `${str}${values[i] ? `${values[i]}` : ''}`; //atau bisa juga
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result;

//     // menggunakan reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);

const nama = 'Sandhika';
const umur = 33;
const email = 'sandhikagalih@unpas.ac.id'

// function coba(strings, nama, umur) {
function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => `${result}${str} <span class="hl"> ${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun dan email saya ${email}`;
// console.log(str);
document.body.innerHTML = str;