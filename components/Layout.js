//dependencies
import { useRouter } from "next/router";
import { motion } from "framer-motion";
//components
import Navigation from "./Navigation";
import Footer from "./Footer";
import Gradient from "./Gradient";
// styles
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    const router = useRouter();

    return (
        <>
            <div className={styles.header}>
                <Gradient />
                <Navigation />
                <div className={styles.titlebar}>
                    <h1 className={styles.title}>
                        {router.pathname == "/scrollmap" ? "Scrollmap's" : router.pathname == "/cards" ? "Cards" : router.pathname == "/illustrations" ? "Illustrations" : router.pathname == "/extra" ? "Miscellaneous" : "Homepage"}
                    </h1>
                    <div class={styles.tilt}>
                        <svg viewBox="0 0 480 240" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="currentColor">
                            <path d="M9.09494702e-13,240 C240,240 240,5.68434189e-14 480,5.68434189e-14 L480,240 L9.09494702e-13,240 Z" id="Path"></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className={styles.content}>{children}</div>
            <Footer />
        </>
    );
}
