import PrimaryLayout from "../components/PrimaryLayout";
import Divider from '../components/Divider';

export default function About() {
  return (
    <PrimaryLayout activeIndex={2}>
      <div>
        <h1 className="text-2xl font-bold mb-2">About</h1>
        <p className="text-zinc-400">A short story about me</p>
      </div>

      <Divider />

      <div>
        <p className="text-zinc-300/90">
          Di pertengahan 2020 saya mengikuti seleksi penerimaan sekolah kedinasan. Saya berhasil lulus hingga tahap akhir, yaitu wawancara. Saat itu, salah seorang kandidat yang sedang menunggu giliran untuk di panggil seketika bertanya kepada saya <q>apa kemampuan yang akan kamu tampilkan?</q>, kemudian saya menjawab dengan percaya diri bahwa saya memiliki kemampuan di bidang IT. Setelah itu dia menanyakan lagi <q>apakah kamu bisa melakukan coding?</q>. Pada waktu itu saya benar-benar tidak mengetahui apa itu coding dan saya merasa malu bahwa saya dengan percaya diri telah mengatakan bahwa saya berkemampuan di bidang IT.
          <br/><br/>
          Singkat cerita saya gagal pada tahap wawancara tersebut. Beberapa waktu saya memutuskan untuk mendaftar kuliah di salah satu universitas yang cukup terkenal. Pada awal semester, semuanya berjalan dengan lancar, hingga pada akhirnya ketika memasuki semester baru, saya menghadapi masalah finansial dan tidak dapat melanjutkan perkuliahan tersebut.
          <br/><br/>
          Saya kemudian menganggur selama 3 bulan penuh dan tiba-tiba saya teringat dengan pertanyaan salah satu kandidat saat itu. Di situlah pertama kalinya saya mencoba untuk mempelajari apa itu coding.
          <br/><br/>
          Mulai pada saat itu, saya berdedikasi untuk mempelajari pemrograman. Melalui beberapa sumber materi belajar yang tersedia, saya belajar secara mandiri. Saya menonton beberapa video di saluran youtube, membaca dokumentasi ringan di W3School, mendapatkan <q>hello world</q> pertama ku, berurusan dengan debugging dan error, hingga pada akhirnya saya mulai menyadari bahwa saya memiliki passion yang kuat pada bidang ini.
          <br/><br/>
          Hingga pada saat ini, sebagai seorang pemrogram, saya sangat menikmati untuk mempelajari hal-hal baru, menyelesaikan masalah, mencari solusi terbaik, dan berkeinginan untuk dapat berkolaborasi dengan pemrogram lainnya.
        </p>
      </div>
    </PrimaryLayout>
  )
}