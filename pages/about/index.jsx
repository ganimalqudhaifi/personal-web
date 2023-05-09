import Image from "next/image";
import { WebLayout } from "../../components";

export default function Index() {
  return (
    <>
      <WebLayout>
        <div>
          <div className="m-6 space-y-7">
            <h4 className="text-2xl sm:text-3xl md:text-4xl text-gray-300 font-semibold text-center">
              Andi Muhammad Ganim Alqudhaifi
            </h4>

            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-36 flex justify-center rounded-full overflow-hidden bg-gray-500 border-gray-700">
                <Image width={200} height={200} src="/profile5.jpeg" alt="" />
              </div>
            </div>

            <div className="space-y-5 text-gray-400">
              <p>
                Hi! Saya adalah seorang mahasiswa semester akhir jurusan
                Manajemen Ekonomi. Sebagai seorang mahasiswa dengan tuntutan
                untuk belajar, saya juga mengembangkan keterampilan saya dalam
                bidang pemrograman.{" "}
              </p>
              <p>
                Saya masuk ke dalam dunia pemrograman sejak awal tahun 2021 yang
                pada saat itu pemrograman merupakan sebuah tantangan yang
                menarik minat saya terutama ketika menghadapi problem solve.
                Dalam proses belajar, saya mendapat pelatihan dari beberapa
                sumber seperti Website, Youtube, dan Online Course. Saya juga
                ikut dalam sebuah komunitas dan menghadiri event-event yang
                relevan terkait dengan Pemrograman.
              </p>
              <p>
                Dalam bidang pemrograman, saya fokus pada pengembangan web,
                lebih tepatnya sebagai front-end developer. Saya dapat
                mengerjakan pembuatan website yang bersifat statis maupun yang
                bersifat dinamis. Dalam pengerjaan web, bahasa yang paling
                sering saya gunakan adalah bahasa pemrograman Javascript. Ada
                pula beberapa framework pendukung yang biasa saya gunakan
                seperti TailwindCSS dan React(CRA, GatsbyJS, NextJS).
              </p>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
