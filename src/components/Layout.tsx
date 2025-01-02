"use client";

import Sidebar from "./Sidebar";
import { ReactNode, useState } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuOpen = () => setIsOpen(!isOpen);

  return (
    <div className="min-h-screen w-full bg-zinc-900">
      <div
        className={`group ${isOpen && "is-open"} flex flex-col items-center justify-center lg:flex-row lg:items-start lg:gap-5 lg:pt-10`}
      >
        <header
          className={`sticky top-0 z-10 w-full max-w-4xl duration-500 before:absolute before:top-0 before:h-screen before:duration-300 group-[.is-open]:inset-0 group-[.is-open]:before:w-full group-[.is-open]:before:bg-zinc-900/70 group-[.is-open]:before:backdrop-blur lg:w-auto lg:py-8 group-[.is-open]:lg:sticky group-[.is-open]:before:lg:w-0`}
        >
          <Sidebar handleMenuOpen={handleMenuOpen} />
        </header>
        <main className="w-full max-w-3xl text-white">
          <div className="mb-10 p-6 sm:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
