"use client";
// font
import { Inter } from "@next/font/google";
// dependencies
import { usePathname } from "next/navigation";
// components
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Gradient from "../components/Gradient";
// styles
import styles from "../styles/Layout.module.css";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    const pathname = usePathname();
    return (
        <html lang="en" className={inter.className}>
            <head>
                <link rel="icon" href="../public/favicon.ico" />
            </head>
            <body>
                <div id="modalRoot">{/*modals will appear here*/}</div>
                <div className={styles.header}>
                    <Gradient />
                    <Navigation />
                    <div className={styles.titlebar}>
                        <h1 className={styles.title}>{pathname == "/scrollmap" ? "Scrollmap's" : pathname == "/cards" ? "Cards" : pathname == "/illustrations" ? "Illustrations" : pathname == "/extra" ? "Miscellaneous" : "Homepage"}</h1>
                        <div className={styles.tilt}>
                            <svg viewBox="0 0 1440 120" version="1.1" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" fill="currentColor">
                                <path d="M0 120L1440 0V120H0Z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={styles.content}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
