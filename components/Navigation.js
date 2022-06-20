//dependencies
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
//components
import { ChatAlt2Icon, RefreshIcon } from "@heroicons/react/solid";
import Button from "./Button";
import Contact from "./overlays/Contact";
import Updates from "./overlays/Updates";
//styles
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
    const [showContact, setShowContact] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);

    return (
        <nav className={styles.nav}>
            <div className={styles.image}>
                <Image alt="Photo of Stephen in the sun with a guitar" src="/assets/stephen.jpg" width={60} height={60} quality={70} />
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/scrollmap">
                        <a>Scrollmap&apos;s</a>
                    </Link>
                </li>
                <li className={styles.li}>
                    <Link href="/cards">
                        <a>Cards</a>
                    </Link>
                </li>
                <li>
                    <Link href="/illustrations">
                        <a>Illustrations</a>
                    </Link>
                </li>
                <li>
                    <Link href="/extra">
                        <a>Extra</a>
                    </Link>
                </li>
            </ul>
            <div className={styles.buttons}>
                <Button type="button" text="Contact" icon={<ChatAlt2Icon />} onClick={() => setShowContact(true)} />
                <Button type="button" text="Updates" icon={<RefreshIcon />} onClick={() => setShowUpdate(true)} />
            </div>
            <AnimatePresence>
                {showContact && <Contact onClose={() => setShowContact(false)} />}
                {showUpdate && <Updates onClose={() => setShowUpdate(false)} />}
            </AnimatePresence>
        </nav>
    );
}
