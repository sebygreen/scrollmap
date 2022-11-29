//styles
import styles from "../styles/Spinner.module.css";

export default function Spinner() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <svg className={styles.circular}>
                    <circle className={styles.path} cx="25" cy="25" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
                </svg>
            </div>
        </div>
    );
}
