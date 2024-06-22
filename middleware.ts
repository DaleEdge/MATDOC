import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/middleware";
import { redirect } from "next/dist/server/api-utils";

export async function middleware(request: NextRequest) {
  
  // This `try/catch` block is only here for the interactive tutorial.
  // Feel free to remove once you have Supabase connected.
  const { supabase, response } = createClient(request);

  // Refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/auth-helpers/nextjs#managing-session-with-middleware
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    const {error} = await supabase.from('user').upsert({name:session.user.user_metadata.full_name,email:session.user.email})
    if(error){
      console.log(error)
      
    }
    else{
    return response;
    }
  }
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = "/login";
  redirectUrl.searchParams.set(`redirectedFrom`, request.nextUrl.pathname);
  return NextResponse.redirect(redirectUrl);
}

export const config = {
  // list all the pages you want protected here
  matcher: [
    "/",
    "/dashboard/:path*"
  ],
};
