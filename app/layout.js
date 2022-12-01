// font
import { Inter } from "@next/font/google";
// dependencies
// components
import Footer from "../components/Footer";
import Header from "../components/Header";
// styles
import styles from "../styles/Layout.module.css";
import "../styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={inter.className}>
            <head>
                <link rel="icon" href="../public/favicon.ico" />
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
