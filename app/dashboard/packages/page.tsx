
'use client'
import NavBar from "@/app/components/NavBar";
import DropdownMenu from "@/app/components/dropdown";
import Packages from "@/app/components/packages";
import Link from "next/link";

export default function Page(){
    return (
        <>
       
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
     <Packages/>
    </section>
  

        </>
    )
}