import { PrimaryLayout } from "../components/layouts";

export default function References() {
  return (
    <PrimaryLayout activeIndex={3}>
      <div>
        <h1 className="text-2xl font-bold tracking-wide mb-2">References</h1>
        <p className="text-zinc-400">Recomendation of sources that I used.</p>
      </div>
    </PrimaryLayout>
  )
}