import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
	return (
		<>
			<Head>
				<title>Personal Web - Ganim Alqudhaifi</title>
			</Head>

			<div className="w-full min-h-full bg-zinc-900 bg-[url('/svg/diagonal-lines.svg')]">
				<div className="max-w-6xl px-6 mx-auto space-y-12 text-gray-50">

					<nav className="grid grid-cols-2 py-4 border-b-[0.5px] border-zinc-800">
						<div className="flex items-center space-x-3">
							<div className="flex justify-center items-center w-14 h-14 bg-zinc-800 bg-opacity-50 border-[1px] border-zinc-700 p-2 rounded-full">
								<i className='bx bx-envelope text-xl text-zinc-400'></i>
							</div>
							<Link href={'mailto:ganimalqudhaifi@gmail.com'} className="text-sm text-zinc-400 hover:text-zinc-200">Get in Touch</Link>
						</div>
						<ul className="flex gap-4 justify-end items-center">
							<li><Link href={'https://www.linkedin.com/in/andi-muhammad-ganim-alqudhaifi-9669b0214/'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Linkedin</Link></li>
							<li><Link href={'https://github.com/ganimalqudhaifi'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Github</Link></li>
							<li><Link href={'https://www.instagram.com/ganimalqudhaifi/'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Instagram</Link></li>
						</ul>
					</nav>

					<div >
						<div className="m-6 space-y-5">
							<h4 className="text-4xl font-semibold text-center">About Me</h4>
							<div className="w-full flex items-center justify-center">
								<div className="w-36 h-36 flex justify-center rounded-full overflow-hidden bg-gray-500 border-gray-700">
									<Image width={200} height={200} src="/profile5.jpeg" alt="" />
								</div>
							</div>
							<div className="space-y-5">
								<p className="text-gray-400">Hi! Saya adalah seorang mahasiswa semester akhir jurusan Manajemen Ekonomi. Sebagai seorang mahasiswa dengan tuntutan untuk belajar, saya juga mengembangkan keterampilan saya dalam bidang pemrograman. </p>
								<p className="text-gray-400">Saya telah masuk ke dalam dunia pemrograman sejak awal tahun 2021 yang pada saat itu pemrograman merupakan sebuah tantangan yang menarik minat saya. Dalam proses belajar, saya mendapat pelatihan dari beberapa sumber seperti Website, Youtube, dan Online Course. Saya juga ikut dalam sebuah komunitas dan menghadiri event event yang relevant terkait dengan Pemrograman.</p>
								<p className="text-gray-400">Dalam bidang pemrograman, saya fokus pada pengembangan web, lebih tepatnya sebagai front-end developer. Saya dapat mengerjakan pembuatan web baik yang bersifat statis maupun yang bersifat dinamis. Dalam pengerjaan web, bahasa yang paling sering saya gunakan adalah bahasa pemrograman javascript. Ada pula beberapa framework pendukung yang biasa saya gunakan seperti TailwindCSS dan React(CRA, GatsbyJS, NextJS).</p>
							</div>
						</div>
					</div>

					<footer className="grid grid-cols-2 py-4 border-t-[0.5px] border-zinc-800">
						<p className="text-sm text-zinc-400">© 2023 All Rights Reserved.</p>
						<ul className="flex gap-4 justify-end items-center">
							<li><Link href={'https://www.linkedin.com/in/andi-muhammad-ganim-alqudhaifi-9669b0214/'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Linkedin</Link></li>
							<li><Link href={'https://github.com/ganimalqudhaifi'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Github</Link></li>
							<li><Link href={'https://www.instagram.com/ganimalqudhaifi/'} terget="_blank" className="text-sm text-zinc-400 hover:text-zinc-200">Instagram</Link></li>
						</ul>
						<div>

						</div>
					</footer>
				</div>
			</div>
		</>
	)
}