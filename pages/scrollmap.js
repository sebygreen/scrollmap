//dependencies
import Head from "next/head";
//styles
import styles from "../styles/Scrollmap.module.css";

export default function Scrollmap() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Scrollmap</title>
            <meta name="description" content="this page is a showcase of Scrollmap's" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Scrollmap.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>Scrollmap</h1>
        </section>
    );
};

Scrollmap.Bottom = function Bottom() {
    return (
        <section className={styles.explorer}>
            <p>Scrollmap showcase</p>
        </section>
    );
};
