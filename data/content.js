// ---------------------------------------------------------------------------
// Central content file. Update this as Nahin's real info, links and
// projects become available â€” components read from here, so you generally
// shouldn't need to touch the component files for routine content updates.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Mimtajul Alam Nahin",
  firstLine: "MIMTAJUL",
  secondLine: "ALAM NAHIN",
  initials: "MN",
  title: "CSE Student | Aspiring AI/ML Engineer",
  university: "Metropolitan University",
  degree: "Computer Science & Engineering",
  year: "3rd Year",
  semester: "3rd Semester",
  focusArea: "AI / ML",
  focusStatus: "Currently Exploring",
  heroIntro:
    "Exploring artificial intelligence, machine learning and research to build a smarter, more innovative future.",
  heroSideLabels: ["PYTHON", "AI/ML", "RESEARCH"],
  portfolioYear: "Portfolio 2026",
};

// Leave a link empty ("") until it's confirmed â€” components hide or
// show a "coming soon" state automatically based on this.
export const links = {
  github: "https://github.com/Nahin4200",
  githubHandle: "@Nahin4200",
  email: "mimtajlalamnahin@gmail.com",
};

export const identityStats = [
  {
    number: "01",
    label: profile.university,
    value: "CSE Student",
  },
  {
    number: "02",
    label: `${profile.semester}`,
    value: profile.year,
  },
  {
    number: "03",
    label: profile.focusStatus,
    value: profile.focusArea,
  },
  {
    number: "04",
    label: links.githubHandle,
    value: "GitHub",
  },
];

export const about = {
  eyebrow: "About",
  statement: "Curious about how machines learn.",
  paragraphs: [
    `I'm ${profile.name}, a Computer Science & Engineering student at ${profile.university} with a growing interest in Artificial Intelligence, Machine Learning and research.`,
    "With a foundation in C, C++, Java, Python and JavaScript, I'm continuously expanding my technical knowledge and exploring how intelligent systems can solve real-world problems.",
    "I'm currently focused on strengthening my programming fundamentals while learning the math, tools and concepts behind machine learning â€” one course and one project at a time.",
  ],
  facts: [
    { label: `${profile.university}`, sub: "CSE Â· 3rd Year" },
    { label: "AI / ML", sub: "Currently Exploring" },
    { label: "Research", sub: "Interested" },
  ],
  signature: "M. A. Nahin",
};

export const skills = {
  eyebrow: "Skills & Toolkit",
  heading: "Building a strong foundation with the right tools.",
  categories: [
    {
      title: "Programming Languages",
      items: ["C", "C++", "Java", "Python", "JavaScript"],
    },
    {
      title: "Web Development",
      items: ["HTML5", "CSS3", "JavaScript", "Git & GitHub", "Basic SQL"],
    },
    {
      title: "AI / ML â€” Currently Exploring",
      items: [
        "Python for AI/ML",
        "Data Analysis",
        "Machine Learning",
        "Artificial Intelligence",
      ],
    },
  ],
};

export const journey = {
  eyebrow: "Learning Journey",
  heading: "One step at a time, getting closer to my goals.",
  stages: [
    {
      number: "01",
      title: "Programming Foundations",
      description: "C, C++ and Java â€” building core problem-solving skills.",
    },
    {
      number: "02",
      title: "Web & Software Development",
      description: "JavaScript and the fundamentals of building for the web.",
    },
    {
      number: "03",
      title: "Python",
      description: "Building a foundation for data work and AI/ML.",
    },
    {
      number: "04",
      title: "Machine Learning",
      description: "Currently exploring core concepts and practical tools.",
    },
    {
      number: "05",
      title: "Research",
      description: "Exploring possibilities at the intersection of AI and CS.",
    },
  ],
};

// Fill in workshopName / organization / date / certificateUrl once the
// certificate and its details are confirmed. certificateImage should point
// to a file placed in /public/certificates/.
export const research = {
  eyebrow: "Research & Exploration",
  heading: "Interested in research opportunities at the intersection of AI, ML and CS.",
  workshopName: "Research 360: A Complete Guide for Students and Early Researchers",
  organization: "Metropolitan University Research Society (MURS)",
  date: "",
  certificateImage: "/certificates/Certificate.png",
  certificateUrl: "/certificates/Certificate.png",
  sideNote: {
    lines: ["Better", "models,", "a brighter", "future."],
  },
};

// Add real projects here as they're completed. Each project supports:
// title, description, tech (array), github, live, image, status.
// Leave this array empty to show the "Building / Coming Soon" state.
export const projects = {
  eyebrow: "Projects",
  heading: "Currently building. Real projects will appear here soon.",
  items: [],
};

export const interests = {
  eyebrow: "Areas of Interest",
  items: ["Artificial Intelligence", "Machine Learning", "Research", "Problem Solving"],
};

export const githubSection = {
  eyebrow: "GitHub / Code",
  heading: "Public code and work in progress.",
  description:
    "Most of my learning happens in code. Repositories will be added here as projects reach a shareable state.",
};

export const contact = {
  eyebrow: "Contact",
  heading: "Let's connect",
  description:
    "Open to conversations about CSE, AI/ML and research opportunities. Reach out by email or find my work on GitHub.",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];




