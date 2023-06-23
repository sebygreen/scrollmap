//dependencies
import Link from "next/link";
//styles
import styles from "@/styles/Button.module.css";

export default function Button({ type, href, text, icon, blur, onClick }) {
    if (type === "link") {
        return (
            <Link href={href}>
                <div
                    className={styles.button + (blur ? " " + styles.blur : "")}
                >
                    <p>{text}</p>
                    {icon}
                </div>
            </Link>
        );
    } else if (type === "button") {
        return (
            <button
                className={styles.button + (blur ? " " + styles.blur : "")}
                onClick={onClick}
            >
                <p>{text}</p>
                {icon}
            </button>
        );
    } else if (type === "anchor") {
        return (
            <a
                className={styles.button + (blur ? " " + styles.blur : "")}
                href={href}
                target="_blank"
                rel="noreferrer"
            >
                <p>{text}</p>
                {icon}
            </a>
        );
    } else {
        return (
            <button className={styles.button + (blur ? " " + styles.blur : "")}>
                {text}
            </button>
        );
    }
}
