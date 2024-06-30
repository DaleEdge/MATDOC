
'use client'
import NavBar from "@/app/components/NavBar";
import Link from "next/link";

export default function Page(){
    return (
        <>
   
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <h2 className="mt-2 text-2xl font-bold text-black dark:text-white">
        Allotments
      </h2>
      <div className="w-full">
        <ul className="w-full mt-4">
          <li onClick={()=>window.location.replace("/dashboard/allotments/c")} className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">
              Central
            </h3>
            <p className="text-base text-blue-600 ">
              All India Counseling - PG Medical
            </p>
          </li>
          <li onClick={()=>window.location.replace("/dashboard/allotments/c")}  className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">
              Andhra Pradesh
            </h3>
            <p className="text-base text-blue-600 ">
              Andhra Pradesh Government Quota - PG Medical
            </p>
          </li>
          <li onClick={()=>window.location.replace("/dashboard/allotments/c")}  className="relative p-3 border-b border-gray-200 rounded-md cursor-pointer last:border-b-0 dark:border-gray-800 group hover:bg-gray-115">
            <h3 className="mb-1.5 text-lg font-bold text-orange-250">Assam</h3>
            <p className="text-base text-blue-600 ">Assam - PG Medical</p>
          </li>
        </ul>
      </div>
    </section>
 

        </>
    )
}