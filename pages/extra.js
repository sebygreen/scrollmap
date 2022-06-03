import Head from "next/head";
// styles
import styles from "../styles/Extra.module.css";

export default function Extra() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Extra</title>
            <meta name="description" content="Music, photography and other works" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Extra.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>Extra</h1>
        </section>
    );
};

Extra.Bottom = function Bottom() {
    return (
        <section className={styles.explorer}>
            <p>Extra showcase</p>
        </section>
    );
};
