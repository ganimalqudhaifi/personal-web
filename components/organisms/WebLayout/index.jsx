import Head from "next/head";
import Link from "next/link";

export default function Index({ children }) {
  return (
    <>
      <Head>
        <title>Personal Web - Ganim Alqudhaifi</title>
      </Head>

      <div className="w-full min-h-full bg-zinc-900 bg-[url('/svg/diagonal-lines.svg')]">
        <div className="flex flex-col min-h-screen max-w-6xl px-3 sm:px-5 md:px-6 mx-auto space-y-12 text-gray-50">
          <nav className="grid grid-cols-2 py-4 border-b-[0.5px] border-zinc-800">
            <div className="flex items-center space-x-2 md:space-x-3 group/mail hover:cursor-pointer">
              <div className="flex justify-center items-center w-12 md:w-14 h-12 md:h-14 bg-zinc-800 bg-opacity-50 border-[1px] border-zinc-700 p-2 rounded-full">
                <i className="bx bx-envelope text-xl text-zinc-400 group-hover/mail:text-zinc-300"></i>
              </div>
              <Link
                href={"mailto:ganimalqudhaifi@gmail.com"}
                className="text-sm text-zinc-400 group-hover/mail:text-zinc-200"
              >
                Get in Touch
              </Link>
            </div>
            <ul className="flex gap-3 md:gap-4 justify-end items-center">
              <li>
                <Link
                  href={"/"}
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/project"}
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  Project
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex-grow">{children}</div>

          <footer className="grid grid-cols-2 py-4 border-t-[0.5px] border-zinc-800">
            <p className="flex items-center text-xs md:text-sm text-zinc-400">
              © 2023 All Rights Reserved.
            </p>

            <ul className="flex gap-3 md:gap-4 justify-end items-center">
              <li>
                <Link
                  href={
                    "https://www.linkedin.com/in/andi-muhammad-ganim-alqudhaifi-9669b0214/"
                  }
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  <i className="text-xl md:hidden bx bxl-linkedin-square"></i>
                  <span className="hidden md:block">Linkedin</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://github.com/ganimalqudhaifi"}
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  <i className="text-xl md:hidden bx bxl-github"></i>
                  <span className="hidden md:block">Github</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instagram.com/ganimalqudhaifi/"}
                  terget="_blank"
                  className="text-sm text-zinc-400 hover:text-zinc-200"
                >
                  <i className="text-xl md:hidden bx bxl-instagram-alt"></i>
                  <span className="hidden md:block">Instagram</span>
                </Link>
              </li>
            </ul>
            <div></div>
          </footer>
        </div>
      </div>
    </>
  );
}
