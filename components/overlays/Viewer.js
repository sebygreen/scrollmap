//data
import data from "../../public/data.json";
//dependencies
import React from "react";
import { motion } from "framer-motion";
//components
import { XIcon } from "@heroicons/react/solid";
import Portal from "../Portal";
//styles
import styles from "../../styles/Viewer.module.css";

const blur = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "linear",
            damping: 0,
            stiffness: 0,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.2,
            type: "linear",
            damping: 0,
            stiffness: 0,
        },
    },
};

const overlay = {
    hidden: {
        y: "-10px",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.2,
            type: "linear",
            damping: 0,
            stiffness: 0,
        },
    },
    exit: {
        y: "-10px",
        opacity: 0,
        transition: {
            duration: 0.2,
            type: "linear",
            damping: 0,
            stiffness: 0,
        },
    },
};

export default function Viewer({ index, onClose }) {
    const scrollmap = data.scrollmaps[index - 1];

    function handleClose(e) {
        onClose(e);
    }

    return (
        <Portal selector="#modalRoot">
            <motion.div variants={blur} initial="hidden" animate="visible" exit="exit" className={styles.container}>
                <motion.div variants={overlay} initial="hidden" animate="visible" exit="exit" className={styles.overlay}>
                    <div className={styles.titlebar}>
                        <h2>{scrollmap.name}</h2>
                        <button className={styles.close} onClick={handleClose}>
                            <XIcon />
                        </button>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.info}>
                            <p>
                                Hold down the <span>SHIFT</span> key to scroll horizontally with a mouse.
                            </p>
                        </div>
                        <div className={styles.scroll}>
                            <img alt={scrollmap.alt} src={`/images/scrollmaps/${scrollmap.image}.jpg`} />
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Portal>
    );
}
