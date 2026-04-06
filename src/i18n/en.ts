const en = {
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
    cta: "Let's talk",
  },

  home: {
    eyebrow: "Insurance Digital Products",
    h1a: "We build",
    h1accent: "insurance",
    h1b: "software that creates value.",
    lead: "End-to-end digital solutions for the insurance industry — contracted provider management systems, digital pricing and quotation workflows, pharmacy provisioning, inpatient and outpatient systems, and more.",
    btnPrimary: "See our work →",
    btnSecondary: "Contact us",
    stat1val: "15+",
    stat1lbl: "Live projects",
    stat2val: "20",
    stat2lbl: "Years of experience",
    stat3val: "100%",
    stat3lbl: "Insurance-focused",
    cardLabel: "Coverage Areas",
    cardBadge: "Active",
    cardFooterTitle: "Insurance sector",
    cardFooterSub: "Active partnerships",
    domains: [
      {
        name: "Provisioning Systems",
        desc: "Provisioning and approval processes",
      },
      { name: "Digital Approval", desc: "Digital application portals" },
      { name: "e-Invoice", desc: "Integration with provisioning systems" },
      {
        name: "Contracted Providers",
        desc: "Pricing, quotation, and network management",
      },
      {
        name: "Workplace Physician System",
        desc: "Digital solutions for workplace physicians",
      },
      { name: "OVM", desc: "SBM common data model submission service" },
    ],
  },

  services: {
    tag: "Value Proposition",
    titleA: "Deep expertise.",
    titleAccent: "End-to-end, robust and modular process management.",
    titleB: "Proven delivery success.",
    subtitle: "",
    items: [
      {
        num: "01",
        title: "Process Analysis & Optimization",
        desc: "By analyzing and optimizing existing processes, we make health insurance workflows faster, more accurate, and sustainable. With deep insurance expertise, we identify bottlenecks and deliver actionable improvement strategies.",
        tags: [
          "Insurance Process Analysis",
          "Process Optimization",
          "Expert Consulting",
        ],
      },
      {
        num: "02",
        title: "Consulting & Architecture Design",
        desc: "We provide consulting and architectural design services for insurance software. By understanding domain-specific requirements, we design scalable, secure, and sustainable architectures, offering strategic guidance for successful project delivery.",
        tags: [
          "Insurance Software Consulting",
          "Architecture Design",
          "Strategic Guidance",
        ],
      },
      {
        num: "03",
        title: "Modern Technologies & Scalable Infrastructure",
        desc: "We build insurance software using modern technologies and robust technical infrastructures. By applying best practices and up-to-date development approaches, we deliver faster and higher-quality solutions.",
        tags: [
          "Modern Technologies",
          "Technical Infrastructure",
          "Software Development",
        ],
      },
      {
        num: "04",
        title: "Dedicated Communication & Client Satisfaction",
        desc: "We provide dedicated communication channels for each client, ensuring transparent and effective collaboration throughout the entire project lifecycle. We continuously gather feedback and adapt our solutions to maximize client satisfaction.",
        tags: ["Dedicated Communication", "Client Satisfaction", "Feedback"],
      },
    ],
  },

  projects: {
    tag: "Our Work",
    titleA: "20+ projects.",
    titleAccent: "one domain.",
    subtitle:
      "Over 20 years of insurance software experience — every project is built with the same care, deep domain knowledge, and production-grade quality.",
    items: [
      {
        tag: "Provisioning Systems",
        title: "Provisioning & Approval Platform",
        desc: "End-to-end provisioning and approval processes for insurance operations — configurable rule and definition screens for insurers, strong integration capabilities, and seamless system integration. Supports pharmacy, inpatient, and outpatient flows, with centralized and controlled reconciliation management.",
      },
      {
        tag: "Digital Approval",
        title: "Digital Application & Approval Flows",
        desc: "Multi-step digital application and approval processes — including group-based mid-term entries, flexible parameter-driven workflows, and scenario-based management. Ensures fast, accurate, and fully controlled processes with document handling and validation layers.",
      },
      {
        tag: "e-Invoice",
        title: "e-Invoice Integration Systems",
        desc: "Fully integrated e-invoice solutions with provisioning systems — including GIB integration, automated billing, return and cancellation management, invoice return integrations, and robust reconciliation infrastructure for efficient financial operations.",
      },
      {
        tag: "Contracted Providers",
        title: "Provider Network Management Platform",
        desc: "A comprehensive platform for managing contracted provider networks — including application processes, pricing, quotation, and price revision workflows, along with centralized workflow and pool management.",
      },
      {
        tag: "Workplace Physician System",
        title: "Workplace Health Management System",
        desc: "A digital solution that integrates workplace physicians into provisioning processes — reducing operational workload through pre-evaluation and routing mechanisms, optimizing provisioning volume, and enabling reward-based models that encourage proper system usage.",
      },
      {
        tag: "OVM",
        title: "Common Data Model (OVM) Integration",
        desc: "SBM-based common data model integration — delivering high adaptability to regulatory changes through smart, fast, and compliant processes, ensuring seamless data exchange with external systems and achieving above-industry maturity levels.",
      },
    ],
  },

  about: {
    tag: "About",
    titleA: "Experienced, solution-oriented approach.",
    titleAccent: "Expert team with deep industry knowledge.",
    titleB: "",
    p1: "Compile is a a highly skilled and well-aligned software team with over 20 years of hands-on experience in the insurance industry, delivering successful projects for large-scale organizations.",
    p2: "We build some of the most critical and complex systems in the insurance domain — creating real business value by simplifying complex processes and delivering impactful, high-quality solutions.",
    p3: "With our agile, highly skilled, and business-driven team, every project is handled directly by senior experts — working as one team with our clients. We build trusted partnerships through a collaborative, responsible, and positive approach, consistently delivering successful outcomes.",
    values: [
      {
        title: "Co-Development with Clients",
        desc: "We work not only within our own team but in close collaboration with client teams — operating as a single, aligned unit with strong communication and full transparency to maximize efficiency.",
      },
      {
        title: "End-to-End Ownership",
        desc: "All development processes are handled directly by senior experts — delivering fast, reliable, and sustainable results. From analysis to production, we take full ownership and ensure transparent, outcome-driven execution at every stage.",
      },
      {
        title: "Flexible & Modular Architecture",
        desc: "We deliver tailored, modular solutions — allowing systems to evolve step by step, integrate seamlessly with existing structures, and scale without requiring a full rebuild.",
      },
    ],
  },

  contact: {
    eyebrow: "Let's work together",
    titleA: "Get in touch",
    titleB: "",
    titleAccent: "",
    sub: "",
    email: "info@compile.com.tr",
    linkedin: "Connect on LinkedIn",
    github: "Explore our GitHub",
  },

  footer: {
    copy: "Compile. Insurance digital products.",
    services: "Services",
    projects: "Projects",
    about: "About",
  },
};

export default en;
export type Translations = typeof en;
