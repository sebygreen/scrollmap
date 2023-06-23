// components
import Image from "next/image";
import Button from "./Button";
// css
import styles from "@/styles/Home.module.css";

export default function HomeItem({ title, description, href, image }) {
    return (
        <article className={styles.item}>
            <div>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Button
                    type="link"
                    href={href}
                    text="Explore"
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                />
            </div>
            <Image
                alt="Location arrow rendered in 3D"
                src={`/assets/3dicons.co/${image}.png`}
                width={130}
                height={130}
                quality={70}
            />
        </article>
    );
}
