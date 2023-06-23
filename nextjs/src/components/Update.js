import styles from "@/styles/Updates.module.css";

import parse from "html-react-parser";

export default function Update({ timestamp, version, description, changelog }) {
    function Timestamp() {
        let date = new Date(timestamp);
        let options = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        };

        return (
            <p className={styles.timestamp}>
                {date.toLocaleTimeString("en-UK", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}{" "}
                <span>&bull;</span> {date.toLocaleString("en-UK", options)}
            </p>
        );
    }

    return (
        <div className={styles.container}>
            <div className={styles.titlebar}>
                <div className={styles.title}>
                    <p>Patch</p>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
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
                <div className={styles.changelog}>{parse(changelog)}</div>
            </div>
        </div>
    );
}
