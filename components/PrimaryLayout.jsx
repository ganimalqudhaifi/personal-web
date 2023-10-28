import { useState } from "react";
import Sidebar from "./Sidebar";

export default function PrimaryLayout({ children, activeIndex }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className={`group ${isOpen && 'is-open'} flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pt-10 lg:gap-5`}>
        {/* TODO: set beahavior to stick */}
        <header className={`sticky top-0 z-10 w-full max-w-4xl bg-zinc-900/95 backdrop-blur duration-500 lg:w-auto lg:py-8 group-[.is-open]:fixed group-[.is-open]:inset-0 group-[.is-open]:lg:sticky`}>
          <Sidebar activeIndex={activeIndex} handleMenuOpen={handleMenuOpen}/>
        </header>
        <main className="w-full max-w-3xl text-white">
          <div className="p-6 sm:p-8 mb-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
