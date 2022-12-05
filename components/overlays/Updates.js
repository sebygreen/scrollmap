//data
import data from "../../public/data.json";
//components
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
                    {date.toLocaleTimeString("en-UK", { hour: "2-digit", minute: "2-digit" })} <span>&bull;</span>{" "}
                    {date.toLocaleString("en-UK", options)}
                </p>
            );
        }

        return (
            <div className={styles.container}>
                <div className={styles.titlebar}>
                    <div className={styles.title}>
                        <p>Patch</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                fillRule="evenodd"
                                d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                                clipRule="evenodd"
                            />
                        </svg>
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
                            <Button
                                type="anchor"
                                href="https://github.com/sebygreen/scrollmap"
                                text="Source"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fillRule="evenodd"
                                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                }
                            />
                        </div>
                    </div>
                    <div className={styles.updates}>
                        <h3>Changelog</h3>
                        <div className={styles.overflow}>
                            {data.updates.map((update) => (
                                <Update
                                    key={update.id}
                                    timestamp={update.timestamp}
                                    version={update.version}
                                    description={update.description}
                                    changelog={update.changelog}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </Overlay>
        </Portal>
    );
}
