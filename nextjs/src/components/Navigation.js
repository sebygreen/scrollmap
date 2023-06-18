"use client";
//dependencies
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
//components
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
                    <Button
                        type="button"
                        text="Contact"
                        blur={true}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                                <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                            </svg>
                        }
                        onClick={() => setShowContact(true)}
                    />
                    <Button
                        type="button"
                        text="Updates"
                        blur={true}
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fillRule="evenodd"
                                    d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        }
                        onClick={() => setShowUpdate(true)}
                    />
                </div>
                <AnimatePresence>
                    {showContact && <Contact onClose={() => setShowContact(false)} />}
                    {showUpdate && <Updates onClose={() => setShowUpdate(false)} />}
                </AnimatePresence>
            </nav>
        </div>
    );
}
