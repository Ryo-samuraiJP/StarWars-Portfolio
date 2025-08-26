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
    desc: "Evaluated 870+ AI prompts/responses across various categories and constraints to ensure high-quality outputs, understanding of the LLM behavior, generative AI tools, prompt engineering, and effective AI prompting. Ensured that the LLM responded correctly to programming and mathematical prompts, effectively enhancing problem-solving skills. Justified 870+ AI responses based on a hierarchy of various dimensions and rewrote them to fix errors, enhancing critical thinking and analytical skills. Reviewed 60+ AI prompts/responses completed by other evaluators and provided feedback to improve the production quality, resulting in successful client satisfaction and demonstrating quality assurance and auditing abilities.",
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
];
