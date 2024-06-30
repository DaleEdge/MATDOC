'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){

return(
  <>

    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <h2 className="mt-4 text-2xl font-bold text-center text-black dark:text-white">
        Refer &amp; Earn
      </h2>
      <div className="flex items-center justify-between w-[90%] mx-auto mt-7">
        <div className="w-[50%]">
          <h1 className="text-5xl font-bold text-black dark:text-white">
            We value friendships. Quite literally.
          </h1>
          <h3 className="mt-6 text-lg font-medium text-black dark:text-white">
            Help your friends get a discount off of their first purchase and you
            earn
          </h3>
          <ul className="my-10 text-base font-medium text-black dark:text-white">
            <li className="flex items-center justify-start mt-4 gap-x-4 first:mt-0">
              <div className="flex items-center justify-center w-8 h-10 rounded bg-gray-115 dark:bg-black">
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
                  className="lucide lucide-log-out text-black dark:text-white"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1={21} x2={9} y1={12} y2={12} />
                </svg>
              </div>{" "}
              Friend Signs up with your referral code.
            </li>
            <li className="flex items-center justify-start mt-4 gap-x-4 first:mt-0">
              <div className="flex items-center justify-center w-8 h-10 rounded bg-gray-115 dark:bg-black">
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
                  className="lucide lucide-ticket-plus text-black dark:text-white"
                >
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
                  <path d="M9 12h6" />
                  <path d="M12 9v6" />
                </svg>
              </div>{" "}
              Friend receives a discount on their first purchase.
            </li>
            <li className="flex items-center justify-start mt-4 gap-x-4 first:mt-0">
              <div className="flex items-center justify-center w-8 h-10 rounded bg-gray-115 dark:bg-black">
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
                  className="lucide lucide-badge-indian-rupee text-black dark:text-white"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="M8 8h8" />
                  <path d="M8 12h8" />
                  <path d="m13 17-5-1h1a4 4 0 0 0 0-8" />
                </svg>
              </div>{" "}
              You receive a reward when your friend makes their first purchase.
            </li>
            <li className="flex items-center justify-start mt-4 gap-x-4 first:mt-0">
              <div className="flex items-center justify-center w-8 h-10 rounded bg-gray-115 dark:bg-black">
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
                  className="lucide lucide-refresh-ccw-dot text-black dark:text-white"
                >
                  <path d="M3 2v6h6" />
                  <path d="M21 12A9 9 0 0 0 6 5.3L3 8" />
                  <path d="M21 22v-6h-6" />
                  <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7" />
                  <circle cx={12} cy={12} r={1} />
                </svg>
              </div>
              Repeat and earn more rewards by referring more friends.
            </li>
          </ul>
          <a
            className="text-black underline dark:text-white"
            href="/dashboard/referral"
          >
            View reward details
          </a>
          <div className="mt-5 cursor-pointer w-fit border flex justify-center items-center gap-x-2 px-3 py-1.5 border-gray-300 rounded bg-blue-300/50 dark:border-gray-800">
            Your Exclusive Code: VFHXWNBT
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
              className="lucide lucide-files text-black dark:text-white "
            >
              <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
              <path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z" />
              <path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8" />
            </svg>
          </div>
          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
            Click on the copy icon to copy to clipboard
          </p>
        </div>
        <div className="w-[47%] flex justify-end items-center">
          <img
            src="https://portal.zynerd.com/static/media/ReferAFriend.55def1fb9565af304826.svg"
            alt="Refer & Earn"
            title="Refer & Earn"
            className="max-w-full w-fit"
          />
        </div>
      </div>
    </section>
 </>
)
}