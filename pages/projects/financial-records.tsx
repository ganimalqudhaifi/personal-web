import Image from "next/image";
import Link from "next/link";
import Divider from "../../components/Divider";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HiExternalLink } from "react-icons/hi";

export default function FinancialRecords() {
  return (
    <div className="w-full min-h-screen bg-zinc-900">
      <div className="flex justify-center lg:pt-10">
        <div className="w-full max-w-4xl text-white p-6 space-y-6">
          <Link href="/projects" className="flex items-center gap-2 text-zinc-300 hover:gap-2.5 hover:text-zinc-200 duration-300">
            <IoMdArrowRoundBack /><span>Back to Projects</span>
          </Link>
          <div>
            <h2 className="text-4xl font-semibold mb-1">Financial Records</h2>
            <p className="text-zinc-400">A web application that can track financial transaction in real-time</p>
          </div>
          <Divider/>
          <div className="flex justify-end gap-3 text-zinc-500">
            <Link href="https://github.com/ganimalqudhaifi/financial-records" target="_blank" className="flex items-center gap-1 duration-300 hover:text-zinc-300">
              <FaGithub/><span>Github</span>
            </Link>
            <Link href="https://financial-records.ganimalqudhaifi.my.id" target="_blank" className="flex items-center gap-1 duration-300 hover:text-zinc-300">
              <HiExternalLink /><span>View Demo</span>
            </Link>
          </div>
          <Image alt="financial records project" src="/project-financial-records.png" width={1000} height={1000} className="w-full rounded"/>
          <div className="py-8">
            <h2 className="text-3xl text-zinc-300 font-semibold mb-8">Introduction</h2>
            <p className="text-zinc-400 indent-12">Designed and developed using Next.js, the project prioritized web performance to ensure fast loading times and optimal user experience. The goal of this project was to design and develop a comprehensive financial records web application tailored for budgeting purposes. Leveraging modern technologies and best practices, the application aimed to provide users with a seamless and intuitive experience for managing their financial data effectively.</p>
          </div>
          <div>
            <h2 className="text-3xl text-zinc-300 font-semibold mb-8">Key Features</h2>
            <ul className="list-disc space-y-3 text-zinc-500 ml-5">
              <li><span className="text-zinc-300">Authentication</span><br/>Secure user authentication system to protect sensitive financial information.</li>
              <li><span className="text-zinc-300">Real-time Database</span><br/>Utilized a real-time database to ensure instant updates and synchronization of financial data across multiple devices.</li>
              <li><span className="text-zinc-300">CRUD Operations</span><br/>Implemented functionality for creating, reading, updating, and deleting financial records to provide users with full control over their data.</li>
              <li><span className="text-zinc-300">Pagination</span><br/>Implemented pagination to efficiently handle large datasets and enhance the application&apos;s performance.</li>
              <li><span className="text-zinc-300">Filtering and Search</span><br/>Integrated features for filtering and searching financial records based on various criteria, allowing users to quickly find the information they need.</li>
              <li><span className="text-zinc-300">Data Visualization</span><br/>Incorporated data visualization techniques to present financial data in an understandable and visually appealing manner, enabling users to gain insights into their budgeting patterns and trends.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl text-zinc-300 font-semibold mb-8">Tech Stack</h2>
            <ul className="list-disc space-y-3 text-zinc-500 ml-5">
              <li><span className="text-zinc-300">FrontEnd</span><br/>
                <ul className="list-disc list-inside">
                  <li>HTML, CSS, Javascript</li>
                  <li>Next.js for building dynamic user interface</li>
                  <li>Tailwind css for styling with utility class</li>
                </ul>
              </li>
            </ul>
            <ul className="list-disc space-y-3 text-zinc-500 ml-5">
              <li><span className="text-zinc-300">Frontend</span><br/>
                <ul className="list-disc list-inside">
                  <li>HTML, CSS, Javascript</li>
                  <li>Next.js for building dynamic user interface</li>
                  <li>Tailwind css for styling with utility class</li>
                  <li>Interactive motion design with framer motion</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}