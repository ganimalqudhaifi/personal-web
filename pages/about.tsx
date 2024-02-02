import Layout from "../components/Layout";
import Divider from '../components/Divider';

export default function About() {
  return (
    <Layout activeIndex={2}>
      <div>
        <h1 className="text-2xl font-bold mb-2">About</h1>
        <p className="text-zinc-400">A short story about me</p>
      </div>

      <Divider />

      <div>
        <p className="text-zinc-300/90">
          Pada pertengahan 2020, Saya merasakan dampak pandemi Covid-19 dalam dunia pendidikan. Saya sebagai mahasiswa baru terpaksa belajar secara online. Pada saat itu, metode belajar ini masih dalam tahap pengembangan dan terkadang jadwalnya menjadi berantakan.
          <br/><br/>
          Dengan rasa penasaran akan pengetahuan baru, saya mencoba belajar banyak hal baru melalui internet. Saya sangat suka menjelajahi situs, artikel, dan blog, dan mulai bertanya-tanya bagaimana cara membuatnya. Saya mulai bereksperimen dengan memodifikasi struktur dan gaya halaman web langsung dari browser menggunakan fitur inspect element. Ini adalah saat pertama saya mengenal pemrograman.
          <br/><br/>
          Dari sana, saya mulai belajar pemrograman web, mulai dari cara pembuatan situs web statis, belajar dasar-dasar bahasa pemrograman, stateful logic, routing, progressive web apps, dan beberapa implementasi lainnya, hingga akhirnya bisa membangun situs web dinamis yang kompleks.
          <br/><br/>
          Inilah awal saya dalam dunia pemrograman. Pengalaman ini telah membuka jalan bagi saya untuk terus belajar dan berkembang di bidang IT. Meski awalnya hanya rasa penasaran, kini telah menjadi passion dan karir saya.
        </p>
      </div>
    </Layout>
  )
}