'use client'
import Image from "next/image";

export default function Home() {
  return (
    <main>
     
  
    <section className="flex justify-between w-full pt-2 ">
      <div className=" w-[66%] bg-gray-115 dark:bg-neutral-900   px-4 py-16 h-screen overflow-y-auto">
        <div className="flex items-center justify-between">
          <div className="w-[40%]">
            <h1 className="text-3xl font-bold text-orange-250 ">
              Hello, Sanjith Kumar
            </h1>
            <p className="text-sm font-medium text-black dark:text-white">
              Get all your NEET PG info here!
            </p>
          </div>
          <div className="w-[55%] flex justify-end items-center">
            <div className="flex items-center justify-start w-full border border-orange-250">
              <div className="w-[15%] h-full border-r  border-orange-250">
                <img
                  alt="The Ultimate NEET PG Counseling Information | NEET PG 2023"
                  className="w-full h-full"
                  src="https://i.ytimg.com/vi/1cLK8RxmM-Y/hq720.jpg"
                  title="The Ultimate NEET PG Counseling Information | NEET PG 2023"
                />
              </div>
              <div className="px-2 line-clamp-1 w-[70%] ">
                <p className="text-base font-bold text-black dark:text-white">
                  The Ultimate NEET PG Counseling Information | NEET PG 2023
                </p>
              </div>
              <div className="w-[15%] flex justify-end items-center pr-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-250">
                  <svg
                    className="lucide lucide-play text-white dark:text-black"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="6 3 20 12 6 21 6 3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border border-gray-300 dark:border-gray-800 rounded-md p-4 bg-white dark:bg-black-100 mt-4">
          <h5 className="text-base font-semibold text-black dark:text-white">
            MAT DOC Bulletins
          </h5>
          <p className="mt-4 text-base text-black dark:text-white">
            Welcome to MAT DOC! The NEET PG 2024 Exams are scheduled for June 23, 2024 and the next crucial stage of Counsellings shall begin. We are here to help you out in this journey!
          </p>
          <p className="mt-4 text-base text-black dark:text-white">
            If you are looking at MAT DOC subscriptions for NEET PG 2024, we will be opening up plans for NEET PG 2024 once the exams are over (on June 23, 2024).
          </p>
          <h5 className="mt-4 text-base font-semibold text-black dark:text-white">
            We wish you the best for NEET PG 2024
          </h5>
        </div>
        <div className="flex justify-between w-full mt-4">
          <div className="w-[49%]">
            <div className="w-full border border-gray-300 dark:border-gray-800 rounded-md p-4 bg-white dark:bg-black-100 undefined">
              <h5 className="text-base font-semibold text-black dark:text-white">
                Counselling Timeline
              </h5>
              <select className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-4 text-base ">
                <option disabled>
                  {' '}All India Counselling - PG Medical
                </option>
              </select>
              <ul className="mt-4 ml-3 border-l-2 border-gray-300 border-dashed dark:border-gray-400">
                <li className="pl-4 relative mt-4 first:mt-0 before:content-[''] before:w-4 before:h-4 before:border-2 before:rounded-full before:absolute before:dark:bg-black-100 before:-left-2 before:bg-white before:top-1.5 before:border-gray-300  before:dark:border-gray-400">
                  <h5 className="text-base font-semibold text-black dark:text-white ">
                    Round 1 Registration Start Date
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    5th Jul - Tentative Timeline
                  </p>
                </li>
                <li className="pl-4 relative mt-4 first:mt-0 before:content-[''] before:w-4 before:h-4 before:border-2 before:rounded-full before:absolute before:dark:bg-black-100 before:-left-2 before:bg-white before:top-1.5 before:border-gray-300  before:dark:border-gray-400">
                  <h5 className="text-base font-semibold text-black dark:text-white ">
                    Round 1 Choice Filling Start Date
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    6th Jul - Tentative Timeline - Usually happens with NEET PG
                  </p>
                </li>
                <li className="pl-4 relative mt-4 first:mt-0 before:content-[''] before:w-4 before:h-4 before:border-2 before:rounded-full before:absolute before:dark:bg-black-100 before:-left-2 before:bg-white before:top-1.5 before:border-gray-300  before:dark:border-gray-400">
                  <h5 className="text-base font-semibold text-black dark:text-white ">
                    Round 1 Registration End Date
                  </h5>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    11th Jul - Tentative Timeline
                  </p>
                </li>
              </ul>
              <div className="w-full px-4 pt-8 pb-4 mt-4 rounded-md bg-gray-115 dark:bg-neutral-900">
                <div className="mx-auto text-black border border-gray-300 rounded-md py-7 px-7 dark:border-gray-800 w-fit dark:text-white">
                  <svg
                    className="lucide lucide-lock"
                    fill="none"
                    height="26"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="26"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      height="11"
                      rx="2"
                      ry="2"
                      width="18"
                      x="3"
                      y="11"
                    />
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
          <div className="w-[49%]">
            <div className="w-full border border-gray-300 dark:border-gray-800 rounded-md p-4 bg-white dark:bg-black-100 undefined">
              <div className="flex items-center justify-between w-full">
                <h5 className="text-base font-semibold text-black dark:text-white">
                  Videos
                </h5>
                <a
                  className="flex items-center justify-end text-orange-250 gap-x-2"
                  href="/dashboard/videos"
                >
                  <p className="text-sm">
                    Show more
                  </p>
                  <svg
                    className="lucide lucide-arrow-right"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
              <ul className="w-full mt-4">
                <li className="relative first:mt-0 mt-1.5 cursor-pointer  group flex justify-start gap-x-4 items-center hover:bg-gray-200 rounded-md  bg-gray-115 dark:bg-black p-2">
                  <div className="flex items-center justify-center w-[25%] ">
                    <img
                      alt="All India Round 3 Joining | NEET PG 2023"
                      className="w-full rounded-md "
                      src="https://media.zynerd.com/VIDEOS/54/thumbnail-20230929-090730.jpg"
                      title="All India Round 3 Joining | NEET PG 2023"
                    />
                  </div>
                  <div className="w-[72%]">
                    <h3 className="text-sm text-black dark:text-white ">
                      All India Round 3 Joining | NEET PG 2023{' '}
                    </h3>
                    <p className="text-xs text-black dark:text-white">
                      34 weeks ago
                    </p>
                  </div>
                  <div className="absolute items-center justify-center hidden w-8 h-8 -translate-y-1/2 rounded-full right-5 top-1/2 group-hover:flex bg-orange-250 ">
                    <svg
                      className="lucide lucide-play text-white dark:text-black "
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </li>
                <li className="relative first:mt-0 mt-1.5 cursor-pointer  group flex justify-start gap-x-4 items-center hover:bg-gray-200 rounded-md  bg-gray-115 dark:bg-black p-2">
                  <div className="flex items-center justify-center w-[25%] ">
                    <img
                      alt="  Online Portal for Joining and Registration (OPJR) | NEET PG 2023"
                      className="w-full rounded-md "
                      src="https://media.zynerd.com/VIDEOS/53/thumbnail-20230928-211942.jpg"
                      title="  Online Portal for Joining and Registration (OPJR) | NEET PG 2023"
                    />
                  </div>
                  <div className="w-[72%]">
                    <h3 className="text-sm text-black dark:text-white ">
                      Online Portal for Joining and Registration (OPJR) | NEET PG 2023
                    </h3>
                    <p className="text-xs text-black dark:text-white">
                      34 weeks ago
                    </p>
                  </div>
                  <div className="absolute items-center justify-center hidden w-8 h-8 -translate-y-1/2 rounded-full right-5 top-1/2 group-hover:flex bg-orange-250 ">
                    <svg
                      className="lucide lucide-play text-white dark:text-black "
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </li>
                <li className="relative first:mt-0 mt-1.5 cursor-pointer  group flex justify-start gap-x-4 items-center hover:bg-gray-200 rounded-md  bg-gray-115 dark:bg-black p-2">
                  <div className="flex items-center justify-center w-[25%] ">
                    <img
                      alt="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
                      className="w-full rounded-md "
                      src="https://media.zynerd.com/VIDEOS/51/thumbnail-20230922-223344.jpg"
                      title="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
                    />
                  </div>
                  <div className="w-[72%]">
                    <h3 className="text-sm text-black dark:text-white ">
                      All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023{' '}
                    </h3>
                    <p className="text-xs text-black dark:text-white">
                      35 weeks ago
                    </p>
                  </div>
                  <div className="absolute items-center justify-center hidden w-8 h-8 -translate-y-1/2 rounded-full right-5 top-1/2 group-hover:flex bg-orange-250 ">
                    <svg
                      className="lucide lucide-play text-white dark:text-black "
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </li>
                <li className="relative first:mt-0 mt-1.5 cursor-pointer  group flex justify-start gap-x-4 items-center hover:bg-gray-200 rounded-md  bg-gray-115  dark:bg-black p-2">
                  <div className="flex items-center justify-center w-[25%] ">
                    <img
                      alt="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
                      className="w-full rounded-md "
                      src="https://media.zynerd.com/VIDEOS/42/thumbnail-20230829-232423.jpg"
                      title="All India Round 3 Choice Filling | Points to Noted Before You Start Again..! | NEETPG 2023"
                    />
                  </div>
                  <div className="w-[72%]">
                    <h3 className="text-sm text-black dark:text-white ">
                      All India Counseling | Precursor - AI R2 to State R2 and beyond - Part 1 | NEET PG 2023
                    </h3>
                    <p className="text-xs text-black dark:text-white">
                      38 weeks ago
                    </p>
                    <div className="px-2 py-1 mt-1 text-xs text-center text-white rounded-md bg-orange-250 dark:text-black w-fit">
                      Exclusive
                    </div>
                  </div>
                  <div className="absolute items-center justify-center hidden w-8 h-8 -translate-y-1/2 rounded-full right-5 top-1/2 group-hover:flex bg-orange-250 ">
                    <svg
                      className="lucide lucide-play text-white dark:text-black "
                      fill="none"
                      height="20"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polygon points="6 3 20 12 6 21 6 3" />
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white dark:bg-black-100 px-4 py-16 h-screen overflow-y-auto w-[34%]">
        <div className="flex   items-center justify-between">
          <div className="w-[65%]">
            <select className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none text-base ">
              <option disabled>
                All
              </option>
            </select>
          </div>
          <div className="w-[34%]">
            <button
              className="w-full border bg-transparent flex justify-center items-center dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none text-base "
              type="button"
            >
              <svg
                className="lucide lucide-expand mr-2"
                fill="none"
                height="20"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
                <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
                <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
                <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
              </svg>
              {' '}Full Screen
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full">
          <div className="mt-4  w-full ">
            <div className="undefined w-full border border-gray-300 dark:border-gray-800 rounded-md p-4 bg-white dark:bg-black-100 ">
              <h5 className="text-base font-semibold text-black dark:text-white">
                Announcements
              </h5>
              <div className="flex items-center justify-between w-full mt-4">
                <div className="relative w-[65%] ">
                  <input
                    className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base"
                    placeholder="Search Announcement"
                    type="search"
                  />
                  <svg
                    className="lucide lucide-search absolute -translate-y-1/2 dark:text-white right-2 top-1/2"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                    />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div className="relative  w-[34%]">
                  <div className="flex items-center justify-between w-full px-2 py-1 text-base bg-transparent border border-gray-300 rounded-md outline-none dark:text-white dark:border-gray-800">
                    <button className="px-2 min-w-12 py-1 text-sm rounded-md flex justify-center items-center font-medium  bg-orange-250 text-white dark:text-black">
                      All
                    </button>
                    <button className="px-2 min-w-12 py-1 text-sm rounded-md flex justify-center items-center font-medium text-black dark:text-white">
                      Today
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <ul className="w-full">
                    <li className="hover:bg-gray-115 dark:hover:bg-black py-1.5 px-2 rounded-md  duration-200 ease-in-out">
                      <div className="flex items-center justify-between ">
                        <div className="w-[6%]">
                          <p className="text-xs text-black dark:text-white">
                            Jan
                          </p>
                          <p className="text-xs text-black dark:text-white">
                            24
                          </p>
                        </div>
                        <div className="w-[80%]">
                          <p className="text-sm font-medium text-black dark:text-white">
                            Notice regarding Refund of Security Deposit / Refund List for Eligible Candidate shared
                          </p>
                          <div className="mt-1 text-xs text-blue-500">
                            All India Counseling - PG Medical
                            <span className="inline-flex w-1.5 ml-1 h-1.5 text-blue-500 bg-blue-500 rounded-full " />
                            {' '}
                            <span className="text-xs text-orange-250">
                              Notification
                            </span>
                            {' '}
                          </div>
                        </div>
                        <div className="w-[10%] flex justify-end items-center text-black dark:text-white ">
                          <svg
                            className="lucide lucide-chevron-up duration-200 ease-in-out  false"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="h-0 duration-200 ease-in-out overflow-hidden mt-2">
                        <a
                          className="flex items-center justify-center px-2 rounded-md py-1.5  text-xs text-black bg-white border border-gray-300 dark:text-white dark:bg-black-100 w-fit dark:border-gray-800"
                          href="/dashboard"
                        >
                          Notice{' '}
                          <svg
                            className="lucide lucide-square-arrow-out-up-right ml-2 "
                            fill="none"
                            height="18"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                            <path d="m21 3-9 9" />
                            <path d="M15 3h6v6" />
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="w-full px-4 pt-8 pb-4 mt-4 rounded-md bg-gray-115 dark:bg-neutral-900">
                    <div className="mx-auto text-black border border-gray-300 rounded-md py-7 px-7 dark:border-gray-800 w-fit dark:text-white">
                      <svg
                        className="lucide lucide-lock"
                        fill="none"
                        height="26"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height="11"
                          rx="2"
                          ry="2"
                          width="18"
                          x="3"
                          y="11"
                        />
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
                {' '}
              </div>
            </div>
          </div>
          <div className="mt-4  w-full ">
            <div className="undefined w-full border border-gray-300 dark:border-gray-800 rounded-md p-4 bg-white dark:bg-black-100 ">
              <h5 className="text-base font-semibold text-black dark:text-white">
                Events
              </h5>
              <div className="flex items-center justify-between w-full mt-4">
                <div className="relative w-[47%] ">
                  <input
                    className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none  text-base"
                    placeholder="Search Events"
                    type="search"
                  />
                  <svg
                    className="lucide lucide-search absolute -translate-y-1/2 right-2 top-1/2 dark:text-white"
                    fill="none"
                    height="20"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="8"
                    />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <div className="relative  w-[52%]">
                  <div className="flex items-center justify-between w-full px-2 py-1 text-base bg-transparent border border-gray-300 rounded-md outline-none dark:text-white dark:border-gray-800">
                    <button className="px-2 min-w-12 py-1 text-sm rounded-md flex justify-center items-center font-medium  bg-orange-250 text-white dark:text-black">
                      Past
                    </button>
                    <button className="px-2 min-w-12 py-1 text-sm rounded-md flex justify-center items-center font-medium text-black dark:text-white">
                      Today
                    </button>
                    <button className="px-2 min-w-12 py-1 text-sm rounded-md flex justify-center items-center font-medium text-black dark:text-white">
                      Upcoming
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="w-full">
                  <ul className="w-full">
                    <li className="hover:bg-gray-115 py-1.5 px-2 rounded-md dark:hover:bg-black  duration-200 ease-in-out">
                      <div className="flex items-center justify-between ">
                        <div className="w-[6%]">
                          <p className="text-xs text-black dark:text-white">
                            Dec
                          </p>
                          <p className="text-xs text-black dark:text-white">
                            01
                          </p>
                        </div>
                        <div className="w-[80%]">
                          <p className="text-sm font-medium text-black dark:text-white">
                            Odisha - PG Medical - Special Stray Vacancy Round 2 - Reporting Physically to Allotted College with Original Documents ends
                          </p>
                          <div className="mt-1 text-xs text-blue-500">
                            <span className="text-[12px] font-medium text-[#01579B]">
                              Odisha - PG Medical
                            </span>
                            <span className="inline-flex w-1.5 ml-1 h-1.5 text-blue-500 bg-blue-500 rounded-full " />
                            {' '}
                            <span className="text-xs text-orange-250" />
                            {' '}
                          </div>
                        </div>
                        <div className="w-[10%] flex justify-end items-center text-black dark:text-white ">
                          <svg
                            className="lucide lucide-chevron-up duration-200 ease-in-out  false"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m18 15-6-6-6 6" />
                          </svg>
                        </div>
                      </div>
                      <div className="h-0 duration-200 ease-in-out overflow-hidden mt-2">
                        <a
                          className="flex items-center justify-center px-2 rounded-md py-1.5  text-xs text-black bg-white border border-gray-300 dark:text-white dark:bg-black-100 w-fit dark:border-gray-800"
                          href="/dashboard"
                        >
                          Link{' '}
                          <svg
                            className="lucide lucide-square-arrow-out-up-right ml-2 "
                            fill="none"
                            height="18"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="18"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                            <path d="m21 3-9 9" />
                            <path d="M15 3h6v6" />
                          </svg>
                        </a>
                      </div>
                    </li>
                  </ul>
                  <div className="w-full px-4 pt-8 pb-4 mt-4 rounded-md bg-gray-115 dark:bg-neutral-900">
                    <div className="mx-auto text-black border border-gray-300 rounded-md py-7 px-7 dark:border-gray-800 w-fit dark:text-white">
                      <svg
                        className="lucide lucide-lock"
                        fill="none"
                        height="26"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="26"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          height="11"
                          rx="2"
                          ry="2"
                          width="18"
                          x="3"
                          y="11"
                        />
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
                {' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  

    </main>
  );
}
