// lib
import Image from "next/image";
// css
import styles from "@/styles/Header.module.css";
// components
import Navigation from "./Navigation";
import Button from "./Button";
import Contact from "./Contact";
import Pathname from "./Pathname";
import Updates from "./Updates";
import Credits from "./Credits";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Image
                    className={styles.image}
                    alt="Photo of Stephen in the sun with a guitar"
                    src="/assets/stephen.jpg"
                    width={40}
                    height={40}
                    quality={70}
                />
                <Navigation />
                <div className={styles.modals}>
                    <Contact />
                    <Updates>
                        <Credits />
                    </Updates>
                </div>
            </div>
            <div className={styles.tilt}>
                <Pathname className={styles.title} />
                <svg
                    viewBox="0 0 1440 120"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    fill="currentColor"
                >
                    <path d="M0 120L1440 0V120H0Z" />
                </svg>
            </div>
        </header>
    );
}
