
'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return (
        <>
        
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between w-full mt-4">
        <div className="w-[42%] flex justify-start items-center gap-x-5">
          <h2 className="text-2xl font-bold text-center text-black dark:text-white">
            FAQs
          </h2>
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-4 outline-none  text-base ">
            <option>Common</option>
          </select>
        </div>
        <div className="w-[58%] flex justify-end items-center gap-x-5">
          <div className="relative w-fit ">
            <input
              type="search"
              className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base"
              placeholder="Search by name"
            />
            <div className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-10 text-white rounded-r-md bg-orange-250">
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
                className="lucide lucide-search"
              >
                <circle cx={11} cy={11} r={8} />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  

        </>
    )
}