'use client'

import NavBar from "@/app/components/NavBar"

export default function Page({ params }: { params: { slug: string } }){
    return (
        <>
      
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between w-full mt-4">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Counsellings <span className="text-lg text-gray-300">(41)</span>
        </h2>
        <div className="w-[48%] flex justify-end items-center gap-x-5">
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option >Counselling Type</option>
          </select>
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>State / Authority</option>
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
            <li onClick={()=>window.location.replace('/dashboard/counsellings/All-India-Counselling')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black">
              <h3 className="text-base font-semibold text-blue-500">
                All India Counseling - PG Medical
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Central{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">All India</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/counsellings/AFMS-Through-MCC')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                AFMS (through MCC) - PG Medical
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Central{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">AFMS</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/counsellings/Andhra-Pradesh-Government-Quota')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Andhra Pradesh Government Quota - PG Medical
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Andhra Pradesh{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">Government Quota</span>
                </p>
              </div>
            </li>
            <li onClick={()=>window.location.replace('/dashboard/counsellings/Andhra-Pradesh-Management-Quota')} className="w-full p-3 mt-3  border border-gray-300 rounded-md cursor-pointer first:mt-0 dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black bg-white dark:bg-black-100">
              <h3 className="text-base font-semibold text-blue-500">
                Andhra Pradesh Management Quota - PG Medical
              </h3>
              <div className="mt-1.5 text-base font-medium">
                <p className="text-orange-250">
                  Andhra Pradesh{" "}
                  <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                  <span className="text-gray-500">Management Quota</span>
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className=" w-[65%]   border border-gray-300 rounded-md dark:border-gray-800">
          <div className="flex items-center justify-between w-full px-5 py-2 border-b border-gray-300 dark:border-gray-800">
            <h3 className="text-lg font-bold text-black dark:text-white">
              Counselling Details
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
            <h2 className="text-2xl font-bold text-black dark:text-white">
              {params.slug.replaceAll('-',' ').toUpperCase()}
            </h2>
            <p className="mt-2 text-orange-250">
              Central{" "}
              <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
              <span className="text-gray-500">All India</span>
            </p>
            <div className="flex items-center justify-start mt-5 gap-x-5">
              <a
                className="flex items-center justify-center px-3 py-1.5 text-base font-medium text-black dark:text-white bg-transparent border border-gray-300 rounded-md dark:border-gray-800"
                href="https://mcc.nic.in/pg-medical-counselling/"
                target="_blank"
              >
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
                  className="lucide lucide-globe mr-2 text-blue-500"
                >
                  <circle cx={12} cy={12} r={10} />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>{" "}
                Website
              </a>
              <a
                className="flex items-center justify-center px-3 py-1.5 text-base font-medium text-black dark:text-white bg-transparent border border-gray-300 rounded-md dark:border-gray-800"
                href="https://cdnbbsr.s3waas.gov.in/s3e0f7a4d0ef9b84b83b693bbf3feb8e6e/uploads/2023/07/2023072475.pdf"
                target="_blank"
              >
                Prospectus
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
                  className="lucide lucide-square-arrow-out-up-right ml-2"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </a>
              <a
                className="flex items-center justify-center px-3 py-1.5 text-base font-medium text-black dark:text-white bg-transparent border border-gray-300 rounded-md dark:border-gray-800"
                href="/dashboard/counsellings"
                target="_blank"
              >
                Registration
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
                  className="lucide lucide-square-arrow-out-up-right ml-2"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </a>
            </div>
            <p className="text-base text-black first:text-white mt-7">Quotas</p>
            <ul className="w-full mt-4 ml-5 text-sm font-medium text-black list-disc dark:text-white">
              <li className="mt-1 first:mt-0">AIQ</li>
              <li className="mt-1 first:mt-0">DNB Post MBBS</li>
              <li className="mt-1 first:mt-0">NBE Diploma</li>
              <li className="mt-1 first:mt-0">MNG</li>
              <li className="mt-1 first:mt-0">MM</li>
              <li className="mt-1 first:mt-0">JM</li>
              <li className="mt-1 first:mt-0">NRI</li>
              <li className="mt-1 first:mt-0">DU</li>
              <li className="mt-1 first:mt-0">IP</li>
              <li className="mt-1 first:mt-0">BHU</li>
              <li className="mt-1 first:mt-0">AMU</li>
              <li className="mt-1 first:mt-0">CIQ</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  

        </>
    )
}