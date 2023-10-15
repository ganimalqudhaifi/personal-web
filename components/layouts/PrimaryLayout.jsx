import { Sidebar, Content } from "../organisms";

export default function UniversalLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex flex-col justify-center lg:flex-row lg:pt-10 lg:gap-5">
        <header>
          <Sidebar />
        </header>
        <main className="w-full max-w-4xl text-white">
          <Content />
        </main>
        {children}
      </div>
    </div>
  );
}
