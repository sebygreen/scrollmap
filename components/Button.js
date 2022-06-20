//dependencies
import Link from "next/link";
//styles
import styles from "../styles/Button.module.css";

export default function Button({ ids, id, type, href, text, icon, onClick }) {
    if (type === "link") {
        return (
            <Link href={href}>
                <a className={styles.button}>
                    {text}
                    {icon}
                </a>
            </Link>
        );
    } else if (type === "button") {
        return (
            <button className={styles.button} onClick={onClick}>
                <p>{text}</p>
                {icon}
            </button>
        );
    } else if (type === "anchor") {
        return (
            <a href={href} target="_blank" rel="noreferrer" className={styles.button}>
                <p>{text}</p>
                {icon}
            </a>
        );
    } else {
        return <button>{text}</button>;
    }
}
