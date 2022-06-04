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

export default function Updates({ show, onClose }) {
    return (
        <Portal selector="#modalRoot">
            <Overlay title="Updates" show={show} onClose={onClose}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.webmaster}>
                            <h3>Frameworks</h3>
                            <p>NextJS, React, Framer Motion</p>
                        </div>
                        <div className={styles.credits}>
                            <h3>Credits</h3>
                            <p>
                                Home screen images by <a href="https://3dicons.co/">3dicons</a>
                            </p>
                            <p>
                                Background gradient by <a href="https://stripe.com">Stripe</a>
                                <br />
                                Ported by <a href="https://kevinhufnagl.com">Kevin Hufnagl</a>
                            </p>
                            <p>
                                UI icons by <a href="https://heroicons.com/">heroicons</a>
                            </p>
                            <p>
                                Brand icons by <a href="https://fontawesome.com/">Fontawesome</a>
                            </p>
                        </div>
                        <div className={styles.code}>
                            <h3>Code</h3>
                            <p className={styles.label}>The code for this website is hosted on github.</p>
                            <Button type="anchor" href="https://github.com/sebygreen/scrollmap" text="Source" icon={<CodeIcon />} />
                        </div>
                    </div>
                    <div className={styles.updates}>
                        <h3>Changelog</h3>
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
