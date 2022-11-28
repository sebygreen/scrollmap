//data
import data from "../../public/data.json";
//components
import { CodeBracketIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import Button from "../Button";
import Portal from "../Portal";
import Overlay from "../Overlay";
//styles
import styles from "../../styles/Updates.module.css";

export default function Updates({ onClose }) {
    function Update({ timestamp, version, description, changelog }) {
        function Timestamp() {
            let date = new Date(timestamp);
            let options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

            return (
                <p className={styles.timestamp}>
                    {date.toLocaleTimeString("en-UK", { hour: "2-digit", minute: "2-digit" })} <span>&bull;</span> {date.toLocaleString("en-UK", options)}
                </p>
            );
        }

        return (
            <div className={styles.container}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>
                        <p>Patch</p>
                        <ArrowPathIcon />
                    </div>
                    <Timestamp />
                </div>
                <div className={styles.entry}>
                    <p className={styles.version}>{version}</p>
                    <p className={styles.description}>{description}</p>
                    <ul className={styles.changelog}>
                        {changelog.map((change, index) => (
                            <li key={index}>{change}</li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }

    return (
        <Portal selector="#modalRoot">
            <Overlay title="Updates" onClose={onClose}>
                <div className={styles.content}>
                    <div className={styles.text}>
                        <div className={styles.technologies}>
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
                            <Button type="anchor" href="https://github.com/sebygreen/scrollmap" text="Source" icon={<CodeBracketIcon />} />
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
