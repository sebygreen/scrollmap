// components
import { Suspense } from "react";
import Image from "next/image";

// css
import styles from "@/styles/Home.module.css";

import HomeItem from "@/components/HomeItem";
import UpdateList from "@/components/UpdateList";

export const metadata = {
    description:
        "Scrollmap is a digital museum for all artworks related to Stephen Green. All works are digitized, and available for viewing here.",
};

export default function Page() {
    return (
        <section className={styles.explorer}>
            <HomeItem
                title="Scrollmap's"
                description="Scrollmap's are a unique blend of map illustration and a time tested format: scrolls."
                href="/scrollmaps"
                image="location"
            />
            <HomeItem
                title="Cards"
                description="Many of Stephen's works were digitized in card format. This is a showcase of them."
                href="/cards"
                image="picture"
            />
            <HomeItem
                title="Illustrations"
                description="Many works here are not part of a particular series or are in too broad of a category."
                href="/illustrations"
                image="paint-kit"
            />
            <HomeItem
                title="Extra"
                description="Stephen's music, photos and other miscellaneous projects are stored on this page."
                href="/extra"
                image="folder"
            />
        </section>
    );
}
