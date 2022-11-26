//dependencies
import { motion } from "framer-motion";
//components
import Navigation from "./Navigation";
import Footer from "./Footer";
// styles
import styles from "../styles/Layout.module.css";

export default function Layout({ children }) {
    return (
        <>
            <div className={styles.container}>
                <Navigation />
                <div className={styles.content}>
                    <motion.div layout className={styles.bottom}>
                        <motion.div
                            transition={{
                                duration: 0.3,
                            }}
                            layout="position"
                            className={styles.content}
                        >
                            {children}
                        </motion.div>
                    </motion.div>
                </div>
                <Footer />
            </div>
        </>
    );
}
