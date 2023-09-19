import React, { useEffect, useRef, useState } from "react";

import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.css";
import SocialLinks from "./components/_SocialLinks";
import Projects from "./projects/index";
import Publications from "./publications/index";
import About from "./about/index";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const mainRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true)
  const [headerHeight, setHeaderHeight] = useState(1536);
  const [bannerHeight, setBannerHeight] = useState(256);

  useEffect(() => {
    const tempHeaderHeight = Math.max(384, window.innerHeight);
    setHeaderHeight(tempHeaderHeight);
    setBannerHeight(Math.max(256, tempHeaderHeight / 2));
    setIsLoading(false);
    mainRef.current.hidden = false;
  }, []);

  return (
    <Layout description={siteConfig.tagline}>
      <header className={styles.heroBanner} style={{ minHeight: headerHeight }}>
        <div
          className={styles.heroBannerWrapper}
          style={{ minHeight: bannerHeight, display: isLoading ? "none" : "block" }}
        >
          <p style={{ 'marginBottom': 0 }}>Hi, my name is</p>
          <h2 className="colorSuccess" style={{ 'fontSize': '3em' }}>Serafeim Chatzopoulos.</h2>
          <p style={{ 'textAlign': 'justify', 'marginRight': 0}}>
            I am a <span className="colorDanger">Research Associate</span> at {' '}
            the Information Management Systems Institute (IMSI) of the <a href="https://www.imsi.athenarc.gr/en" target="_blank">ATHENA Research Center</a>
            , and a <span className="colorDanger">Software & Data Engineer</span> at {' '}
            <a href="https://www.openaire.eu/" target="_blank">OpenAIRE AMKE</a>
            .
          </p>

          <p style={{ 'textAlign': 'justify' }}>
            I received my <span className="colorDanger">PhD in Computer Science</span> from the <a href="https://dit.uop.gr/" target="_blank">University of the Peloponnese</a> in 2022, 
            under the supervision of <a href="http://users.uop.gr/~trifon/index.html" target="_blank">Prof. Christos Tryfonopoulos</a> (thesis: "Data mining for scholarly information networks"). 
          </p>

          <FontAwesomeIcon alt="Code" icon={faTags} />{" "}data mining &middot; graph databases &middot; scientometrics &middot; scientific databases

          <SocialLinks />

          {/*<section className={styles.directory}>
              <h3>Continue exploring?</h3>
              <nav className="pagination-nav">
                <div className="pagination-nav__item pagination-nav__item--next">
                  <Link className="pagination-nav__link" to={"#about"}>
                    <div className="pagination-nav__label">About</div>
                  </Link>
                </div>

                <div className="pagination-nav__item pagination-nav__item--next">
                  <Link className="pagination-nav__link" to={"#projects"}>
                    <div className="pagination-nav__label">Projects</div>
                  </Link>
                </div>

                <div className="pagination-nav__item pagination-nav__item--next">
                  <Link className="pagination-nav__link" to={"#publications"}>
                    <div className="pagination-nav__label">Publications</div>
                  </Link>
                </div>
              </nav>
          </section>*/}
        </div>
      </header>
      <main id="main" ref={mainRef} hidden={true}>
       {/* <div className={styles.aboutHeader}>
          <h2 className="underlineColorSuccess">Hello world</h2>
        </div>
        <div className={styles.about}>
          <div>
            <img
              className={styles.aboutProfilePic}
              src={useBaseUrl("img/profilepic.jpg")}
            />
          </div>
          <div className={styles.aboutText}>
            <h2>Hello, </h2>
            <p>
              I am a Full Stack Software Engineer and Certified Cloud Engineer
              based in Singapore.
            </p>
            <p>
              I love building cool, fun and meaningful things with tech, whether
              that be{" "}
              <Link to={useBaseUrl("projects/")}>
                websites, applications or games
              </Link>
              .
            </p>
            <p>
              I graduated from the{" "}
              <a href="https://www.comp.nus.edu.sg/">
                National University of Singapore
              </a>{" "}
              with a{" "}
              <a href="https://www.comp.nus.edu.sg/programmes/ug/cs/">
                Bachelor of Computing in Computer Science
              </a>{" "}
              in Winter 2020.
            </p>
            <p>
              I am currently working at <a href="https://padlet.com">Padlet</a>{" "}
              as a Full Stack and Support Engineer.
            </p>
            <p>
              You can read more <Link to={useBaseUrl("/about")}>about me</Link>{" "}
              or check out <Link to={useBaseUrl("/projects")}>my projects</Link>{" "}
              if you are interested.
            </p>
          </div>
        </div>*/}
        <About />

        <Projects />

        <Publications />

      </main>
        
    </Layout>
  );
}

export default Home;
