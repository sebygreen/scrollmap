//components
import { RefreshIcon } from "@heroicons/react/solid";
//styles
import styles from "../styles/Update.module.css";

export default function Update({ timestamp, version, description, changelog }) {
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
                    <RefreshIcon />
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
