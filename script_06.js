// ambil semua elemen video

const videos = Array.from(document.querySelectorAll('[data-duration]'));
// console.log(videos);


// pilih hanya 'JAVASCRIPT LANJUTAN'

const jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

    // ambil durasi masing2 video
    .map(item => item.dataset.duration)

    //ubah durasi menjadi integer, ubah menit menjadi detik
    .map(waktu => {
        // contoh 10:30 diubah menjadi array menggunakan split menjadi ["10","30"]
        const parts = waktu.split(':').map(part => parseFloat(part));
        return parts[0] * 60 + parts[1]
    })

    //jumlahkan semua detik
    .reduce((tot, dtk) => tot + dtk);

//ubah formatnya jadi jam:menit:detik
const jam = Math.floor(jsLanjut / (60 * 60));
// const menit = Math.floor((Math.round(((jsLanjut / 3600) % 1) * 3600)) / 60);
// const detik = Math.ceil((((Math.round(((jsLanjut / 3600) % 1) * 3600)) / 60) % 1) * 60);
const menit = Math.floor((jsLanjut - jam * 3600) / 60);
const detik = jsLanjut - (jam * 3600) - (menit * 60);

// simpan di DOM

const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik.`
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} video`;

// console.log(jmlVideo);