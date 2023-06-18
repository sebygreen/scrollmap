//dependencies
import { motion } from "framer-motion";
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                {children}
            </motion.div>
        </motion.div>
    );
}
