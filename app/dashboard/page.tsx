'use client'
import Image from "next/image";

export default function Home() {
  return (
    <main>
     
     <div id="root" className="light">
  <section className="relative flex w-full">
    <div>
      <div className="absolute top-5 border border-gray-800 dark:border-gray-400 dark:text-white rounded-full cursor-pointer    hidden lg:flex justify-center items-center bg-white dark:bg-black-100 duration-300 transition-ease text-black shadow-2xl w-6 h-6 z-50 left-[67px]">
        <svg
          className="lucide lucide-chevrons-right"
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
          <path d="m6 17 5-5-5-5" />
          <path d="m13 17 5-5-5-5" />
        </svg>
      </div>
      <section className="w-full fixed top-0 left-0 right-0 z-30 border-b border-gray-300 dark:border-gray-800 dark:bg-black-100 hidden md:flex justify-between items-center duration-300 ease-in-out  pl-28   py-3.5 pr-5            bg-white border-light-zusatzfarben h-16 dark:border-farbe ">
        <div className="flex items-center justify-between w-full gap-x-7 ">
          <div className="w-[35%] relative">
          <select className="flex items-center justify-between px-2 py-1 text-sm font-bold border border-gray-400 rounded cursor-pointer dark:border-gray-700 gap-x-1 w-max dark:text-white">
            <option id="NEET PG">NEET PG</option>
            <option id="NEET PG">UG</option>
            <option id="NEET PG">PG</option>
            <option id="NEET PG">MDS</option>
            <option id="NEET PG">SS</option>
            <option id="NEET PG">INI-CET PG</option>
            <option id="NEET PG">INI-CET SS</option>
            <option id="NEET PG">TN MRB Exam</option>
            </select>
          </div>
          <div className="w-[60%] flex justify-end items-center gap-x-4">
            <ul className="flex items-center justify-between dark:text-white gap-x-4">
              <li className="text-base font-semibold hover:bg-gray-400/20 dark:hover:bg-gray-300/20 py-1.5 px-3 rounded-lg text-black dark:text-white">
                <a
                  href="/dashboard/packages"
                  target=""
                >
                  Packages
                </a>
              </li>
              <li className="text-base font-semibold hover:bg-gray-400/20 dark:hover:bg-gray-300/20 py-1.5 px-3 rounded-lg text-black dark:text-white">
                <a
                  href="/dashboard/referral"
                  target=""
                >
                  Refer & Earn
                </a>
              </li>
              <li className="text-base font-semibold hover:bg-gray-400/20 dark:hover:bg-gray-300/20 py-1.5 px-3 rounded-lg text-black dark:text-white">
                <a
                  href="https://matdoc.vercel.app/contact-us"
                  target="_blank"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div onClick={()=>window.location.replace('/dashboard/profile')} className="relative flex items-center justify-end h-auto cursor-pointer w-fit ">
              <div className="flex items-center justify-center text-lg font-bold text-center text-gray-700 border border-gray-700 rounded-full w-9 h-9 bg-blue-50">
                H
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="  hidden md:block w-20 relative z-40 bg-white dark:bg-black-100  h-screen  border-r border-gray-300 dark:border-gray-800 duration-300 transition-ease ">
        <div className="w-full bg-white dark:bg-black-100 z-30 h-16 border-gray-300 dark:border-gray-800 py-3.5 border-b absolute top-0 right-0 left-0">
          <img
            alt="MAT DOC"
            className="pl-4 mx-auto cursor-pointer max-w-16 max-h-10"
            src="/assets/mat-doc--p8RqFdZ.png"
            title="MAT DOC"
          />
        </div>
        <div className="h-screen min-h-screen py-20 overflow-y-auto scroll-m-0 scroll-smooth">
          <ul>
            <li className=" mt-1.5 relative group text-black dark:text-white first:mt-0">
              <a
                className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize bg-orange-250/30 dark:bg-orange-250/40 text-orange-250   "
                href="/dashboard"
                title="Dashboard"
              >
                <svg
                  className="lucide lucide-layout-dashboard"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    height="9"
                    rx="1"
                    width="7"
                    x="3"
                    y="3"
                  />
                  <rect
                    height="5"
                    rx="1"
                    width="7"
                    x="14"
                    y="3"
                  />
                  <rect
                    height="9"
                    rx="1"
                    width="7"
                    x="14"
                    y="12"
                  />
                  <rect
                    height="5"
                    rx="1"
                    width="7"
                    x="3"
                    y="16"
                  />
                </svg>
              </a>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <a
                className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                href="/dashboard/videos"
                title="Videos"
              >
                <svg
                  className="lucide lucide-play"
                  fill="none"
                  height="22"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </a>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <div>
                <a
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard"
                  title="Data Section"
                >
                  <svg
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
                <ul className="mt-1.5">
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/allotments"
                    >
                      <svg
                        className="lucide lucide-git-pull-request"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="18"
                          cy="18"
                          r="3"
                        />
                        <circle
                          cx="6"
                          cy="6"
                          r="3"
                        />
                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                        <line
                          x1="6"
                          x2="6"
                          y1="9"
                          y2="21"
                        />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/closing-ranks"
                    >
                      <svg
                        fill="currentColor"
                        height="22"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 640 512"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/seat-matrix"
                    >
                      <svg
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M5 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M19 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M5 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                        <path d="M19 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/fee-stipend-and-bond"
                    >
                      <svg
                        className="lucide lucide-receipt-indian-rupee"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
                        <path d="M8 7h8" />
                        <path d="M12 17.5 8 15h1a4 4 0 0 0 0-8" />
                        <path d="M8 11h8" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <div>
                <a
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard"
                  title="Tools"
                >
                  <svg
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
                <ul className="mt-1.5">
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/rankscan"
                    >
                      <svg
                        className="lucide lucide-search"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="11"
                          cy="11"
                          r="8"
                        />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/seatIncrease"
                    >
                      <svg
                        className="lucide lucide-trending-up"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                        <polyline points="16 7 22 7 22 13" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/my-choice-list"
                    >
                      <svg
                        className="lucide lucide-heart"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <div>
                <a
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard"
                  title="Master Data"
                >
                  <svg
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
                <ul className="mt-1.5">
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/counsellings"
                    >
                      <svg
                        fill="currentColor"
                        height="22"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M256 16.457c-3.944 0-7.948.71-9.984 1.512-.5.195-.405.172-.62.303l-.005.018s-9.845 37.48-22.8 87.296c18.278 13.215 47.39 13.42 65.992.6l-21.978-87.913c-.218-.13-.123-.11-.62-.304-2.036-.802-6.04-1.513-9.984-1.513zm-52.875 164.38c-2.03 7.883-3.96 15.317-6.004 23.288-4.585 17.886-9.118 35.69-13.538 53.133 53.046 16.998 90.254 17.196 142.92.605l-19.092-76.36c-34.76 15.42-69.524 15.196-104.285-.665zm-39.16 155.007l-.012.05c-4.518 18.527-8.28 34.408-10.896 46.18-1.308 5.886-2.33 10.752-3.008 14.338-.678 3.586-.93 6.52-.93 5.852 0 7.406 2.56 13.51 7.732 19.422 5.17 5.91 13.12 11.357 23.136 15.808 20.032 8.903 48.042 13.71 76.012 13.71s55.98-4.807 76.012-13.71c10.016-4.45 17.965-9.898 23.136-15.808 4.975-5.686 7.47-11.58 7.657-18.61l-16.537-66.148c-55.62 33.65-127.023 33.288-182.303-1.084zm212.248 46.648l4.666 18.664v1.108c0 11.906-4.684 22.7-12.187 31.275-7.502 8.573-17.66 15.198-29.37 20.403-23.424 10.41-53.353 15.26-83.323 15.26-29.97 0-59.9-4.85-83.322-15.26-11.712-5.205-21.87-11.83-29.37-20.404-7.504-8.575-12.187-19.37-12.187-31.276 0-3.082.503-5.28 1.24-9.19.525-2.778 1.262-6.292 2.09-10.137l-84.56 28.186L256 497.003l206.11-85.88-85.897-28.63z" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/universities"
                    >
                      <svg
                        className="lucide lucide-university"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="12"
                          cy="10"
                          r="1"
                        />
                        <path d="M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
                        <path d="M6 17v.01" />
                        <path d="M6 13v.01" />
                        <path d="M18 17v.01" />
                        <path d="M18 13v.01" />
                        <path d="M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/institutes"
                    >
                      <svg
                        fill="currentColor"
                        height="22"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m21.857 8.485-3-5A.997.997 0 0 0 18 3h-4.586l-.707-.707a.999.999 0 0 0-1.414 0L10.586 3H6a.997.997 0 0 0-.857.485l-3 5A1.001 1.001 0 0 0 2.002 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h-.002c0-.178-.046-.356-.141-.515zM20 18h-6v-4h-4v4H4v-8h2.414l.293-.293 2-2L12 4.414l4.293 4.293 1 1 .293.293H20v8z" />
                        <circle
                          cx="11.895"
                          cy="9.895"
                          r="2.105"
                        />
                        <path d="M6 12h2v3H6zm10 0h2v3h-2z" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/courses"
                    >
                      <svg
                        className="lucide lucide-book-open"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <div>
                <a
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard"
                  title="FAQs & RESOURCES"
                >
                  <svg
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </a>
                <ul className="mt-1.5">
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/faq"
                    >
                      <svg
                        fill="currentColor"
                        height="22"
                        stroke="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM11 14V16H13V14H11ZM8.56731 8.81346L10.5288 9.20577C10.6656 8.51823 11.2723 8 12 8C12.8284 8 13.5 8.67157 13.5 9.5C13.5 10.3284 12.8284 11 12 11H11V13H12C13.933 13 15.5 11.433 15.5 9.5C15.5 7.567 13.933 6 12 6C10.302 6 8.88637 7.20919 8.56731 8.81346Z" />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/resources"
                    >
                      <svg
                        className="lucide lucide-sticky-note"
                        fill="none"
                        height="22"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        width="22"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z" />
                        <path d="M15 3v4a2 2 0 0 0 2 2h4" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="fixed pb-2.5 left-0 bottom-0 border-gray-300 dark:border-gray-800 bg-white dark:bg-black-100  border-t pt-2 flex justify-center items-center gap-x-3 toogle-dark w-[79px] ">
            <div className="relative flex items-center justify-center rounded-lg ">
              <button
                aria-checked="false"
                className=" relative inline-flex h-7 w-14 items-center outline-none rounded-full bg-lighter-whiter dark:bg-lighter-white"
                data-headlessui-state=""
                id="headlessui-switch-:r0:"
                role="switch"
                tabIndex={0}
                type="button"
              >
                <span className="translate-x-1  h-6 w-6 transform rounded-full bg-white dark:bg-black-100 transition flex justify-center items-center">
                  <svg
                    className="lucide lucide-sun text-black dark:text-white"
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
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                    />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                </span>
              </button>
            </div>
            <h4 className="text-black dark:text-white whitespace-nowrap hidden">
              {' '}Light mode
            </h4>
          </div>
        </div>
      </div>
      <div className="fixed z-40 flex items-center justify-between w-full px-5 py-5 bg-black ">
        <div className="flex items-center justify-end gap-x-5">
          <svg
            className="lucide lucide-menu z-30 text-light-zusatzfarben hover:text-gray-200 "
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
            <line
              x1="4"
              x2="20"
              y1="12"
              y2="12"
            />
            <line
              x1="4"
              x2="20"
              y1="6"
              y2="6"
            />
            <line
              x1="4"
              x2="20"
              y1="18"
              y2="18"
            />
          </svg>
        </div>
      </div>
    </div>
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
  </section>
</div>

    </main>
  );
}
