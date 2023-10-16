import { useState } from "react";
import { Sidebar } from "../organisms";
import { RxHamburgerMenu } from 'react-icons/rx';

export default function PrimaryLayout({ children, activeIndex }) {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className={`group ${isOpen && 'is-open'} flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pt-10 lg:gap-5`}>
        {/* TODO: set beahavior to stick */}
        <header className={`sticky top-0 z-10 w-full p-4 bg-zinc-900/95 border-b border-zinc-800 backdrop-blur duration-500 md:p-6 lg:w-auto lg:px-0 lg:py-8 lg:border-0 group-[.is-open]:fixed group-[.is-open]:inset-0 group-[.is-open]:lg:sticky`}>
          <Sidebar activeIndex={activeIndex}/>
          <button className="absolute top-5 right-5 p-1 text-white border rounded lg:hidden" onClick={() => setIsOpen(!isOpen)}><RxHamburgerMenu/></button>
        </header>
        <main className="w-full max-w-3xl text-white">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
