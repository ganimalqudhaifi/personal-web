import { PrimaryLayout } from "../components/layouts";

export default function Projects() {
  return (
    <PrimaryLayout activeIndex={1}>
      <div>
        <h1 className="text-2xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-400">Where Creativity Meets Code.</p>
      </div>
    </PrimaryLayout>
  )
}