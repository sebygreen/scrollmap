//data
import data from "../public/data.json";
//dependencies
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
//components
import { ArrowsExpandIcon, CubeTransparentIcon, HashtagIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import Button from "../components/Button";
import Viewer from "../components/overlays/Viewer";
//styles
import styles from "../styles/Scrollmap.module.css";

export default function Scrollmap() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Scrollmap</title>
            <meta name="description" content="this page is a showcase of Scrollmap's" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Scrollmap.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>Scrollmap</h1>
            <p>Scrollmap&apos;s were originally created from an idea of making tourism along river banks, coastlines, and streets a little funner by mapping said location as a long horizontal trail, with the then possibility of adding transport connections, places of interest, and much more.</p>
        </section>
    );
};

Scrollmap.Bottom = function Bottom() {
    const [showScroll, setShowScroll] = useState(false);
    const [index, setIndex] = useState(-1);

    function Ratio(width, height) {
        let raw = width / height;
        let result = Math.round((raw * 100) / 100);
        return result;
    }

    function Scroll({ id, name, image, height, width, alt, issue, location }) {
        return (
            <div className={styles.scroll}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h3>{name}</h3>
                        <div className={styles.metadata}>
                            <div className={styles.data}>
                                <HashtagIcon />
                                <p>Issue {issue}</p>
                            </div>
                            <div className={styles.data}>
                                <LocationMarkerIcon />
                                <p>{location}</p>
                            </div>
                            <div className={styles.data}>
                                <CubeTransparentIcon />
                                <p>{Ratio(width, height)}:1</p>
                            </div>
                        </div>
                    </div>
                    <Button
                        type="button"
                        text="Expand"
                        icon={<ArrowsExpandIcon />}
                        onClick={() => {
                            setIndex(id);
                            setShowScroll(true);
                        }}
                    />
                </div>
                <div className={styles.image}>
                    <Image alt={alt} src={`/images/scrollmaps/${image}.jpg`} layout="responsive" width={width} height={height} quality={70} />
                </div>
            </div>
        );
    }

    return (
        <section className={styles.content}>
            {data.scrollmaps.map((scrollmap) => (
                <Scroll key={scrollmap.id} id={scrollmap.id} name={scrollmap.name} image={scrollmap.image} width={scrollmap.width} height={scrollmap.height} alt={scrollmap.alt} issue={scrollmap.issue} location={scrollmap.location} />
            ))}
            <AnimatePresence>
                {showScroll && (
                    <Viewer
                        index={index}
                        onClose={() => {
                            setShowScroll(false);
                            setIndex(-1);
                        }}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};
