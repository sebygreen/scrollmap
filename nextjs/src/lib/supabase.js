// Caching data with Next.js 13 and Supabase
// See the docs: https://beta.nextjs.org/docs/data-fetching/caching
import { createClient } from "@supabase/supabase-js";
export const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
