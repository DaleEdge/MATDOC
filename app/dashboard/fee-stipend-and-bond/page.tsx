'use client'
export default function Page(){
    return (
        <>
     <div id="root">
  <section className="relative flex w-full">
    <div>
      <div className="absolute top-5 border border-gray-800 dark:border-gray-400 dark:text-white rounded-full cursor-pointer    hidden lg:flex justify-center items-center bg-white dark:bg-black-100 duration-300 transition-ease text-black shadow-2xl w-6 h-6 z-50 left-[67px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevrons-right"
        >
          <path d="m6 17 5-5-5-5" />
          <path d="m13 17 5-5-5-5" />
        </svg>
      </div>
      <section
        className="w-full fixed top-0 left-0 right-0 z-30 border-b border-gray-300 dark:border-gray-800 dark:bg-black-100 hidden md:flex justify-between items-center duration-300 ease-in-out  pl-28   py-3.5 pr-5 
     bg-white border-light-zusatzfarben h-16 dark:border-farbe "
      >
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
                <a href="/dashboard/packages" target="">
                  Packages
                </a>
              </li>
              <li className="text-base font-semibold hover:bg-gray-400/20 dark:hover:bg-gray-300/20 py-1.5 px-3 rounded-lg text-black dark:text-white">
                <a href="/dashboard/referral" target="">
                  Refer &amp; Earn
                </a>
              </li>
              <li className="text-base font-semibold hover:bg-gray-400/20 dark:hover:bg-gray-300/20 py-1.5 px-3 rounded-lg text-black dark:text-white">
                <a href="https://matdoc.vercel.app/contact-us" target="_blank">
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
            src="/assets/mat-doc--p8RqFdZ.png"
            alt="MAT DOC"
            title="MAT DOC"
            className="pl-4 mx-auto cursor-pointer max-w-16 max-h-10"
          />
        </div>
        <div className="h-screen min-h-screen py-20 overflow-y-auto scroll-m-0 scroll-smooth">
          <ul>
            <li className=" mt-1.5 relative group text-black dark:text-white first:mt-0">
              <a
                title="Dashboard"
                className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                href="/dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-layout-dashboard"
                >
                  <rect width={7} height={9} x={3} y={3} rx={1} />
                  <rect width={7} height={5} x={14} y={3} rx={1} />
                  <rect width={7} height={9} x={14} y={12} rx={1} />
                  <rect width={7} height={5} x={3} y={16} rx={1} />
                </svg>
              </a>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <a
                title="Videos"
                className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                href="/dashboard/videos"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-play"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </a>
            </li>
            <li className=" mt-1.5 relative group text-black dark:text-white ">
              <div>
                <a
                  title="Data Section"
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard/fee-stipend-and-bond"
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
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-git-pull-request"
                      >
                        <circle cx={18} cy={18} r={3} />
                        <circle cx={6} cy={6} r={3} />
                        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
                        <line x1={6} x2={6} y1={9} y2={21} />
                      </svg>
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/closing-ranks"
                    >
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 640 512"
                        height={22}
                        width={22}
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
                        stroke="currentColor"
                        fill="none"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height={22}
                        width={22}
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
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize bg-orange-250/30 dark:bg-orange-250/40 text-orange-250   "
                      href="/dashboard/fee-stipend-and-bond"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-receipt-indian-rupee"
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
                  title="Tools"
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard/fee-stipend-and-bond"
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
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
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
                    </a>
                  </li>
                  <li className="  mt-1 relative group  ">
                    <a
                      className="flex justify-start items-center gap-x-2 pl-6 hover:bg-gray-400/20 dark:hover:bg-gray-300/20  py-1.5  group duration-300 text-base ease-in-out transition capitalize text-black dark:text-white"
                      href="/dashboard/seatIncrease"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-trending-up"
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-heart"
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
                  title="Master Data"
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard/fee-stipend-and-bond"
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
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 512 512"
                        height={22}
                        width={22}
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-university"
                      >
                        <circle cx={12} cy={10} r={1} />
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
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m21.857 8.485-3-5A.997.997 0 0 0 18 3h-4.586l-.707-.707a.999.999 0 0 0-1.414 0L10.586 3H6a.997.997 0 0 0-.857.485l-3 5A1.001 1.001 0 0 0 2.002 9H2v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9h-.002c0-.178-.046-.356-.141-.515zM20 18h-6v-4h-4v4H4v-8h2.414l.293-.293 2-2L12 4.414l4.293 4.293 1 1 .293.293H20v8z" />
                        <circle cx="11.895" cy="9.895" r="2.105" />
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-book-open"
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
                  title="FAQs & RESOURCES"
                  className="flex justify-start text-gray-500 items-center gap-x-2 pl-6 mt-3  group duration-300  ease-in-out transition capitalize "
                  href="/dashboard/fee-stipend-and-bond"
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
                    className="lucide lucide-chevron-down duration-300 ease-in-out  rotate-180"
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
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        height={22}
                        width={22}
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
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={22}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-sticky-note"
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
                className=" relative inline-flex h-7 w-14 items-center outline-none rounded-full bg-lighter-whiter dark:bg-lighter-white"
                id="headlessui-switch-:r0:"
                role="switch"
                type="button"
                tabIndex={0}
                aria-checked="false"
                data-headlessui-state=""
              >
                <span className="translate-x-1  h-6 w-6 transform rounded-full bg-white dark:bg-black-100 transition flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-sun text-black dark:text-white"
                  >
                    <circle cx={12} cy={12} r={4} />
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
              {" "}
              Light mode
            </h4>
          </div>
        </div>
      </div>
      <div className="fixed z-40 flex items-center justify-between w-full px-5 py-5 bg-black ">
        <div className="flex items-center justify-end gap-x-5">
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
            className="lucide lucide-menu z-30 text-light-zusatzfarben hover:text-gray-200 "
          >
            <line x1={4} x2={20} y1={12} y2={12} />
            <line x1={4} x2={20} y1={6} y2={6} />
            <line x1={4} x2={20} y1={18} y2={18} />
          </svg>
        </div>
      </div>
    </div>
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <h2 className="mt-2 text-2xl font-bold text-black dark:text-white">
        Fee, Stipend and Bond
      </h2>
      <div className="w-full">
        <ul className="w-full mt-4">
          <li onClick={()=>window.location.replace("/dashboard/fee-stipend-and-bond/c")}  className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">
              Central
            </h3>
            <p className="text-base text-blue-600 ">
              All India Counseling - PG Medical
            </p>
          </li>
          <li onClick={()=>window.location.replace("/dashboard/fee-stipend-and-bond/c")}  className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">
              Andhra Pradesh
            </h3>
            <p className="text-base text-blue-600 ">
              Andhra Pradesh Government Quota - PG Medical
            </p>
          </li>
          <li onClick={()=>window.location.replace("/dashboard/fee-stipend-and-bond/c")}  className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">Assam</h3>
            <p className="text-base text-blue-600 ">Assam - PG Medical</p>
          </li>
        </ul>
      </div>
    </section>
  </section>
</div>


        </>
    )
}