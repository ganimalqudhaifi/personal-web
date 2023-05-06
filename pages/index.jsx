import Image from "next/image";
import { WebLayout } from "../components";

export default function Index() {
  return (
    <>
      <WebLayout>
        <div>
          <div className="m-6 space-y-5">
            <div className="flex-col text-gray-400">
              <div className="text-center">
                <p className="my-10 text-xs font-semibold tracking-wider uppercase">
                  #Hello #World
                </p>
              </div>

              <div className="w-full flex items-center justify-center">
                <div className="w-36 h-36 flex justify-center rounded-full overflow-hidden bg-gray-500 border-gray-700">
                  <Image width={200} height={200} src="/profile5.jpeg" alt="" />
                </div>
              </div>
              <p className="text-center mt-4">
                Hi! I&apos;m Andi Muhammad Ganim Alqudhaifi 👋
              </p>
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}
