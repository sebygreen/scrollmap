// dependencies
import { supabase } from "../../lib/supabase";
// components
import Scrollmaps from "../../components/Scrollmaps";

export const revalidate = 3600; // revalidate every hour

export default async function Page() {
    const { data: scrollmaps, error } = await supabase.from("scrollmaps").select("*");
    if (error) {
        return <h2>Error loading items.</h2>;
    } else {
        return <Scrollmaps scrollmaps={scrollmaps} />;
    }
}
