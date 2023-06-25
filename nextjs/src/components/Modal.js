"use client";

import { useEffect } from "react";
import { useAnimate } from "framer-motion";

import styles from "@/styles/Modal.module.css";

export default function Modal({ open, onClose, title, children }) {
    const [scope, animate] = useAnimate();

    function openModal(modal) {
        modal.showModal();
        animate(
            modal,
            { opacity: 1, y: 0 },
            {
                duration: 200,
                opacity: {
                    type: "linear",
                },
                y: {
                    type: "spring",
                    stiffness: 100,
                },
            }
        );
    }

    async function closeModal(modal) {
        await animate(
            modal,
            { opacity: 0, y: -20 },
            {
                duration: 100,
                opacity: {
                    type: "linear",
                },
                y: {
                    type: "tween",
                },
            }
        );
        modal.close();
    }

    useEffect(() => {
        const modal = scope.current;
        if (open && !modal.open) {
            openModal(modal);
        } else {
            closeModal(modal);
        }
    });

    return (
        <dialog className={styles.modal} ref={scope}>
            <header className={styles.titlebar}>
                <h2>{title}</h2>
                <button className={styles.close} onClick={() => onClose()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </header>
            <article className={styles.content}>{children}</article>
        </dialog>
    );
}
