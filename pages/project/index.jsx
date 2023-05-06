import Link from "next/link";
import { WebLayout } from "../../components";
import Image from "next/image";

export default function Index() {
  return (
    <>
      <WebLayout>
        <div>
          <h4 className="text-4xl text-zinc-100 font-semibold text-center">
            Project
          </h4>

          <section className="text-zinc-200">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
              <Link
                rel="noopener noreferrer"
                href="https://financial-records.ganimalqudhaifi.my.id"
                target="_blank"
                className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-zinc-900"
              >
                <Image
                  src="/project-financial-records.png"
                  width={1022}
                  height={560}
                  alt=""
                  className="object-contain ml-4 w-full h-64 rounded sm:h-96 lg:col-span-7 bg-zinc-900"
                />
                <div className="p-6 space-y-2 lg:col-span-5 text-zinc-300">
                  <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                    Financial Records
                  </h3>
                  <span className="text-xs text-zinc-400">April 2023</span>
                  <p>
                    Financial Records adalah sebuah web pencatatan keuangan yang
                    dibuat menggunakan framework dari NextJS.
                  </p>
                  <p>
                    Dengan memanfaatkan platform yang disediakan oleh google
                    yaitu firebase, web dapat bekerja terhadap user dan data
                    yang dikelola bersifat realtime.{" "}
                  </p>
                </div>
              </Link>

              <div className="flex justify-center">
                <button
                  type="button"
                  className="px-6 py-3 text-sm rounded-md hover:underline bg-zinc-800 text-gray-400"
                >
                  Next project coming soon...
                </button>
              </div>
            </div>
          </section>
        </div>
      </WebLayout>
    </>
  );
}
