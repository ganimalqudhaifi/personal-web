import { Sidebar } from "../organisms";

export default function PrimaryLayout({ children, activeIndex }) {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex flex-col justify-center lg:flex-row lg:pt-10 lg:gap-5">
        {/* TODO: set beahavior to stick */}
        <header className="p-8 lg:px-0">
          <Sidebar activeIndex={activeIndex}/>
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
