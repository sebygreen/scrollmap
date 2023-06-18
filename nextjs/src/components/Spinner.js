//styles
import styles from "../styles/Spinner.module.css";

export default function Spinner() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <svg className={styles.circular}>
                    <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5" strokeMiterlimit="10"></circle>
                </svg>
            </div>
        </div>
    );
}
