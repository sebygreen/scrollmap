//dependencies
import { motion } from "framer-motion";
//components
import { XIcon } from "@heroicons/react/solid";
//styles
import styles from "../styles/Overlay.module.css";

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

export default function Overlay({ onClose, title, children }) {
    function handleClose(e) {
        onClose(e);
    }

    return (
        <motion.div variants={blur} initial="hidden" animate="visible" exit="exit" className={styles.container}>
            <motion.div variants={overlay} initial="hidden" animate="visible" exit="exit" className={styles.overlay}>
                <div className={styles.titlebar}>
                    <h2>{title}</h2>
                    <button className={styles.close} onClick={handleClose}>
                        <XIcon />
                    </button>
                </div>
                {children}
            </motion.div>
        </motion.div>
    );
}
