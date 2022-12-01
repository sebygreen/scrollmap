// components
import Scrollmap from "../../../components/Scrollmap";
// dependencies
import { supabase } from "../../../lib/supabase";
import { notFound } from "next/navigation";

export const revalidate = 3600; // revalidate every hour

export async function generateStaticParams() {
    const { data: scrollmaps } = await supabase.from("scrollmaps").select("*");
    return scrollmaps.map((scrollmap) => ({
        slug: scrollmap.slug,
    }));
}

async function getScroll(slug) {
    const { data, error } = await supabase.from("scrollmaps").select("*").eq("slug", slug);
    return { data, error };
}

export default async function Page({ params }) {
    if (!params) {
        return <h2>Error loading page.</h2>;
    } else {
        const scroll = await getScroll(params.slug);
        if (scroll.error) {
            return <h2>Error loading item.</h2>;
        } else {
            return <Scrollmap scrollmap={scroll.data[0]} />;
        }
    }
}
