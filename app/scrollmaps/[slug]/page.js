// components
import Scrollmap from "../../../components/Scrollmap";
// dependencies
import { supabase } from "../../../lib/supabase";

export async function generateStaticParams() {
    const { data: scrollmaps } = await supabase.from("scrollmaps").select("*");
    return scrollmaps.map((scrollmap) => ({
        slug: scrollmap.slug,
    }));
}

export default async function Page({ params }) {
    if (!params) {
        return <h2>Error loading page.</h2>;
    } else {
        const { data: scrollmap, error } = await supabase.from("scrollmaps").select("*").eq("slug", params.slug);
        if (error) {
            return <h2>Error loading items.</h2>;
        } else {
            return <Scrollmap scrollmap={scrollmap} />;
        }
    }
}
