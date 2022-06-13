import { Provider } from "react-redux";
import { store } from "../state/store";

import style from "../styles/Main.module.css";

import Head from "next/head";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Intro from "../components/Intro_Section";
import CodingXP from "../components/CodingXP_Section";
import Resume from "../components/Resume_Section";
import Personal from "../components/Personal_Section";

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
            <Resume />
          </Section>
          <Section>
            <Personal />
          </Section>
        </Layout>
      </div>
    </Provider>
  );
}
