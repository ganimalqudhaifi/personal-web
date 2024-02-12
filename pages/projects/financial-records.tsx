import Image from "next/image";
import Link from "next/link";
import Divider from "../../components/Divider";

export default function FinancialRecords() {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex justify-center lg:pt-10">
        <div className="w-full max-w-4xl text-white p-6 space-y-6">
          <div>
            <Link href="/projects" className="text-sm">Back to Project</Link>
          </div>
          <div>
            <h2 className="text-4xl font-semibold">Financial Records</h2>
            <p>A web application that can track financial transaction in real-time</p>
          </div>
          <Divider/>
          <Image alt="financial records project" src="/project-financial-records.png" width={400} height={400} className="w-full rounded"/>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore facere sequi adipisci laborum similique accusantium reiciendis? Consequuntur maiores optio voluptates aperiam porro dolorem quas, exercitationem excepturi animi, ad aliquid blanditiis?</p>
          </div>
        </div>
      </div>
    </div>
  )
}