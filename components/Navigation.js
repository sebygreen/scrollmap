"use client";
//dependencies
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
//components
import { ChatBubbleLeftRightIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import Button from "./Button";
import Contact from "./overlays/Contact";
import Updates from "./overlays/Updates";
//styles
import styles from "../styles/Navigation.module.css";

export default function Navigation() {
    const [showContact, setShowContact] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const pathname = usePathname();

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
                    <li>
                        <Link className={pathname == "/" ? styles.active : ""} href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={pathname == "/scrollmaps" ? styles.active : ""} href="/scrollmaps">
                            Scrollmap&apos;s
                        </Link>
                    </li>
                    <li>
                        <Link className={pathname == "/cards" ? styles.active : ""} href="/cards">
                            Cards
                        </Link>
                    </li>
                    <li>
                        <Link className={pathname == "/illustrations" ? styles.active : ""} href="/illustrations">
                            Illustrations
                        </Link>
                    </li>
                    <li>
                        <Link className={pathname == "/extra" ? styles.active : ""} href="/extra">
                            Extra
                        </Link>
                    </li>
                </ul>
                <div className={styles.buttons}>
                    <Button type="button" text="Contact" icon={<ChatBubbleLeftRightIcon />} onClick={() => setShowContact(true)} />
                    <Button type="button" text="Updates" icon={<ArrowPathIcon />} onClick={() => setShowUpdate(true)} />
                </div>
                <AnimatePresence>
                    {showContact && <Contact onClose={() => setShowContact(false)} />}
                    {showUpdate && <Updates onClose={() => setShowUpdate(false)} />}
                </AnimatePresence>
            </nav>
        </div>
    );
}
