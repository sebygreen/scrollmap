//dependencies
import Head from "next/head";
import Image from "next/image";
//components
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import Button from "../components/Button";
//styles
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <Head>
            <title>scrollmap.co.uk &bull; Home</title>
            <meta name="description" content="Homepage for this site" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

Home.Top = function Top() {
    return (
        <section className={styles.hero}>
            <h1>
                Welcome to <span>scrollmap</span>.co.uk
            </h1>
        </section>
    );
};

Home.Bottom = function Bottom() {
    function Item({ children }) {
        return <div className={styles.item}>{children}</div>;
    }

    return (
        <section className={styles.explorer}>
            <Item>
                <div>
                    <h3>Scrollmap</h3>
                    <p className={styles.description}>Scrollmap&apos;s are a unique blend of map illustration and a time tested format: scrolls.</p>
                    <Button type="link" href="/scrollmap" text="Explore" icon={<ArrowSmRightIcon />} />
                </div>
                <Image layout="fixed" alt="Location arrow rendered in 3D" src="/assets/3dicons.co/location.png" width={130} height={130} quality={70} />
            </Item>
            <Item>
                <div>
                    <h3>Cards</h3>
                    <p className={styles.description}>Many of Stephen&apos;s works were digitized in card format. This is a showcase of them.</p>
                    <Button type="link" href="/cards" text="Explore" icon={<ArrowSmRightIcon />} />
                </div>
                <Image layout="fixed" alt="Picture rendered in 3D" src="/assets/3dicons.co/picture.png" width={130} height={130} quality={70} />
            </Item>
            <Item>
                <div>
                    <h3>Illustrations</h3>
                    <p className={styles.description}>Many works here are not part of a particular series or are in too broad of a category.</p>
                    <Button type="link" href="/illustrations" text="Explore" icon={<ArrowSmRightIcon />} />
                </div>
                <Image layout="fixed" alt="Paint kit rendered in 3D" src="/assets/3dicons.co/paint-kit.png" width={130} height={130} quality={70} />
            </Item>
            <Item>
                <div>
                    <h3>Extra</h3>
                    <p className={styles.description}>Stephen&apos;s music, photos and other miscellaneous projects are stored on this page.</p>
                    <Button type="link" href="/extra" text="Explore" icon={<ArrowSmRightIcon />} />
                </div>
                <Image layout="fixed" alt="Folder rendered in 3D" src="/assets/3dicons.co/folder.png" width={130} height={130} quality={70} />
            </Item>
        </section>
    );
};
