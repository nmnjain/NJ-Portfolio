import Auraweave from "@/logos/auraweave";
import GI from "@/logos/GI";
import NN from "@/logos/NN";

import GithubLogo from "@/logos/GithubLogo";
import InstagramLogo from "@/logos/InstagramLogo";
import LinkedinLogo from "@/logos/LinkedinLogo";
import XLogo from "@/logos/XLogo";

export const menuItems = ["Home", "About", "Work", "Contact"];

export const laptopLinks = [
  "/resume",
  "https://auraweave.vercel.app/",
  "https://github.com/nmnjain/GeoInsights.AI",
  "https://github.com/nmnjain/Niti-nirman",
];

export const projects = [
  {
    name: "Auraweave",
    
    duration: "MAY 2025 - JUN 2025",
    description:
      "A fully autonomous decentralized on chain Agent to Agent Marketplace.",
    subDescription: (
      <>
        Designed and deployed smart contracts in Solidity on the Sepolia testnet to enable secure data listing and payments using a
        mock stablecoin (MockUSDC), successfully completing 50+ test transactions
        with Python-based producer and consumer agents to automate data exchange cycles, validating end-to-end
    system reliability through over 50 successful test runs
      </>
    ),
    logo: <Auraweave className="w-[25rem] h-[25rem]" />,
    link: "https://auraweave.vercel.app/",
  },
  {
    name: "Geo-Insight",
    
    duration: "AUG 2025",
    description:
      "An AI-driven platform to analyze urbanization, climate shifts & infrastructure growth.",
    subDescription: (
      <>
      GeoInsights is an AI-powered geospatial intelligence platform that transforms satellite imagery and open geospatial data into actionable insights about Pune’s rapid change. Designed for quick, easy use by government agencies, NGOs, journalists, and citizens, it offers personalized dashboards that reveal urbanization, environmental shifts, and socioeconomic trends—empowering smarter local decisions for a sustainable future.
      </> 
      
    ),
    logo: <GI className="w-[25rem] h-[25rem]" />,
    link: "https://github.com/nmnjain/GeoInsights.AI",
  },
  {
    name: "Niti-Nirman",
    
    duration: "Dec 2024 - Jan 2025",
    description: "A Centralized Platform for rural people to find relevant Government schemes.",
    subDescription: (
      <>
        Developed a BERT-based NLP engine that recommends relevant government schemes with 85% accuracy across 50 options by analyzing user profiles. Additionally, I built an OCR-powered ID verification system for Aadhaar and similar documents, which reduced manual review time by 70%. Furthermore, I integrated the Gemini API to create a multilingual chatbot that resolves over 500 queries each month, enhancing user access to scheme information in multiple regional languages.
      </>
    ),
    logo: <NN className="w-[25rem] h-[25rem]" />,
    link: "https://github.com/nmnjain/Niti-nirman",
  },
  {
    name: "Cognito",
    
    duration: "Jan 2024 - Apr 2024",
    description: "A Real time face recognition system to automate class attendance.",
    subDescription: (
      <>
        Designed a real-time facial recognition system leveraging OpenCV and deep learning, achieving 98% identity match accuracy. By optimizing the face matching pipeline, I ensured results were delivered in under one second, supporting seamless performance in multi-user settings. Additionally, I automated daily attendance tracking by integrating face recognition with real-time data storage, reducing manual logging by about 80%.
      </>
    ),
    logo: <NN className="w-[25rem] h-[25rem]" />,
    link: "https://github.com/nmnjain/cognito",
  },
];

export const minorProjects = [
  {
    name: "Hackwithinfy",
    type: "Finalist(Top 0.01%)",
    year: "AUG 25",
    
  },
  {
    name: "Amazon ML Challenge",
    type: "Rank 19 Globally",
    year: " JUN 25",
  },
  {
    name: "Global Quant Championship",
    type: "Top 20% globally (Stage 1)",
    year: "MAY 25",
  },
  {
    name: "Smart India Hackathon",
    type: "Internal Round Winner",
    year: "OCT 24",
  },
  {
    name: "Cetificates",
    type: "",
    year: "",
  },
  {
    name: "MongoDB Certified Associate Developer",
    type: "",
    year: "May 25",
  },
  {
    name: "Salesforce Certified AI Associate",
    type: "",
    year: "SEP 24",
  },
];

export const footerLinks = [
  {
    name: "X (Twitter)",
    logo: <XLogo />,
    logoSmall: <XLogo height={40} width={40} />,
    url: "https://x.com/Namxn27",
  },
  {
    name: "LinkedIn",
    logo: <LinkedinLogo />,
    logoSmall: <LinkedinLogo height={40} width={40} />,
    url: "https://www.linkedin.com/in/naman-jain-352512250/",
  },
  {
    name: "Instagram",
    logo: <InstagramLogo />,
    logoSmall: <InstagramLogo height={40} width={40} />,
    url: "https://instagram.com/namxn27/",
  },
  {
    name: "Github",
    logo: <GithubLogo />,
    logoSmall: <GithubLogo height={42} width={42} />,
    url: "https://github.com/nmnjain",
  },
];
