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

export default async function Page({ params }) {
    if (!params) {
        return notFound();
    } else {
        const { data, error } = await supabase.from("scrollmaps").select().eq("slug", params.slug);
        if (error) {
            return <h2>Error loading items.</h2>;
        } else {
            return <Scrollmap scrollmap={data[0]} />;
        }
    }
}
