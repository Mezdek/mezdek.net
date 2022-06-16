import React from "react";
import { Provider } from "react-redux";
import { store } from "../state/store";

import style from "../styles/Main.module.css";

import Head from "next/head";

import Layout from "../components/Layout";
import Section from "../components/Section";
import Intro from "../components/Intro_Section";
import CodingXP from "../components/CodingXP_Section";
import Resume from "../components/Resume_Section";
import End from "../components/End";

export default function Home() {
  return (
    <Provider store={store}>
      <div className={style.canvas}>
        <Head>
          <title>Mezdek</title>
          <meta charSet="character_set" />
          <meta name="Mezdek" content="Personal webpage" />
          <meta
            name="description"
            content="a personal web page portfolio as a junior full stack web developer ready to get hired."
          />
          <meta
            name="keywords"
            content="HTML,CSS,JavaScript,Next,React,Express,Node,MySQL,web developer,webentwickler,full stack,frontend,backend, "
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/micon.ico" />
        </Head>
        <Layout>
          <Intro />
          <CodingXP />
          <Resume />
          <End />
        </Layout>
      </div>
    </Provider>
  );
}
