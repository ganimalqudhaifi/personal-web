import { ReactNode, useState } from "react";
import Sidebar from "./Sidebar";

type PrimaryLayoutProps = {
  children: ReactNode,
  activeIndex: number
}

export default function PrimaryLayout({ children, activeIndex }: PrimaryLayoutProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className={`group ${isOpen && 'is-open'} flex flex-col justify-center items-center lg:flex-row lg:items-start lg:pt-10 lg:gap-5`}>
        {/* TODO: set beahavior to stick */}
        <header className={`sticky top-0 z-10 w-full max-w-4xl duration-500 lg:w-auto lg:py-8 before:absolute before:top-0 before:h-screen before:duration-300 group-[.is-open]:inset-0 group-[.is-open]:lg:sticky group-[.is-open]:before:w-full group-[.is-open]:before:bg-zinc-900/70 group-[.is-open]:before:backdrop-blur group-[.is-open]:before:lg:w-0`}>
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
