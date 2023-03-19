// components
import Scrollmap from "../../../components/Scrollmap";
// dependencies
import { supabase } from "../../../lib/supabase";

export const revalidate = 3600; // revalidate every hour

async function getScroll(slug) {
    const { data, error } = await supabase.from("scrollmaps").select("*").eq("slug", slug);
    if (error) {
        console.error(error);
        return error;
    } else {
        return data;
    }
}

export async function generateMetadata({ params }) {
    var scroll = await getScroll(params.slug);
    return { title: scroll[0].name };
}

export default async function Page({ params }) {
    if (!params) {
        return <h2>Error loading page parameters.</h2>;
    } else {
        const scroll = await getScroll(params.slug);
        if (scroll.error) {
            return <h2>Error loading item.</h2>;
        } else {
            return <Scrollmap scrollmap={scroll[0]} />;
        }
    }
}
