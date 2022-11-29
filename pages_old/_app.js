//layouts
import Layout from "../components/Layout";
//styles
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}
