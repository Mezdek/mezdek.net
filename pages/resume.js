import { Provider } from "react-redux";
import { store } from "../state/store";

import Head from "next/head";
import style from "../styles/Main.module.css";
import Layout from "../components/Layout";
import Resume from "../components/Resume";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={style.canvas}>
        <Head>
          <title>My Resume</title>
          <meta name="resume" content="resume" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Resume />
        </Layout>
      </div>
    </Provider>
  );
}
