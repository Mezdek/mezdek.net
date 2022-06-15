import React, { useEffect } from "react";
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
import Footer from "../components/Footer";

const getRealDimensions = () => {
  let vh = window.innerHeight * 0.01;
  let vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};

export default function Home() {
  useEffect(() => {
    getRealDimensions();
    // window.addEventListener("resize", getRealDimensions);
  }, []);
  return (
    <Provider store={store}>
      <div className={style.canvas}>
        <Head>
          <title>Mezdek</title>
          <meta name="Mezdek" content="Personal webpage" />
          <link rel="icon" href="/micon.ico" />
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
            <Footer />
          </Section>
        </Layout>
      </div>
    </Provider>
  );
}
