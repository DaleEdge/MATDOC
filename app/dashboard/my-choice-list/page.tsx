
'use client'

import NavBar from "@/app/components/NavBar"

export default function Page(){
    return (
        <>
   
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between mt-4">
        <div className="w-[38%]">
          <p className="text-lg font-bold text-center text-black dark:text-white ">
            Create Counseling specific Choice lists to curate your choices
            (preferred order of seats) specific to each counseling.
          </p>
          <p className="text-lg font-bold text-center text-black dark:text-white ">
            You can add to a preferred seat to a Choice list from the
            Allotments, Closing Ranks, Seat Matrix, and Fee, Stipend &amp; Bond
            menus.
          </p>
          <p className="mt-5 text-base text-center text-black dark:text-white">
            You don’t have any choice lists currently. Create one here or add
            from any of the sections.
          </p>
          <button
            type="button"
            className="flex items-center justify-center px-4 py-2 mx-auto mt-4 text-white rounded-md gap-x-3 bg-orange-250"
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
              className="lucide lucide-plus"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>{" "}
            Create Choice List
          </button>
        </div>
      </div>
    </section>


        </>
    )
}