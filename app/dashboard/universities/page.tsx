'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return (
        <>
      
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between w-full mt-4">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Universities <span className="text-lg text-gray-300">(134)</span>
        </h2>
        <div className="w-[48%] flex justify-end items-center gap-x-5">
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>University Type</option>
          </select>
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option >State / Authority</option>
          </select>
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
      <div className="flex justify-between w-full mt-10">
        <div className="w-[33%] overflow-y-auto ">
          <ul className="w-full">
            <li onClick={()=>window.location.replace('/dashboard/universities/ntr-university-of-health-sciences')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                NTR University of Health Sciences, VijayWada
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Andhra Pradesh{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">State Govt University</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/universities/srivenkateswara-institute-of-medical-sciences')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Sri Venkateswara Institute of Medical Sciences (SVIMS), Tirupati
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Andhra Pradesh{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">State Autonomous</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/universities/srimanta-shankardeva-university-of-health-sciences')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Srimanta Shankardeva University of Health Sciences, Guwahati
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Assam{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">State Govt University</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/universities/gauhati-university')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Gauhati University
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Assam{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">State Govt University</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className=" w-[65%]   border border-gray-300 rounded-md dark:border-gray-800">
          <div className="flex items-center justify-between w-full px-5 py-2 border-b border-gray-300 dark:border-gray-800">
            <h3 className="text-lg font-bold text-black dark:text-white">
              University Details
            </h3>
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
              className="lucide lucide-expand mr-2 cursor-pointer"
            >
              <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
              <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
              <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
              <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
            </svg>
          </div>
          <div className="p-7 ">
            <p className="text-xl text-gray-500">
              Select a University to see details
            </p>
          </div>
        </div>
      </div>
    </section>
 

        </>
    )
}