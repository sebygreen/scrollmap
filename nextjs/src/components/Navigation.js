"use client";
//dependencies
import { usePathname } from "next/navigation";
//components
import Image from "next/image";
import Link from "next/link";
//styles
import styles from "@/styles/Navigation.module.css";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link
                        className={pathname == "/" ? styles.active : ""}
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname == "/scrollmaps" ? styles.active : ""
                        }
                        href="/scrollmaps"
                    >
                        Scrollmap&apos;s
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname == "/cards" ? styles.active : ""}
                        href="/cards"
                    >
                        Cards
                    </Link>
                </li>
                <li>
                    <Link
                        className={
                            pathname == "/illustrations" ? styles.active : ""
                        }
                        href="/illustrations"
                    >
                        Illustrations
                    </Link>
                </li>
                <li>
                    <Link
                        className={pathname == "/extra" ? styles.active : ""}
                        href="/extra"
                    >
                        Extra
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
