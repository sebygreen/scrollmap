//dependencies
import Head from "next/head";
import Image from "next/image";
//components
import { ArrowsExpandIcon, CubeTransparentIcon, HashtagIcon, LocationMarkerIcon } from "@heroicons/react/solid";
import Button from "../components/Button";
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
            <p>Scrollmap&apos;s were originally created from an idea of making tourism along river banks, coastlines, and streets a little funner by mapping said location as a long horizontal trail, with the then possibility of adding transport connections, places of interest, and much more.</p>
        </section>
    );
};

Scrollmap.Bottom = function Bottom() {
    function Ratio(width, height) {
        let raw = width / height;
        let result = Math.round((raw * 100) / 100);
        return result;
    }

    function Scroll({ name, image, height, width, alt, issue, location }) {
        return (
            <div className={styles.scroll}>
                <div className={styles.info}>
                    <div className={styles.text}>
                        <h3>{name}</h3>
                        <div className={styles.metadata}>
                            <div className={styles.data}>
                                <HashtagIcon />
                                <p>Issue {issue}</p>
                            </div>
                            <div className={styles.data}>
                                <LocationMarkerIcon />
                                <p>{location}</p>
                            </div>
                            <div className={styles.data}>
                                <CubeTransparentIcon />
                                <p>{Ratio(width, height)}:1</p>
                            </div>
                        </div>
                    </div>
                    <Button type="button" text="Expand" icon={<ArrowsExpandIcon />} onClick={() => console.log("Scroll viewer logic.")} />
                </div>
                <div className={styles.image}>
                    <Image alt={alt} src={`/images/scrollmaps/${image}.jpg`} layout="responsive" width={width} height={height} quality={70} />
                </div>
            </div>
        );
    }

    return (
        <section className={styles.content}>
            <Scroll name="Algarve's South Coast" image="algarve" width={5000} height={874} alt="Algarve's south coast scrollmap thumbnail" issue="6" location="Algarve, Portugal" />
            <Scroll name="Tate Britain to Tower Bridge" image="tatetotower" width={7576} height={624} alt="Tate to Tower scrollmap thumbnail" issue="1" location="London, England, United Kingdom" />
            <Scroll name="Tate Britain to Tate Modern" image="tatetotate" width={3006} height={417} alt="Tate to Tate scrollmap thumbnail" issue="3" location="London, England, United Kingdom" />
            <Scroll name="Tenterden High Street" image="tenterden" width={4693} height={596} alt="Tenterden High Street scrollmap thumbnail" issue="1" location="Tenterden, England, United Kingdom" />
        </section>
    );
};
