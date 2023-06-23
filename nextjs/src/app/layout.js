// font
import local from "next/font/local";
const satoshi = local({ src: "../../public/fonts/Satoshi.ttf" });
// components
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
// styles
import "@/styles/globals.css";
import styles from "@/styles/Layout.module.css";

export const metadata = {
    title: {
        default: "scrollmap.co.uk",
        template: "%s • scrollmap.co.uk",
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={satoshi.className}
        >
            <body>
                <div className={styles.viewport}>
                    <Header />
                    <main className={styles.content}>{children}</main>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
