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
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
                                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
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
