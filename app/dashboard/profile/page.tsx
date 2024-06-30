'use client'

import NavBar from "@/app/components/NavBar"
import { createClient } from "@/utils/supabase/client"
import { useEffect, useState } from "react"

export default function Page(){
  const supabase = createClient()
  const [name,setName] = useState('')
  const [dob,setDob] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [state,setState] = useState('')
  const [exam,setExam] = useState('')
  

  async function update(){
    const {data:{user}} = await supabase.auth.getUser()
if(user){
    const {error} = await supabase.from('user').upsert({id:user.id,name:name,dob:dob,phone:phone,state:state,exam:exam})
    if(error){
      console.log(error)
    }
    else{
      window.location.replace('/dashboard')
    }
    
}
  }
  useEffect(()=>{
    async function fetch(){
      const {data:{user}} = await supabase.auth.getUser()
if(user){
      const {data,error} = await supabase.from('user').select('*').eq('id',user.id)
      if(error){
        console.log(error)
      }
        else{
          if(data && data.length>0){
            setName(data[0]["name"])
            setEmail(data[0]["email"])
            setDob(data[0]["dob"])
            setState(data[0]["state"])
            setPhone(data[0]["phone"])
            setExam(data[0]["exam"])
          }
        
      }
}
    }
    fetch()
  },[])
return(
<>
    <section className="w-full h-screen px-4 py-16 overflow-y-auto bg-white dark:bg-black-100">
      <h2 className="mt-2 text-2xl font-bold text-center text-black dark:text-white">
        My profile
      </h2>
      <div className="w-[40%] border rounded-md border-gray-300 dark:border-gray-800 p-8 mt-10 bg-gray-115 mx-auto">
        <div className="flex items-center justify-center w-20 h-20 p-2 mx-auto text-4xl font-extrabold text-center text-black border border-black rounded-full bg-blue-50">
          H
        </div>
        <h2 className="mt-3 text-lg font-bold text-center text-black dark:text-white">
{name}        </h2>
        <form className="w-full mt-5">
          <label className="text-base font-semibold text-black dark:text-white">
            Phone Number
          </label>
          <input
          onChange={(e:any)=>{setPhone(e.target.value)}}
          defaultValue={phone}
            type="text"
            className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-1 mb-3  text-base"
            placeholder="Phone number"
          />
          <label className="text-base font-semibold text-black dark:text-white">
            Email
          </label>
          <input
            type="Email"
            disabled
            
            defaultValue={email}
            className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-1 mb-3 text-base"
            placeholder="Your email"
          />
          <label className="text-base font-semibold text-black dark:text-white">
            Date of birth
          </label>
          <input
                    onChange={(e:any)=>{setDob(e.target.value)}}

          defaultValue={dob}
            type="date"
            className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-1 mb-3 text-base"
            placeholder="Date of birth"
          />
          <label className="text-base font-semibold text-black dark:text-white">
            State
          </label>
          <input
          defaultValue={state}
          onChange={(e:any)=>{setState(e.target.value)}}

            type="text"
            className="w-full border bg-transparent dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-1 mb-3 text-base"
            placeholder="State"
          />
          <label className="text-base font-semibold text-black dark:text-white">
            Preferred Exam
          </label>
          <input
                    onChange={(e:any)=>{setExam(e.target.value)}}

          defaultValue={exam}
            type="text"
            className="w-full border bg-transparent mb-6 dark:text-white dark:border-gray-800   border-gray-300 rounded-md py-1.5 px-2 outline-none mt-1  text-base"
            placeholder="Preferred Exam"
          />
          <button
            type="button"
            onClick={()=>update()}
            className="w-full common-btn bottom-0  !text-white !bg-black blue mt-6 text-base md:text-lg h-11"
          >
            Edit
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={28}
              height={28}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-move-right ml-3"
            >
              <path d="M18 8L22 12L18 16" />
              <path d="M2 12H22" />
            </svg>
          </button>
        </form>
      </div>
    </section>
</>)}
