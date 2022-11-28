"use client";
// dependencies
import Image from "next/image";
import { motion } from "framer-motion";
// styles
import styles from "../../styles/Cards.module.css";

export default function Cards() {
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

    const place = {
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
        <motion.section initial="hidden" animate="visible" variants={container} className={styles.places}>
            <motion.div variants={place} className={styles.place}>
                <div className={styles.header}>
                    <div>
                        <Image alt={"Flag of England"} src={"/assets/flags/uk.png"} width={24} height={24} quality={100} />
                        <h2>England</h2>
                    </div>
                    <p className={styles.counter}>
                        0 <span>Items</span>
                    </p>
                </div>
                <div className={styles.masonry}></div>
            </motion.div>
            <motion.div variants={place} className={styles.place}>
                <div className={styles.header}>
                    <div>
                        <Image alt={"Flag of Portugal"} src={"/assets/flags/pt.png"} width={24} height={24} quality={100} />
                        <h2>Portugal</h2>
                    </div>
                    <p className={styles.counter}>
                        0 <span>Items</span>
                    </p>
                </div>
                <div className={styles.masonry}></div>
            </motion.div>
            <motion.div variants={place} className={styles.place}>
                <div className={styles.header}>
                    <div>
                        <Image alt={"Flag of Switzerland"} src={"/assets/flags/ch.png"} width={24} height={24} quality={100} />
                        <h2>Switzerland</h2>
                    </div>
                    <p className={styles.counter}>
                        0 <span>Items</span>
                    </p>
                </div>
                <div className={styles.masonry}></div>
            </motion.div>
            <motion.div variants={place} className={styles.place}>
                <div className={styles.header}>
                    <div>
                        <Image alt={"Flag of France"} src={"/assets/flags/fr.png"} width={24} height={24} quality={100} />
                        <h2>France</h2>
                    </div>
                    <p className={styles.counter}>
                        0 <span>Items</span>
                    </p>
                </div>
                <div className={styles.masonry}></div>
            </motion.div>
        </motion.section>
    );
}
