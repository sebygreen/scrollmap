import Image from "next/legacy/image";
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
            <p>
                Many works that Stephen produced where presented in a card format. This page is a collection of them. Many of these buildings are from England, Portugal and newer additions from Switzerland and the surrounding French area.
            </p>
        </section>
    );
};

Cards.Bottom = function Bottom() {
    return (
        <section className={styles.explorer}>
            <div className={styles.places}>
                <div className={styles.place}>
                    <div className={styles.header}>
                        <div>
                            <Image alt={"Flag of England"} src={"/assets/flags/uk.png"} width={24} height={24} quality={100} layout="fixed" />
                            <h2>England</h2>
                        </div>
                        <p className={styles.counter}>
                            0 <span>Items</span>
                        </p>
                    </div>
                    <div className={styles.masonry}></div>
                </div>
                <div className={styles.place}>
                    <div className={styles.header}>
                        <div>
                            <Image alt={"Flag of Portugal"} src={"/assets/flags/pt.png"} width={24} height={24} quality={100} layout="fixed" />
                            <h2>Portugal</h2>
                        </div>
                        <p className={styles.counter}>
                            0 <span>Items</span>
                        </p>
                    </div>
                    <div className={styles.masonry}></div>
                </div>
                <div className={styles.place}>
                    <div className={styles.header}>
                        <div>
                            <Image alt={"Flag of Switzerland"} src={"/assets/flags/ch.png"} width={24} height={24} quality={100} layout="fixed" />
                            <h2>Switzerland</h2>
                        </div>
                        <p className={styles.counter}>
                            0 <span>Items</span>
                        </p>
                    </div>
                    <div className={styles.masonry}></div>
                </div>
                <div className={styles.place}>
                    <div className={styles.header}>
                        <div>
                            <Image alt={"Flag of France"} src={"/assets/flags/fr.png"} width={24} height={24} quality={100} layout="fixed" />
                            <h2>France</h2>
                        </div>
                        <p className={styles.counter}>
                            0 <span>Items</span>
                        </p>
                    </div>
                    <div className={styles.masonry}></div>
                </div>
            </div>
        </section>
    );
};
