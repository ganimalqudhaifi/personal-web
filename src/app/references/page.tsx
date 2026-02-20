import Link from "next/link";
import { IconType } from "react-icons";
import { PiBookBookmark, PiChalkboard, PiLinkSimple } from "react-icons/pi";

import Divider from "@/components/Divider";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import CustomImage from "@/components/custom-image";
import { courseListReferences } from "@/features/references/data/courseListReference";
import { uiListReferences } from "@/features/references/data/ui-list-references";

type SectionHeaderProps = {
  Icon: IconType;
  name: string;
  description: string;
};

const SectionHeader = ({ Icon, name, description }: SectionHeaderProps) => (
  <>
    <div className="flex items-center space-x-2 text-zinc-200">
      <Icon size={24} />
      <h2 className="text-xl">{name}</h2>
    </div>
    <p className="mt-2 mb-4 text-zinc-400">{description}</p>
  </>
);

export default function References() {
  return (
    <Layout>
      <PageHeader
        title="References"
        description="Recomendation of discovered source that I used"
      />
      <Divider />
      <div>
        <SectionHeader
          Icon={PiBookBookmark}
          name="Course"
          description="Recomendation Course"
        />
        <div className="space-y-3 text-zinc-400">
          {courseListReferences.map((course) => (
            <div
              key={course.name}
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
        <SectionHeader
          Icon={PiChalkboard}
          name="UI"
          description="Recomendation UI Resources"
        />
        <div className="space-y-3 text-zinc-400">
          {uiListReferences.map((ui) => (
            <div
              key={ui.name}
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
