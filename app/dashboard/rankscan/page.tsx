'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return (
        <>
        
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between mt-4">
        <div className="w-[48%]">
          <div className="flex items-center justify-start gap-x-3 ">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Rank Scan
            </h2>
          </div>
        </div>
        <div className="w-[48%] flex justify-end flex-col items-center">
          <p className="ml-auto text-sm text-black dark:text-white">
            Click on the row for detailed information and factors.
          </p>
        </div>
      </div>
      <div className="w-full p-5 border border-gray-300 rounded-md mt-7 dark:border-gray-800">
        <div className="flex items-center justify-between ">
          <p className="text-sm text-black dark:text-white">
            1 - 3 of 133176 Records in 2023 session
          </p>
        </div>
        <div className="w-full overflow-x-auto ">
          <table className="w-full mt-5 text-sm">
            <thead>
              <tr className="text-black bg-gray-300 rounded-md dark:text-white ">
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left rounded-l-md">
                  AI RANK
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  COUNSELLING
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  ROUND
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  STATE
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  INSTITUTE
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  COURSE
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  QUOTA
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  CATEGORY
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2  text-left">1</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  All India PG
                </td>
                <td className="text-sm px-1.5 py-2  text-left">3</td>
                <td className="text-sm px-1.5 py-2  text-left">Delhi</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  VMMC, Delhi
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  RADIO DIAGNOSIS
                </td>
                <td className="text-sm px-1.5 py-2  text-left">AIQ</td>
                <td className="text-sm px-1.5 py-2  text-left">GEN</td>
              </tr>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2  text-left">1</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  All India PG
                </td>
                <td className="text-sm px-1.5 py-2  text-left">2</td>
                <td className="text-sm px-1.5 py-2  text-left">Delhi</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  VMMC, Delhi
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  RADIO DIAGNOSIS
                </td>
                <td className="text-sm px-1.5 py-2  text-left">AIQ</td>
                <td className="text-sm px-1.5 py-2  text-left">GEN</td>
              </tr>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2  text-left">1</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  All India PG
                </td>
                <td className="text-sm px-1.5 py-2  text-left">1</td>
                <td className="text-sm px-1.5 py-2  text-left">Delhi</td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  VMMC, Delhi
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  RADIO DIAGNOSIS
                </td>
                <td className="text-sm px-1.5 py-2  text-left">AIQ</td>
                <td className="text-sm px-1.5 py-2  text-left">GEN</td>
              </tr>
            </tbody>
          </table>
          <div className="w-full px-4 pt-8 pb-4 mt-4 rounded-md bg-gray-115 dark:bg-neutral-900">
            <div className="mx-auto text-black border border-gray-300 rounded-md py-7 px-7 dark:border-gray-800 w-fit dark:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={26}
                height={26}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-lock"
              >
                <rect width={18} height={11} x={3} y={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </div>
            <h4 className="mt-4 text-base font-semibold text-center text-black dark:text-white">
              Content Locked
            </h4>
            <p className="mt-2 text-sm text-center text-black dark:text-white">
              Please purchase a NEET PG package to view more.
            </p>
          </div>
        </div>
      </div>
    </section>


        </>
    )
}