// dependencies
import { supabase } from "../../lib/supabase";
// components
import Scrollmaps from "../../components/Scrollmaps";

export const revalidate = 3600; // revalidate every hour

async function getScrolls() {
    const { data, error } = await supabase.from("scrollmaps").select("*");
    if (error) {
        return undefined;
    } else {
        return <Scrollmaps scrollmaps={data} />;
    }
}

export default async function Page() {
    const scrollmaps = await getScrolls();
    return <Scrollmaps scrollmaps={scrollmaps} />;
}
