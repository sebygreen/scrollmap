//components
import Canvas from "./Gradient";
import Navigation from "./Navigation";
import Footer from "./Footer";
// styles
import styles from "../styles/Layout.module.css";

export default function Layout({ head, top, bottom }) {
    return (
        <>
            {head}
            <div className={styles.container}>
                <Canvas />
                <div className={styles.top}>
                    <div className={styles.content}>
                        <Navigation />
                        {top}
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.content}>
                        {bottom}
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}
