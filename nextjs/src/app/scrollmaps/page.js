// dependencies
import PocketBase from "pocketbase";
// components
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";
import styles from "@/styles/Scrollmaps.module.css";

export const metadata = {
    title: "Scrollmaps",
};

async function getScrollmaps() {
    const pb = new PocketBase("http://pocketbase:8090");
    try {
        const records = await pb
            .collection("scrollmaps")
            .getFullList({ sort: "+location" });
        return records;
    } catch (e) {
        throw new Error(e);
    }
}

export async function generateStaticParams() {
    var scrollmaps = await getScrollmaps();
    return scrollmaps.map((scrollmap) => ({
        slug: scrollmap.slug,
    }));
}

export default async function Page() {
    var scrollmaps = await getScrollmaps();
    return (
        <section className={styles.content}>
            {scrollmaps.map((scrollmap) => (
                <div key={scrollmap.id} className={styles.scrollmap}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h3>{scrollmap.name}</h3>
                            <div className={styles.metadata}>
                                <div className={styles.data}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p>Version {scrollmap.version}</p>
                                </div>
                                <div className={styles.data}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>

                                    <p>{scrollmap.location}</p>
                                </div>
                            </div>
                        </div>
                        <Button
                            type="link"
                            href={"/scrollmaps/" + scrollmap.slug}
                            text="Expand"
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M15 3.75a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V5.56l-3.97 3.97a.75.75 0 11-1.06-1.06l3.97-3.97h-2.69a.75.75 0 01-.75-.75zm-12 0A.75.75 0 013.75 3h4.5a.75.75 0 010 1.5H5.56l3.97 3.97a.75.75 0 01-1.06 1.06L4.5 5.56v2.69a.75.75 0 01-1.5 0v-4.5zm11.47 11.78a.75.75 0 111.06-1.06l3.97 3.97v-2.69a.75.75 0 011.5 0v4.5a.75.75 0 01-.75.75h-4.5a.75.75 0 010-1.5h2.69l-3.97-3.97zm-4.94-1.06a.75.75 0 010 1.06L5.56 19.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.97-3.97a.75.75 0 011.06 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            }
                        />
                    </div>
                    <Image
                        className={styles.image}
                        src={`http://pocketbase:8090/api/files/scrollmaps/${scrollmap.id}/${scrollmap.file}`}
                        height={scrollmap.height}
                        width={scrollmap.width}
                        quality={70}
                        alt={scrollmap.name}
                        priority={true}
                    />
                </div>
            ))}
        </section>
    );
}
