import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,

  tesla,
  shopify,
  threejs,
  runInStyle,
  trinity,
  netflix,
  dressCustomizer,
  clearSki,
  chitChat,
} from "../assets";
import Stackerbee from "../assets/company/Stackerbee.png"
import Certificate from "../assets/company/Certificate.png"
 import otterfresh from "../assets/company/otterfresh.jpg"
 import BrainWave from "../assets/company/Brain.png"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [

  {
    title: "React Developer",
    icon: mobile,
  },

  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },



  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "React Developer Internship",
    company_name: "Stackerbee Technologies,Delhi",
    icon: Stackerbee,
    iconBg: "#E6DEDD",
    date: "November 2024 - Present",
    points: [],
  },
  {
    title: "React Developer Certificate",
    company_name: "Great Learning",
    icon: Certificate,
    iconBg: "#E6DEDD",
    date: "Aug-2024",
    points: [],
  },
  {
    title: "Digital Marketing Certificate",
    company_name: "Google",
    icon: Certificate,
    iconBg: "#E6DEDD",
    date: "july-2024",
    points: [],
  },
  {
    title: "Higher-Secondary Education",
    company_name: "Choudhary Devi Lal University",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2024 - 2027",
    points: [],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Manav Bv",
    designation: "Data analyst",
    company: "Ace",
    image: "https://media.licdn.com/dms/image/C5603AQEZ9QFYMX2t3w/profile-displayphoto-shrink_400_400/0/1653404994245?e=1702512000&v=beta&t=6tZCl_Hb0KKlMsWBqjBnPV1-gHbf4P8kB8nr-bgRLKo",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Sudhin Devan",
    designation: "CEO",
    company: "Desvu",
    image: "https://media.licdn.com/dms/image/D5603AQHrfEaIAkgS2Q/profile-displayphoto-shrink_800_800/0/1679645001956?e=2147483647&v=beta&t=VC2s_L58xVp3BfpnCmO-QeZVox5xrnnxeLGw4yeoc4Q",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rinshid Kp",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://media.licdn.com/dms/image/D5603AQG2vFNl7EqBew/profile-displayphoto-shrink_800_800/0/1668671458709?e=2147483647&v=beta&t=c2ZOg519eyWxeRCmGrQoAUEt5xvl0y7-Krfw-Zc0EzY",
  },
];

const projects = [
  {
    name: "Fully Responsive Webpage",
    description:
      "The Fully Responsive Webpage is a modern and adaptable web application designed to provide an optimal user experience across all devices, including desktops, tablets, and mobile phones. This project focuses on fluid layouts, flexible grids, and media queries to ensure seamless responsiveness.",
    tags: [
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "java script",
        color: "blue-text-gradient",
      },
      
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },

    ],
    image: otterfresh,
    source_code_link: "https://github.com/Abhay-aroraa/otterfresh.git",
    live_link: "https://otterfresh-c8by.vercel.app/",
    features: [
      "Fully Responsive Design",
      "Mobile-First Approach .",
      "Fluid Layouts & Flexible Grids ",
      "Optimized Images & Lazy Loading –.",
      "Cross-Browser Compatibility.",
      "SEO-Friendly Structure.",
      " Interactive UI Component",
      "Accessibility Features "
    ],
  },
  {
    name: "BrainWave",
    description:
"    Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.",
    tags: [
   
     
     
      {
        name: "ReactJs",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
      {
        name: "java script",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    
    
     
      {
        name: "Vercel",
        color: "pink-text-gradient",
      },
     
    ],
    image: BrainWave,
    source_code_link: "https://github.com/Abhay-aroraa/Ai-chatbox-.git",
    live_link: "https://ai-chatbox-theta.vercel.app/",
    features: [
    "Beautiful Sections",

      "👉 **Parallax Animations**:", 
      
      "👉 **Complex UI Geometry**",
      
      "👉 **Latest UI Trends**",
      
      "👉 **Cool Gradients**",
      
      "👉 **Responsive**",
      
      "👉** architecture and reusability**",


    ],
  },




];

export { services, technologies, experiences, testimonials, projects };
