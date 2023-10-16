import { PrimaryLayout } from "../components/layouts";

export default function About() {
  return (
    <PrimaryLayout activeIndex={2}>
      <div>
        <h1 className="text-2xl font-bold tracking-wide mb-2">About</h1>
        <p className="text-zinc-400">A short story about me.</p>
      </div>
    </PrimaryLayout>
  )
}