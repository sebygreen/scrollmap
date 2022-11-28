// dependencies
import { supabase } from "../../lib/supabase";
// components
import Scrolls from "../../components/Scrolls";

export default async function Page() {
    const { data: scrollmaps, error } = await supabase.from("scrollmaps").select("*");
    if (error) {
        return <h2>Error loading items.</h2>;
    } else {
        return <Scrolls scrollmaps={scrollmaps} />;
    }
}
