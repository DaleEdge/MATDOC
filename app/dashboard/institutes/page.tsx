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
              Institute
            </h2>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-start my-6 gap-y-6 gap-x-6">
        <div className=" min-w-[290px] max-w-[290px] relative">
          {" "}
          <input
            type="search"
            className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]"
            placeholder="Search By Institute"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search absolute text-gray-400 -translate-y-1/2 top-1/2 right-2"
          >
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Institute Types</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Authority / Boards</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Universities</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select State</option>
        </select>
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
                  Institute
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  Universities
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  STATE
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  Institutes Type
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  Authority / Boards
                </th>
                <th className="text-sm px-1.5 py-2 text-nowrap  text-left">
                  Beds(inst.)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  Rangaraya Medical College
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  NTR medical and health college science
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  Andhra Pradesh
                </td>
                <td className="text-sm px-1.5 py-2  text-left text-blue-500">
                  Govt. institute
                </td>
                <td className="text-sm px-1.5 py-2  text-left">
                  State Authority
                </td>
                <td className="text-sm px-1.5 py-2  text-left">1450</td>
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