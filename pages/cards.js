import Head from "next/head";
// styles
import styles from "../styles/Cards.module.css";

export default function Cards() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Cards</title>
            <meta name="description" content="Showcase of illustrations in card format" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Cards.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>Cards</h1>
        </section>
    );
};

Cards.Bottom = function Bottom() {
    return (
        <section className={styles.explorer}>
            <p>Cards showcase</p>
        </section>
    );
};
