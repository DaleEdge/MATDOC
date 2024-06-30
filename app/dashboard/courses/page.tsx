
'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return (
        <>
  
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between w-full mt-4">
        <h2 className="text-2xl font-bold text-center text-black dark:text-white">
          Courses <span className="text-lg text-gray-300">(123)</span>
        </h2>
        <div className="w-[58%] flex justify-end items-center gap-x-5">
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>Clinical Type</option>
          </select>
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>Degree Terms</option>
          </select>
          <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>Degree Type</option>
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
      <div className="mt-10">
        <ul className="grid w-full grid-cols-3 col-span-3 gap-3">
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Anaesthesia
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Cardiology
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Child Health
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Clinical Pathology
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Community Medicine
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Dermatology, Venereology and Leprosy
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Diabetology
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Emergency Medicine
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Forensic Medicine
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
          <li
            className="col-span-1 p-3  border border-gray-300 rounded-md cursor-pointer  dark:border-gray-800 hover:bg-gray-115  dark:hover:bg-black 
           dark:bg-black-100
             bg-white 
        "
          >
            <h3 className="text-base font-semibold text-blue-500">
              Diploma in Health Administration
            </h3>
            <div className="mt-1.5 text-base font-medium">
              <p className="text-orange-250">
                Diploma{" "}
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">Diploma</span>
                <span className="inline-block w-2 h-2 mx-2 bg-gray-500 rounded-full" />
                <span className="text-gray-500">2 years</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>


        </>
    )
}