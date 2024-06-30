import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cjhjfwyrsdmjtlfmhgsz.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqaGpmd3lyc2RtanRsZm1oZ3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk2ODE2NDgsImV4cCI6MjAzNTI1NzY0OH0.cEF_5EOWqwwwPyhTEdaiW2S8HYoW2O4mXu2fhwLuRwA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// Add signup function
export async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({ email, password });
    return { user, error };
}

// Add login function
export async function signIn(email, password) {
    const { user, error } = await supabase.auth.signIn({ email, password });
    return { user, error };
}