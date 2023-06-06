import React from "react";

const projects = [
  {
    category: "Project",
    title: "OpenAIRE Graph",
    slug: "#openaire-grahph",
    imageUrl: 'img/projects/openaire-research-graph.png',
    subtitle:
      "An open resource that aggregates and indexes a collection of research products and related entities.",
    period: "Jan 2022 - present",
    tech: "Apache Solr; Apache Spark; Java; XSLT; XQuery",
    description: (
      <>
        <p>
          An example of how you can perform Infrastructure-As-Code (IaC) using
          AWS CloudFormation and Continuous-Integration/Continuous-Deployment
          (CI/CD) using AWS CodePipeline.
        </p>
        <p>
          This example deploys the NodeJS-ExpressJS-MySQL
          Create-Read-Update-Delete (CRUD) application at{" "}
          <a href="https://github.com/DigiPie/nodejs-mysql-aws-beanstalk">
            DigiPie/nodejs-mysql-aws-beanstalk
          </a>
          , by using the CloudFormation IaC templates in this repository and
          setting up a simple AWS CodePipeline.
        </p>
        <p>
          I worked on this project to learn more about the{" "}
          <a href="https://www.hashicorp.com/resources/getting-started-with-infrastructure-as-code-iac">
            Infrastructure-as-Code
          </a>{" "}
          concept and{" "}
          <a href="https://aws.amazon.com/cloudformation/">
            AWS CloudFormation
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://graph.openaire.eu/",
      },
    ],
  },
  {
    category: "Open Source Tool",
    title: "BIP! Finder",
    slug: "#bip-finder",
    imageUrl: "img/projects/bip.png",
    subtitle: "An academic search engine that facilitates literature search by exploiting impact-based ranking.",
    period: "Jul 2018 - present",
    tech: "PHP; MySQL; Apache Solr",
    description: (
      <>
        <p>
          mongo-action is a Github Action which creates a mongo Docker container
          using the official{" "}
          <a href="https://hub.docker.com/_/mongo">Dockerhub image</a>. The
          MongoDB instance's port will be exposed to other containers and also
          to the host running the Github Workflow.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg"
            title="mongo-action CI"
          >
            <img src="https://github.com/DigiPie/mongo-action/workflows/mongo-action%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I created this Github Action to learn more about Continuous
          Integration tooling, and to simplify automated testing for my own{" "}
          <a href="https://github.com/DigiPie/mocha-chai-mongoose">
            Node-ExpressJS-Mongoose
          </a>{" "}
          project.
        </p>
        <p>
          By using this Github Action, there is no longer a need to provision a
          test database on MongoDB Atlas or elsewhere. Furthermore, each test
          will run on a fresh, isolated copy of a MongoDB instance.
        </p>
        <p>
          I submitted this to the{" "}
          <a href="https://githubhackathon.com/">
            Github Hackathon for Github Actions
          </a>
          .
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://bip.imsi.athenarc.gr/",
      }
    ],
  },
  { 
    category: "Website",
    title: "SmartDataLake",
    slug: "#smartdatalake",
    imageUrl: "img/projects/smart-data-lake.png",
    subtitle:
      "Designing, and developing novel approaches, techniques and tools for extreme-scale Data Lakes.",
    period: "Aug 2019 - Dec 2021",
    tech: "Apache Spark; Python; Java; React.js",
    team: [
      {
        name: "Andre Wong",
        link: "https://github.com/AndreWongZH/",
      },
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Melodies Sim",
        link: "https://github.com/Happytreat/",
      },
    ],
    description: (
      <>
        <p>
          Developer Student Club, National University of Singapore is made up of
          people from diverse backgrounds, majors, years of study, genders and
          races. We come together to push our mission of #techforgood.
        </p>
        <p>
          The Technology team is responsible for the execution of DSC-NUS
          workshops and thematic tech events. I co-lead the team as the Deputy
          Head of Technology.
        </p>
        <p>
          We created this website to act as a one-stop portal for NUS students
          to find out more about our workshops, register for them, and access
          past workshop materials.
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://smartdatalake.eu/",
      },
    ],
  },
  {
    category: "Project",
    title: "SciNeM",
    slug: "#scinem",
    imageUrl: "img/projects/scinem.png",
    subtitle: "A scalable data science tool for heterogeneous network mining.",
    period: "Aug 2019 - Dec 2021",
    tech: "Apache Spark; Java; React.js",
    description: (
      <>
        <p>
          An up-to-date 2020 example of how you can use Mocha and Chai to
          perform API testing for a Node-ExpressJS-Mongoose app. You will be
          able to test your code locally and also automatically using Github
          Action.
        </p>
        <p>
          <a
            href="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg"
            title="Node.js CI"
          >
            <img src="https://github.com/DigiPie/mocha-chai-mongoose/workflows/Node.js%20CI/badge.svg" />
          </a>
        </p>
        <p>
          I worked on this project to learn more about API testing using{" "}
          <a href="https://mochajs.org/">Mocha</a> and{" "}
          <a href="https://www.chaijs.com/">Chai</a>, and also to practice
          setting up a NodeJS-ExpressJS-Mongoose backend application.
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "http://scinem.imsi.athenarc.gr/",
      },
    ],
  },
  {
    category: "Project",
    title: "The VeTo toolkit",
    slug: "#veto",
    imageUrl: "img/projects/veto.png",
    subtitle: "An open source recommendation tool for expanding sets of experts.",
    period: "Aug 2019 - Dec 2021",
    tech: "Python; Java; React.js",
    team: [
      {
        name: "Bryan Koh",
        link: "https://github.com/awarenessxz/",
      },
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Jacqueline Cheong",
        link: "https://github.com/Aquarinte/",
      },
      {
        name: "Lee Tze Ting",
        link: "https://github.com/halcyoneee/",
      },
    ],
    description: (
      <>
        <p>
          A course management platform where student-teacher interactions can
          take place seamlessly online.
        </p>
        <p>
          We worked on DigiCourse under National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS2102/database-systems">
            CS2102: Database Systems
          </a>
          . It is a database-centric project which features two major
          components, a course enrolment system, and a forum system.
        </p>
        <p>
          DigiCourse is continuously deployed from Github to Herokuapp, with the
          aid of Heroku build-packs such as the{" "}
          <a href="https://github.com/DigiPie/psql-heroku-buildpack">
            psql-heroku-buildpack
          </a>
          . I wrote this build pack to automate the execution of a PostgreSQL
          setup script file on deployment to Heroku.
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "http://veto.imsi.athenarc.gr/",
      },
    ],
  },
  {
    category: "Project",
    title: "SlideWiki",
    slug: "#dynalite",
    imageUrl: "img/projects/slidewiki.png",
    subtitle: "An open, Web-based OpenCourseWare authoring system.",
    period: "Oct 2016 - Jun 2018",
    tech:
      "NodeJS; React.js; Apache Solr",
    team: [
      {
        name: "Evan Tay",
        link: "https://github.com/DigiPie/",
      },
      {
        name: "Joyce Yeo",
        link: "https://github.com/pikulet/",
      },
      {
        name: "Matthew Lee",
        link: "https://github.com/crazoter/",
      },
      {
        name: "Melodies Sim",
        link: "https://github.com/Happytreat/",
      },
    ],
    description: (
      <>
        <p>
          Dynalite is an Internet-of-Things application which performs dynamic
          visualisation of room occupancy.
        </p>
        <p>
          We worked on Dynalite under National University of Singapore's{" "}
          <a href="https://nusmods.com/modules/CS3103/computer-networks-practice">
            CS3103: Computer Networks Practice
          </a>
          . It is an Internet-of-Things application which performs dynamic
          visualisation of room occupancy.
        </p>
        <p>
          Dynalite was built using 3 Docker containers and 1 Raspberry Pi. The
          RPi reads light data and sends it via COAP to the first Docker
          container containing a backend NodeJS-ExpressJS web server.
        </p>
        <p>
          The backend server authenticates and stores the measurements into a
          PostgreSQL database stored in the second Docker container.
        </p>
        <p>
          The backend server also provides a HTTP REST API which is used by a
          frontend React web server in the third Docker container.
        </p>
      </>
    ),
    links: [
      {
        name: "Website",
        link: "https://slidewiki.github.io/",
      }
    ],
  },
];

export default projects;
