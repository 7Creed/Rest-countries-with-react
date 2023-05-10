import "@/styles/globals.css";
import Layout from "../../components/Layout";
import { RestProvider } from "../../context/context";

export default function App({ Component, pageProps }) {
  return (
    <RestProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RestProvider>
  );
}
