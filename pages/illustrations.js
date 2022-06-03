import Head from "next/head";
// styles
import styles from "../styles/Illustrations.module.css";

export default function Illustrations() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Illustrations</title>
            <meta name="description" content="Unsorted works and drawings" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Illustrations.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>Illustrations</h1>
        </section>
    );
};

Illustrations.Bottom = function Bottom() {
    return (
        <section className={styles.explorer}>
            <p>Illustrations showcase</p>
        </section>
    );
};
