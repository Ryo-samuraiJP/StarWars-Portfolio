import cajon from "../assets/images/cajon.png";
import comsquare from "../assets/images/comsquare.png";
import outlier from "../assets/images/outlier.jpeg";
import linkedin from "../assets/images/linkedin.png";
import mozilla from "../assets/images/mozilla.jpg";
import tru from "../assets/images/tru.png";

interface ICredentialsData {
  id: number;
  title: string;
  date: string;
  organization: string;
  icon?: string;
  location?: string;
  desc?: string;
  link?: string;
  skills?: string[];
}

export const credentialsData: ICredentialsData[] = [
  {
    id: 1,
    title: "Computer Science Diploma",
    date: "Apr 2024",
    organization: "Thompson Rivers University",
    icon: tru,
    location: "Kamloops, BC, Canada",
    desc: "Built a strong foundation of computer science concepts (software engineering, DSA, networking, computer systems, etc.) Developed proficiency in programming languages (HTML, CSS, JavaScript, Python, C, C#, Java, and SQL) throughout building projects (food delivery mobile app in Java, AI-powered web app in Python, etc.)",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "Python",
      "C",
      "CSharp",
      "Java",
      "SQL",
    ],
  },
  {
    id: 2,
    title: "Git Essential Training",
    date: "Aug 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/learning/certificates/803e8821b44ffba87b7197906c766ae160efefe609423acb445fe05b36be4aaf?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Git"],
  },
  {
    id: 3,
    title: "Tailwind CSS 3 Essential Training",
    date: "Aug 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/22a39b3119134b734ac3abc509699e61b32d2bb54666fad1836db3a56df0b262?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Tailwindcss"],
  },
  {
    id: 4,
    title: "JavaScript Foundations Professional Certificate",
    date: "Aug 2024",
    organization: "Mozilla",
    icon: mozilla,
    link: "https://www.linkedin.com/learning/certificates/28cfba9d5c3d70debf8f2c7c46efb3fa102de5adc2b55bd9b5b44d459f757fba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Javascript"],
  },
  {
    id: 5,
    title: "React.js Essential Training",
    date: "Aug 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/b1b7f91bab341a0c7797ffab99bbb870c0b27788948c2a0f167961bf588a7b2c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["React"],
  },
  {
    id: 6,
    title: "React.js: Building an Interface",
    date: "Aug 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/380df32629ddb34d15bfb310997859381b9bdeef1c28234d3e5e3b22cb6047c0?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["React"],
  },
  {
    id: 7,
    title: "React Hooks",
    date: "Aug 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/184f14a6761bf0e83b7fd6c5e6ede55514376232b9ed3d0bca35ce5d9fed3a4a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["React"],
  },
  {
    id: 8,
    title: "Node.js Essential Training",
    date: "Sep 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/857030b833069af903e03aac239b9479c0405f4081479ae4da690a98a7b1c0a3?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Nodedotjs"],
  },
  {
    id: 9,
    title: "Learning npm: A Package Manager",
    date: "Sep 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/ecc80862e5ea05d65658412eaedc5ac002d3d92599491bcdd842684dbbcf7ee8?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Npm"],
  },
  {
    id: 10,
    title: "Express Essentials: Build Powerful Web Apps wtih Node.js",
    date: "Sep 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/bbf1d64296c83139045d071400b7c091d733ee8967ed45344c96e0a1ff9ad254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Express", "Nodedotjs"],
  },
  {
    id: 11,
    title: "Introduction to MongoDB",
    date: "Sep 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/f6c2202dd61892832930034ca659d0e96e251fbe40f042528f2f6190c02ef136?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["Mongodb"],
  },
  {
    id: 12,
    title: "Building Modern Projects with React",
    date: "Sep 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/5f3542772b67a72797c0eed1484ed5c11a9a6540b8c807c2c0929f493c85e636?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["React"],
  },
  {
    id: 13,
    title: "React: Creating and Hosting a Full-Stack Site",
    date: "Oct 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/61818883ca12e44eb248889d20fee5eceece0dec40d3b44b44aa6cf20d0a9d9e?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BgjjkZba3QcKTtpW5I9uEpg%3D%3D",
    skills: ["React", "Mongodb", "Nodedotjs", "Express", "Axios"],
  },
  {
    id: 14,
    title: "Building a Website with Node.js and Express.js",
    date: "Oct 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/c1461cfbbf01c1e176a37c563e533bc1c5a79246275708c601dfbbd7e32b1bad",
    skills: ["Nodedotjs", "Express", "Postman"],
  },
  {
    id: 15,
    title: "Building RESTful APIs with Node.js and Express",
    date: "Oct 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/cec30228eda55c8557ba32c6d10c3756af77ac25042db3e0633b2ace79458d70",
    skills: ["Nodedotjs", "Express", "Postman"],
  },
  {
    id: 16,
    title: "TypeScript Essential Training",
    date: "Nov 2024",
    organization: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/learning/certificates/2fdb268d068088d639d54ee83a9bfc0d497cb9ee072a1ddee261cf29d8f6ef3f",
    skills: ["Typescript"],
  },
  {
    id: 17,
    title: "AI Trainer (LLM Evaluator)",
    date: "Jun 2024 - Present",
    organization: "Outlier",
    icon: outlier,
    location: "San Francisco, CA (Remote)",
    desc: "Worked on prompt engineering, factual verification, evaluation, and localization to ensure the quality of large language models (LLMs) prior to customer release.\n・Designed and refined about 450 prompts in English and Japanese across diverse categories and constraints, deepening understanding of LLM behavior and mastering prompt engineering techniques using Markdown to optimize AI model performance and user intent alignment.\n・Researched and analyzed the factual accuracy of roughly 900 AI-generated texts without relying on AI tools, applying expertise in mathematics and programming (HTML, CSS, JavaScript, Python) while also developing strong cross-domain research and source reliability assessment skills.\n・Evaluated approximately 900 AI-generated responses against predefined constraints and hierarchical quality dimensions, selecting the most appropriate output, correcting grammatical/typographical errors, and enhancing localization for improved clarity and cultural alignment.\n・Conducted final reviews of more than 60 tasks completed by team members, providing corrections and feedback that contributed to high customer satisfaction, while strengthening skills in critical thinking, quality assurance, and quality auditing.",
    skills: [
      "Generative AI Tools",
      "Prompt Engineering",
      "AI Prompting",
      "Critical Thinking",
      "Problem-Solving",
      "Analytical Skills",
      "Quality Assurance",
      "Quality Auditing",
    ],
  },
  {
    id: 18,
    title: "Software Engineer Intern",
    date: "Jun 2025 - Jul 2025",
    organization: "Cajon, Inc.",
    icon: cajon,
    location: "Tokyo, Japan (Remote)",
    desc: "Worked on data analysis for a SaaS-based recruitment platform, ”Salon Jobs”, for hairstylists operated by a beauty industry marketing company.\n・Collaborated in a 3-person team to analyze user behavior on the ”Salon Jobs” platform, focusing on conversion rates (CVR) from site visits to job applications.\n・Queried user data using SQL via Blazer to calculate application rates, conversions (CV), and CVR, identifying drop-off points in the user journey, and extracted insights on factors affecting user engagement.\n・Proposed data-driven strategies to improve CV and CVR, including UI/UX enhancements and feature improvements.",
    skills: ["SQL"],
  },
  {
    id: 19,
    title: "Software Engineer Intern",
    date: "Jun 2025 - Present",
    organization: "COMSQUARE Co., Ltd.",
    icon: comsquare,
    location: "Tokyo, Japan (Remote)",
    desc: "Worked on AI feasibility validation, quality assurance, and UI/UX improvements for telephony SaaS products such as CallTracker and VoiceX.\n・Advised on the feasibility of integrating an AI module into VoiceX to detect customer harassment, leveraging prior experience as an AI Trainer and in building the RAG chatbot using AWS, which enabled rapid prototyping and secured executive approval for implementation.\n・Tested CallTracker more than 50 times to ensure proper functionality and UI accuracy by entering predefined inputs into user fields, verifying expected outcomes, and confirming data reflection in browser storage using Developer Tools.\n・Expected to start enhancing UI/UX for SaaS products using Next.js, TypeScript, and CSS, focusing on improving usability and user engagement.",
    skills: ["Nextjs", "Typescript", "CSS"],
  },
];
