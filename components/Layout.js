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

    function pathToName(path) {}

    return (
        <>
            <div className={styles.header}>
                <Gradient />
                <Navigation />
                <div class={styles.tilt}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 1440 120" preserveAspectRatio="none">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 109.18L60 103.644C120 98.3594 240 87.2875 360 83.7646C480 80.2417 600 62.5634 720 57.0274C840 51.7431 960.173 10.6365 1080 3.58498C1200 -3.47677 1320 0.983174 1380 7.5792L1440 12.8635V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V109.18Z"
                            fill-opacity="0.5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 109.793L60 104.57C120 99.5855 240 89.1409 360 85.8176C480 82.4943 600 75.8176 720 70.5952C840 65.6103 960.173 46.8328 1080 40.1807C1200 33.5191 1320 37.7263 1380 43.9487L1440 48.9336V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V109.793Z"
                            fill-opacity="0.5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 109.793L60 104.57C120 99.5855 240 89.1409 360 85.8176C480 82.4943 600 85.8176 720 80.5952C840 75.6103 960 61.8424 1080 60.1807C1200 58.5191 1320 68.7263 1380 73.9487L1440 78.9336V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V109.793Z"
                        />
                    </svg>
                </div>
            </div>
            <div className={styles.content}>{children}</div>
            <Footer />
        </>
    );
}
