import { certificateLists } from "../data/certificateLists";
import { Certificate } from "../types/certificate";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { PiCertificate } from "react-icons/pi";

import CustomImage from "@/components/custom-image";

const CertificateCard = ({ instance, title, date, href }: Certificate) => (
  <div className="group/certificate relative flex cursor-pointer items-center justify-between rounded border border-zinc-800/60 bg-zinc-600/5 p-2 subpixel-antialiased shadow duration-200 before:absolute before:inset-y-0 before:right-0 before:w-32 before:from-transparent before:via-zinc-900/80 before:to-zinc-900 before:content-[''] hover:scale-[1.02] hover:border-zinc-700/50 before:hover:bg-gradient-to-r">
    <div className="flex items-center space-x-3">
      <CustomImage
        src={`/logo/${instance}.png`}
        alt={`${instance} logo`}
        width={64}
        height={64}
        className="w-16 rounded shadow"
      />
      <div>
        <p className="text-sm text-indigo-300 capitalize">{instance}</p>
        <p className="mb-0.5 text-zinc-400">{title}</p>
        <p className="text-sm text-zinc-500">{date}</p>
      </div>
    </div>
    <Link href={href} target="_blank">
      <BiLinkExternal className="absolute right-0 hidden w-6 h-6 mr-4 duration-300 -translate-y-1/2 top-1/2 text-zinc-600 hover:scale-110 hover:text-zinc-400 group-hover/certificate:block" />
    </Link>
  </div>
);

export default function CertificatesSection() {
  return (
    <div>
      <div className="flex items-center space-x-2 text-zinc-200">
        <PiCertificate size={24} />
        <h2 className="text-xl">Certificates</h2>
      </div>
      <p className="mt-2 mb-4 text-zinc-400">
        My Course Completion Certificates
      </p>
      <div className="space-y-4">
        {certificateLists.map((certificate) => (
          <CertificateCard {...certificate} key={certificate.title} />
        ))}
      </div>
    </div>
  );
}
