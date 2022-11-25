//data
import data from "../public/data.json";
//dependencies
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
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
            <h1>Scrollmap&apos;s</h1>
            <p>
                Scrollmap&apos;s were originally created from an idea of making tourism along river banks, coastlines, and streets a little funner by mapping said location as a long horizontal trail, with the then possibility of adding
                transport connections, places of interest, and much more.
            </p>
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

    const scrollmap = {
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const scroll = {
        hidden: {
            opacity: 0,
            y: "-10px",
            transition: {
                duration: 0.3,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
    };

    return (
        <>
            <motion.section initial="hidden" animate="visible" variants={scrollmap} className={styles.content}>
                {data.scrollmaps.map((scrollmap) => (
                    <motion.div variants={scroll} key={scrollmap.id} className={styles.scroll}>
                        <div className={styles.info}>
                            <div className={styles.text}>
                                <h3>{scrollmap.name}</h3>
                                <div className={styles.metadata}>
                                    <div className={styles.data}>
                                        <HashtagIcon />
                                        <p>Issue 6</p>
                                    </div>
                                    <div className={styles.data}>
                                        <LocationMarkerIcon />
                                        <p>{scrollmap.location}</p>
                                    </div>
                                    <div className={styles.data}>
                                        <CubeTransparentIcon />
                                        <p>{Ratio(scrollmap.width, scrollmap.height)}:1</p>
                                    </div>
                                </div>
                            </div>
                            <Button
                                type="button"
                                text="Expand"
                                icon={<ArrowsExpandIcon />}
                                onClick={() => {
                                    setIndex(scrollmap.id);
                                    setShowScroll(true);
                                }}
                            />
                        </div>
                        <div className={styles.image}>
                            <Image alt={scrollmap.alt} src={`/images/scrollmaps/${scrollmap.image}.jpg`} layout="responsive" width={scrollmap.width} height={scrollmap.height} quality={70} />
                        </div>
                    </motion.div>
                ))}
            </motion.section>
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
        </>
    );
};
