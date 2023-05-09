import Image from "next/image";
import { WebLayout } from "../components";

export default function Index() {
  return (
    <>
      <WebLayout>
        <div>
          <div className="text-gray-400">
            <div className="text-center">
              <p className="my-5 text-xs font-semibold tracking-wider uppercase">
                #Hello #World
              </p>
            </div>

            <div className="w-full flex items-center justify-center">
              <div className="w-36 h-36 flex justify-center rounded-full overflow-hidden bg-gray-500 border-gray-700">
                <Image width={200} height={200} src="/profile5.jpeg" alt="" />
              </div>
            </div>

            <p className="text-center mt-5">
              Hi! I&apos;m Andi Muhammad Ganim Alqudhaifi 👋
            </p>

            <div className="text-center mt-5">
              <div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                  Web Developer
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  Front-end Developer
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-red-900 text-red-300">
                  React Developer
                </span>
              </div>
              <div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">
                  HTML
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-pink-900 text-pink-300">
                  CSS
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-yellow-900 text-yellow-300">
                  Javascript
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-indigo-900 text-indigo-300">
                  NoSQL
                </span>
              </div>
              <div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-purple-900 text-purple-300">
                  TailwindCSS
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">
                  NodeJS
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
                  ReactJS
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-red-900 text-red-300">
                  NextJS
                </span>
              </div>
              <div>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-green-900 text-green-300">
                  VSCode
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-pink-900 text-pink-300">
                  Git & Github
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-yellow-900 text-yellow-300">
                  Firebase
                </span>
                <span className="text-xs font-medium mr-2 px-2.5 py-0.5 rounded bg-indigo-900 text-indigo-300">
                  MongoDB
                </span>
              </div>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
