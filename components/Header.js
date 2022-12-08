"use client";
// dependencies
import { usePathname } from "next/navigation";
// components
import Navigation from "../components/Navigation";
import Gradient from "../components/Gradient";
// styles
import styles from "../styles/Header.module.css";
export default function Header() {
    const pathname = usePathname();
    return (
        <div className={styles.header}>
            <Gradient />
            <Navigation />
            <div className={styles.titlebar}>
                <h1 className={styles.title}>
                    {pathname == "/scrollmaps"
                        ? "Scrollmap's"
                        : pathname == "/cards"
                        ? "Cards"
                        : pathname == "/illustrations"
                        ? "Illustrations"
                        : pathname == "/extra"
                        ? "Miscellaneous"
                        : "Homepage"}
                </h1>
                <div className={styles.tilt}>
                    <svg
                        viewBox="0 0 1440 120"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        fill="currentColor"
                    >
                        <path d="M0 120L1440 0V120H0Z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
