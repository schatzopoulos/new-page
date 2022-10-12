const math = require("remark-math");
const katex = require("rehype-katex");

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://linkedin.com/in/schatzopoulos",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/schatzopoulos",
  },
  email: {
    label: "Email",
    href: "mailto:schatz@athenarc.gr",
  },
  blog: {
    label: "Blog",
    to: "blog",
  },
  docs: {
    label: "Documentation",
    to: "docs",
  },
  about: {
    label: "About",
    to: "#about"
  },
  projects: {
    label: "Projects",
    to: "#projects",
  },
  publications: {
    label: "Publications", 
    to: "#publications"
  },
  resume: {
    label: "Resume",
    href: "https://schatzopoulos.github.io/pdf/resume.pdf",
  },
};

module.exports = {
  title: "Serafeim Chatzopoulos",
  url: "https://schatzopoulos.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/logo.png",
  organizationName: "digipie",
  projectName: "kaya-folio",
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "S.Chatz.",
      logo: {
        alt: "S.Chatz. Logo",
        src: "img/logo.png",
        href: "https://schatzopoulos.github.io",
        target: "_self",
      },
      items: [
        // { to: "blog/", label: "Blog", position: "left" },
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        { to: internetProfiles.about.to, label: internetProfiles.about.label, position: "right" },
        { to: internetProfiles.projects.to, label: internetProfiles.projects.label, position: "right" },
        { to: internetProfiles.publications.to, label: internetProfiles.publications.label, position: "right" },
        {
          href: "https://schatzopoulos.github.io/pdf/resume.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      // links: [
      //   {
      //     title: "Connect",
      //     items: [
      //       internetProfiles.linkedin,
      //       internetProfiles.github,
      //       internetProfiles.email,
      //     ],
      //   },
      //   {
      //     title: "Discover",
      //     items: [
      //       // internetProfiles.blog,
      //       // internetProfiles.docs,
      //       internetProfiles.projects,
      //       internetProfiles.publications,
      //       internetProfiles.resume,
      //     ],
      //   },
      // ],
      // I built this website for my own personal use, but you are free to use it so long as you credit me. You can do so by linking back to evantay.com :)
      copyright: `Copyright © ${new Date().getFullYear()} S.Chatz. • Design by <a href="https://evantay.com/" target="_blank">Evan Tay</a> • Updated ${new Date().toLocaleDateString()}`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          disableVersioning: false,
          editCurrentVersion: false,
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/DigiPie/kaya-folio/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
  ],
};
