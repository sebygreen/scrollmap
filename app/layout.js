// font
import local from "@next/font/local";
// components
import Footer from "../components/Footer";
import Header from "../components/Header";
// styles
import styles from "../styles/Layout.module.css";
import "../styles/globals.css";
const satochi = local({ src: "../public/fonts/Satoshi.ttf" });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={satochi.className}>
            <head>
                <link rel="icon" href="/public/favicon.ico" />
            </head>
            <body>
                <div className={styles.viewport}>
                    <div id="modalRoot"></div>
                    <Header />
                    <div className={styles.content}>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    );
}
