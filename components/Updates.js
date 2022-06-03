//dependencies
import Image from "next/image";
//data
import data from "../public/data.json";
//components
import { CodeIcon } from "@heroicons/react/solid";
import Button from "./Button";
import Overlay from "./Overlay";
import Portal from "./Portal";
import Update from "./Update";
//styles
import styles from "../styles/Updates.module.css";
//images
import logo from "../public/assets/3dicons.png";

export default function Updates({ show, onClose }) {
    return (
        <Portal selector="#modalRoot">
            <Overlay title="Updates" show={show} onClose={onClose}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.webmaster}>
                            <h3>Webmaster</h3>
                            <p>scrollmap.co.uk is currently being maintained by Sebastien Green</p>
                        </div>
                        <div className={styles.credits}>
                            <h3>Credits</h3>
                            <div className={styles.container}>
                                <div className={styles.credit}>
                                    <p>
                                        3D icons on the on the home screen by <a href="https://3dicons.co/">https://3dicons.co/</a>
                                    </p>
                                </div>
                                <div className={styles.credit}>
                                    <p>
                                        Background gradient by <a href="https://stripe.com">Stripe</a> and ported by <a href="https://kevinhufnagl.com">https://kevinhufnagl.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.code}>
                            <h3>Code</h3>
                            <p>The code for this website is hosted on github.</p>
                        </div>
                        <Button type="anchor" href="https://github.com/sebygreen/scrollmap" text="Source" icon={<CodeIcon />} />
                    </div>
                    <div className={styles.updates}>
                        <div className={styles.overflow}>
                            {data.updates.map((update) => (
                                <Update key={update.id} timestamp={update.timestamp} version={update.version} description={update.description} changelog={update.changelog} />
                            ))}
                        </div>
                    </div>
                </div>
            </Overlay>
        </Portal>
    );
}
