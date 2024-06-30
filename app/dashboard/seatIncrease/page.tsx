'use client'
import NavBar from "@/app/components/NavBar"
export default function Page(){
    return (
        <>
        <div id="root">
  <section className="relative flex w-full">
   <NavBar></NavBar>
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <div className="flex items-center justify-between mt-4">
        <div className="w-[48%]">
          <div className="flex items-center justify-start gap-x-3 ">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Seat Increase
            </h2>
          </div>
        </div>
        <div className="w-[48%] flex justify-end flex-col items-center">
          <p className="ml-auto text-sm text-black dark:text-white">
            Click on the row for detailed information and factors.
          </p>
        </div>
      </div>
      <div className="w-full p-5 border border-gray-300 rounded-md mt-7 dark:border-gray-800">
        <div className="w-full overflow-x-auto ">
          <h3 className="text-2xl font-bold text-center text-black dark:text-white">
            No Seat Increase Found
          </h3>
        </div>
      </div>
    </section>
  </section>
</div>

        </>
    )
}