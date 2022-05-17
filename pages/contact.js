import { Provider } from "react-redux";
import { store } from "../state/store";

import Head from "next/head";
import style from "../styles/Main.module.css";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={style.canvas}>
        <Head>
          <title>Contact</title>
          <meta name="Contact" content="Contact" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <ContactCard />
        </Layout>
      </div>
    </Provider>
  );
}
