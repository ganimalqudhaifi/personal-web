import Link from "next/link";
import { PiBookBookmark, PiChalkboard, PiLinkSimple } from "react-icons/pi";

import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CustomImage from "@/components/custom-image";
import courseListReference from "@/data/courseListReference.json";
import uiListReference from "@/data/uiListReference.json";

export default function References() {
  return (
    <Layout>
      <PageHeader
        title="References"
        description="Recomendation of discovered source that I used"
      />
      <Divider />
      <div>
        <div className="flex items-center space-x-2 text-zinc-200">
          <PiBookBookmark size={24} />
          <h2 className="text-xl">Course</h2>
        </div>
        <p className="mt-2 mb-4 text-zinc-400">Recomendation Course</p>
        <div className="space-y-3 text-zinc-400">
          {courseListReference.map((course, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded border border-zinc-800/60 bg-zinc-600/5 p-2 shadow"
            >
              <div className="flex items-center space-x-2">
                <CustomImage
                  src={course.src}
                  alt={`${course.name} logo`}
                  width={48}
                  height={48}
                  className="w-12 rounded shadow"
                />
                <p>{course.name}</p>
              </div>
              <Link
                href={course.href}
                target="_blank"
                className="flex space-x-2 text-xl duration-300 hover:text-zinc-300"
              >
                <PiLinkSimple />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      <div>
        <div className="flex items-center space-x-2 text-zinc-200">
          <PiChalkboard size={24} />
          <h2 className="text-xl">UI</h2>
        </div>
        <p className="mt-2 mb-4 text-zinc-400">Recomendation UI Resources</p>
        <div className="space-y-3 text-zinc-400">
          {uiListReference.map((ui, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded border border-zinc-800/60 bg-zinc-600/5 p-2 shadow"
            >
              <p className="text-[15px] sm:text-base">{ui.name}</p>
              <Link
                href={ui.href}
                target="_blank"
                className="flex space-x-2 text-xl duration-300 hover:text-zinc-300"
              >
                <PiLinkSimple />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
