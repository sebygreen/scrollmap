"use client";
// dependencies
import Image from "next/image";
import { motion } from "framer-motion";
// components
import { ArrowsPointingOutIcon, CubeTransparentIcon, HashtagIcon, MapPinIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
// styles
import styles from "../styles/Scrollmaps.module.css";

export default function Scrollmaps({ scrollmaps }) {
    const container = {
        hidden: {
            transition: {
                when: "afterChildren",
            },
        },
        visible: {
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
                duration: 0.2,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.2,
                type: "linear",
                damping: 0,
                stiffness: 0,
            },
        },
    };

    return (
        <motion.section initial="hidden" animate="visible" variants={container} className={styles.content}>
            {scrollmaps.map((scrollmap) => (
                <motion.div variants={scroll} key={scrollmap.id} className={styles.scroll}>
                    <div className={styles.info}>
                        <div className={styles.text}>
                            <h3>{scrollmap.name}</h3>
                            <div className={styles.metadata}>
                                <div className={styles.data}>
                                    <HashtagIcon />
                                    <p>Issue {scrollmap.issue}</p>
                                </div>
                                <div className={styles.data}>
                                    <MapPinIcon />
                                    <p>{scrollmap.location}</p>
                                </div>
                                <div className={styles.data}>
                                    <CubeTransparentIcon />
                                    <p>{scrollmap.ratio}</p>
                                </div>
                            </div>
                        </div>
                        <Button type="link" href="/scrollmaps" text="Expand" icon={<ArrowsPointingOutIcon />} />
                    </div>
                    <Image className={styles.image} alt={scrollmap.alt} src={scrollmap.img} height={scrollmap.height} width={scrollmap.width} quality={70} />
                </motion.div>
            ))}
        </motion.section>
    );
}
