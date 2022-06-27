//dependencies
import { motion } from "framer-motion";
//components
import Navigation from "./Navigation";
import Footer from "./Footer";
// styles
import styles from "../styles/Layout.module.css";
import Image from "next/image";

export default function Layout({ head, top, bottom }) {
    return (
        <>
            {head}
            <div className={styles.container}>
                <div className={styles.background}>
                    <Image
                        alt={"Background image texture"}
                        src={"/images/pexels-cátia-matos-1072179.jpg"}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="bottom"
                        width={6000}
                        height={4000}
                        quality={100}
                        priority
                    />
                </div>
                <div className={styles.top}>
                    <div className={styles.content}>
                        <Navigation />
                        {top}
                    </div>
                </div>
                <motion.div layout className={styles.bottom}>
                    <motion.div
                        transition={{
                            duration: 0.3,
                        }}
                        layout="position"
                        className={styles.content}
                    >
                        {bottom}
                        <Footer />
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
