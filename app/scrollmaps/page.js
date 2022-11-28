// dependencies
import { supabase } from "../../utils/supabase";
// components
import Scrolls from "../../components/Scrolls";

async function getData() {
    const { data, error } = await supabase.from("scrollmaps").select();
    if (error) {
        return (
            <p>
                No scrollmaps.<br>{error}</br>
            </p>
        );
    } else {
        console.log(data);
        return data;
    }
}

export default async function Page() {
    const scrollmaps = await getData();
    return <Scrolls scrollmaps={scrollmaps} />;
}
