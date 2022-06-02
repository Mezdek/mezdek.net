import { Provider } from "react-redux";
import { store } from "../state/store";

import style from "../styles/Main.module.css";

import Head from "next/head";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Intro from "../components/Intro";
import CodingXP from "../components/CodingXP";
import Background from "../components/Background";
import ContactCard from "../components/ContactCard";

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
          <Section>
            <CodingXP />
          </Section>
          <Section>
            <Background />
          </Section>
          <Section animation={"slide_to_left"}>
            <ContactCard />
          </Section>
        </Layout>
      </div>
    </Provider>
  );
}
