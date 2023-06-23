// dependencies
import { supabase } from "@/lib/supabase";
// components
import Scrollmaps from "@/components/Scrollmaps";

export const revalidate = 3600; // revalidate every hour

export const metadata = {
    title: "Scrollmaps",
};

async function getScrolls() {
    const { data, error } = await supabase.from("scrollmaps").select("*");
    if (error) {
        return error;
    } else {
        return data;
    }
}

export async function generateStaticParams() {
    var scrollmaps = await getScrolls();
    return scrollmaps.map((scroll) => ({
        slug: scroll.slug,
    }));
}

export default async function Page() {
    var scrollmaps = await getScrolls();
    return <Scrollmaps scrollmaps={scrollmaps} />;
}
