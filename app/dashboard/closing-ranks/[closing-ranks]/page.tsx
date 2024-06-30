
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
              Closing Ranks
            </h2>
            <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base ">
              <option>All India Counselling - PG Medical</option>
            </select>
          </div>
          <p className="mt-2 text-base text-black dark:text-white">
            All India Counseling - PG Medical
          </p>
        </div>
        <div className="w-[48%] flex justify-end flex-col items-center">
          <div className="flex items-center justify-start px-3 py-2 ml-auto text-base rounded-md cursor-pointer bg-yellow-250 gap-x-3 ">
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
              className="lucide lucide-circle-alert"
            >
              <circle cx={12} cy={12} r={10} />
              <line x1={12} x2={12} y1={8} y2={12} />
              <line x1={12} x2="12.01" y1={16} y2={16} />
            </svg>{" "}
            Read this before looking at the Closing Ranks
          </div>
          <p className="ml-auto text-sm text-black dark:text-white">
            Click on the row for detailed information and factors.
          </p>
          <p className="ml-auto text-sm text-black dark:text-white">
            (*) Indicates additional remarks available in Details &amp; Factors.
          </p>
          <p className="ml-auto text-sm text-black dark:text-white">
            Click on Ranks to view the allotment list.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-start gap-x-3">
        <p className="text-base text-black dark:text-white">Counselling Rank</p>
        <div className="relative inline-flex items-center cursor-pointer">
          <label
            htmlFor="toggle-example"
            className="relative flex items-center cursor-pointer"
          >
            <input type="checkbox" id="toggle-example" className="sr-only" />
            <div className="h-6 bg-gray-200 border-2 border-gray-200 rounded-full toggle-bg w-11" />
          </label>
        </div>
        <p>All India Rank</p>
      </div>
      <div className="flex flex-wrap items-center justify-start my-6 gap-y-6 gap-x-6">
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select State</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Institute</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Course</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select State</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Round</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>MQI</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Select Institue Types</option>
        </select>
        <select className="w-fit border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base min-w-[290px]">
          <option>Course Types</option>
        </select>
      </div>
      <div className="w-full p-5 border border-gray-300 rounded-md mt-7 dark:border-gray-800">
        <div className="flex items-center justify-between ">
          <p className="text-sm text-black dark:text-white">
            1 - 3 of 20691 Records
          </p>
          <div className="flex items-center flex-wrap justify-end gap-x-4 w-[38%]">
            <div className="flex items-center justify-start text-sm gap-x-2 ">
              <input
                type="checkbox"
                className="rounded outline-none focus:outline-none "
              />
              Fee
            </div>
            <div className="flex items-center justify-start text-sm gap-x-2 ">
              <input
                type="checkbox"
                className="rounded outline-none focus:outline-none "
              />
              Stipend Year 1
            </div>
            <div className="flex items-center justify-start text-sm gap-x-2 ">
              <input
                type="checkbox"
                className="rounded outline-none focus:outline-none "
              />
              Bond Penalty
            </div>
            <div className="flex items-center justify-start text-sm gap-x-2 ">
              <input
                type="checkbox"
                className="rounded outline-none focus:outline-none "
              />
              Bond Years
            </div>
            <div className="flex items-center justify-start text-sm gap-x-2 ">
              <input
                type="checkbox"
                className="rounded outline-none focus:outline-none "
              />
              Beds (inst.)
            </div>
          </div>
        </div>
        <div className="w-full overflow-x-auto ">
          <table className="w-full mt-5 text-sm">
            <thead>
              <tr className="text-black bg-gray-300 rounded-md dark:text-white ">
                <th className="text-sm px-1.5 py-2 text-left text-nowrap rounded-l-md">
                  QUOTA
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  CATEGORY
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  STATE
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  INSTITUTE
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  COURSE
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  FEE
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  STIPEND YEAR 1
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  BOND YEARS
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  BOND PENALTY
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  BEDS
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap">
                  CR 2020 1
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2020 2
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2020 3
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2021 1
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2021 2
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2021 3
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2021 4
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2022 1
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2022 2
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2022 3
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2022 4
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2022 5
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2023 1
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2023 2
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2023 3
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap ">
                  CR 2023 4
                </th>
                <th className="text-sm px-1.5 py-2 text-left text-nowrap rounded-r-md">
                  CR 2023 5
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2 text-left  rounded-l-md">
                  1
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">1</td>
                <td className="text-sm px-1.5 py-2 text-left ">Delhi</td>
                <td className="text-sm px-1.5 py-2 text-left  text-blue-500">
                  VMMC, Delhi
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">
                  RADIO DIAGNOSIS
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">AIQ</td>
                <td className="text-sm px-1.5 py-2 text-left ">GEN</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹34,000*</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹1,15,004*</td>
                <td className="text-sm px-1.5 py-2 text-left ">0</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹0</td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  1550
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
              </tr>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2 text-left  rounded-l-md">
                  1
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">3</td>
                <td className="text-sm px-1.5 py-2 text-left ">Delhi</td>
                <td className="text-sm px-1.5 py-2 text-left  text-blue-500">
                  VMMC, Delhi
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">
                  RADIO DIAGNOSIS
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">AIQ</td>
                <td className="text-sm px-1.5 py-2 text-left ">GEN</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹34,000*</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹1,15,004*</td>
                <td className="text-sm px-1.5 py-2 text-left ">0</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹0</td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  1550
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
              </tr>
              <tr className="pb-3 border-b border-gray-300 last:border-0 dark:border-gray-800">
                <td className="text-sm px-1.5 py-2 text-left  rounded-l-md">
                  1
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">5</td>
                <td className="text-sm px-1.5 py-2 text-left ">Maharashtra</td>
                <td className="text-sm px-1.5 py-2 text-left  text-blue-500">
                  Lokmanya Tilak, Sion, Mumbai
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">
                  GENERAL MEDICINE
                </td>
                <td className="text-sm px-1.5 py-2 text-left ">AIQ</td>
                <td className="text-sm px-1.5 py-2 text-left ">GEN</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹1,03,900</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹65,791</td>
                <td className="text-sm px-1.5 py-2 text-left ">1</td>
                <td className="text-sm px-1.5 py-2 text-left ">₹50,00,000</td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  1460
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>{" "}
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
                <td className="text-sm px-1.5 py-2 text-left  rounded-r-md">
                  -
                </td>
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