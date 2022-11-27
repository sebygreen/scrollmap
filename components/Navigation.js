//dependencies
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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
    const router = useRouter();

    return (
        <div className={styles.container}>
            <nav className={styles.nav}>
                <Image
                    className={styles.image}
                    alt="Photo of Stephen in the sun with a guitar"
                    src="/assets/stephen.jpg"
                    width={40}
                    height={40}
                    quality={70}
                    style={{
                        maxWidth: "100%",
                        height: "auto",
                    }}
                />
                <ul>
                    <li className={router.pathname == "/" ? styles.active : ""}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={router.pathname == "/scrollmap" ? styles.active : ""}>
                        <Link href="/scrollmap">Scrollmap&apos;s</Link>
                    </li>
                    <li className={router.pathname == "/cards" ? styles.active : ""}>
                        <Link href="/cards">Cards</Link>
                    </li>
                    <li className={router.pathname == "/illustrations" ? styles.active : ""}>
                        <Link href="/illustrations">Illustrations</Link>
                    </li>
                    <li className={router.pathname == "/extra" ? styles.active : ""}>
                        <Link href="/extra">Extra</Link>
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
        </div>
    );
}
