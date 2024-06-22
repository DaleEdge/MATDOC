'use client'
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
export default function Login ( ) { 
    const supabase = createClient()
    const signWithGoogle = async () => {
        const origin = window.location.origin;
        const { data, error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: `${origin}/auth/callback`,
          },
        });
    
        if (error) {
          console.log(error);
        }
        if (data.url) {
          return redirect(data.url);
        }
      };
    return  ( 
        <div className=" w-screen h-screen flex items-center content-center bg-black">
            <button onClick={()=>signWithGoogle()} className="bg-orange-500 mx-auto rounded-lg font-semibold text-white px-8 text-xs py-4">Sign In With Google</button>
        </div>
    )
}