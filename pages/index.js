import { Provider } from "react-redux";
import { store } from "../state/store";

import Head from "next/head";
import Section from "../components/Section";
import style from "../styles/Main.module.css";
import Skills from "../components/Skills";
import Intro from "../components/Intro";
import Layout from "../components/Layout";

import intro from "../data/intro.json";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={style.canvas}>
        <Head>
          <title>Main Page</title>
          <meta name="Mezde.com" content="Personal webpage" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Section>
            <Intro />
          </Section>
          <Section animation="grow">
            <p className={style.text}>{intro.secondary}</p>
          </Section>
          <Section animation={"slide_to_left"}>
            <Skills />
          </Section>
        </Layout>
      </div>
    </Provider>
  );
}
