import React from "react";
import clsx from "clsx";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./styles.module.css";

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <div id="about" title="About" description={siteConfig.tagline}>
      <header className={styles.aboutHeader}>
        <h2 className="underlineColorSuccess">About me</h2>
      </header>
      <main id="main">
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div className={styles.aboutText}>

            <p>
              I am Serafeim, a research associate in the <a href="https://www.imsi.athenarc.gr/" target="_blank">Information Management Systems Institute (IMSI)</a> of the ATHENA Research Center since 2014 and a software engineer at <a href="https://openaire.eu/" target="_blank">OpenAIRE AMKE</a> since April 2022. 
            </p>

            <p>
            I received my degree from the <a href="https://www.di.uoa.gr/en" target="_blank">Department of Informatics and Telecommunications</a>, University of Athens, Greece, in 2012, my master's degree in Computer Systems from the same department in 2015, 

            and my PhD in Computer Science from the <a href="https://dit.uop.gr/index.php" target="_blank">University of the Peloponnese</a>, Greece, in 2022. 
            </p>

            <p>
            My PhD dissertation, entitled "Data mining for scholarly information networks" was supervised by <a href="http://users.uop.gr/~trifon/index.html" target="_blank">Prof. Christos Tryfonopoulos</a>.
            During that period (2017-2022), I was also a member of the <a href="http://soda.dit.uop.gr/" target="_blank">Software and Database Systems laboratory (SoDa.Lab)</a>. 
            </p>

            <p>
            I have extensive experience in EU and national research projects, while my research interests lie in the areas of data mining, scientific databases, scientometrics and big data management.
            </p>        
          </div>
        </div>

      </main>
    </div>
  );
}

export default About;
