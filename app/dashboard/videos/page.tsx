'use client'

import NavBar from "@/app/components/NavBar"

export default function Videos ( ) { 
    return  ( 
     <>  
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between pt-2">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          Videos
        </h2>
        <div className="w-[40%] flex justify-end items-center gap-x-4">
          <select className="w-[49%] border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
            <option>Select Counselling</option>
          </select>
          <div className="relative w-[49%] ">
            <input
              type="search"
              className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base"
              placeholder="Search by title"
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
      <div className="flex flex-wrap justify-between w-full mt-10">
        <div className="w-[24%]">
          <img
            src="https://media.zynerd.com/VIDEOS/54/thumbnail-20230929-090730.jpg"
            className="w-full max-h-[350px] rounded-md "
            alt="All India Round 3 Joining | NEET PG 2023"
            title="All India Round 3 Joining | NEET PG 2023"
          />
          <p className="mt-2 text-base font-medium text-black dark:text-white line-clamp-1">
            All India Round 3 Joining | NEET PG 2023
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            9 hours
          </p>
        </div>
        <div className="w-[24%]">
          <img
            src="https://media.zynerd.com/VIDEOS/53/thumbnail-20230928-211942.jpg"
            className="w-full max-h-[350px] rounded-md "
            alt="Online Portal for Joining and Registration (OPJR) | NEET PG 2023"
            title="Online Portal for Joining and Registration (OPJR) | NEET PG 2023"
          />
          <p className="mt-2 text-base font-medium text-black dark:text-white line-clamp-1">
            Online Portal for Joining and Registration (OPJR) | NEET PG 2023
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            21 hours
          </p>
        </div>
        <div className="w-[24%]">
          <img
            src="https://media.zynerd.com/VIDEOS/51/thumbnail-20230922-223344.jpg"
            className="w-full max-h-[350px] rounded-md "
            alt="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
            title="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
          />
          <p className="mt-2 text-base font-medium text-black dark:text-white line-clamp-1">
            All India Round 3 Choice Filling | Points to Noted Before You Start
            Again..! | NEETPG 2023
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            24 hours
          </p>
        </div>
        <div className="w-[24%]">
          <img
            src="https://media.zynerd.com/VIDEOS/49/thumbnail-20230912-230237.jpg"
            className="w-full max-h-[350px] rounded-md "
            alt="All India Round 2 Resignation & State Timelines | NEET PG 2023"
            title="All India Round 2 Resignation & State Timelines | NEET PG 2023"
          />
          <p className="mt-2 text-base font-medium text-black dark:text-white line-clamp-1">
            All India Round 2 Resignation &amp; State Timelines | NEET PG 2023
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
            26 hours
          </p>
        </div>
      </div>
    </section>
 </>

    )
}