"use client";
import React from 'react';
import {
  SiDotnet,
  SiJavascript,
  SiReact,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiMongodb,
  SiMicrosoftazure,
  SiDocker,
  SiHtml5,
  SiCss3,
  SiPython,
  SiCsharp,
  SiTypescript,
  SiR,
  SiC,
  SiKeras,
  SiTensorflow,
  SiPandas,
  SiGithub,
  SiVisualstudiocode,
  SiJira,
  SiScikitlearn,
  SiFlask,
} from 'react-icons/si';

import { DiDatabase } from "react-icons/di";
import { FaJava, FaTasks, FaGit, FaUserCircle, FaProjectDiagram, FaNetworkWired, FaDraftingCompass, FaSyncAlt, FaBrain, FaBullhorn, FaPencilRuler } from 'react-icons/fa';
import { GiArtificialIntelligence } from 'react-icons/gi';
import Card from '@/Components/Card';



// Define skills and languages data
const skills = [
  {
    title: "",
    description: null,
    date: null,
    technologies: ["Speedway Motors"],
    highlights: null,
    main_image: SiDotnet,
    images: [
    ],
  },
  {
    title: "React",
    description: null,
    date: null,
    technologies: [
      "Personal Running Interface",
      "Secret Gitler",
      "Speedway Motors",
    ],
    highlights: null,
    main_image: SiReact,
    images: [
    ],
  },
  {
    title: "Express.js",
    description: null,
    date: null,
    technologies: ["Secret Gitler"],
    highlights: null,
    main_image: SiExpress,
    images: [
    ],
  },
  {
    title: "Node.js",
    description: null,
    date: null,
    technologies: ["Personal Running Interface", "Secret Gitler"],
    highlights: null,
    main_image: SiNodedotjs,
    images: [
    ],
  },
  {
    title: "Next.js",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiNextdotjs,
    images: [
    ],
  },
  {
    title: "Redux",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiRedux,
    images: [
    ],
  },
  {
    title: "Jest",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiJest,
    images: [
    ],
  },
  {
    title: "MongoDB",
    description: null,
    date: null,
    technologies: ["Secret Gitler"],
    highlights: null,
    main_image: SiMongodb,
    images: [
    ],
  },
  {
    title: "Azure",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiMicrosoftazure,
    images: [
    ],
  },
  {
    title: "Docker",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiDocker,
    images: [
    ],
  },
  {
  title: "Keras",
  description: null,
  date: null,
  technologies: ["Real Estate Affordability Predictor"],
  highlights: null,
  main_image: SiKeras,
  images: [],
},
{
  title: "TensorFlow",
  description: null,
  date: null,
  technologies: ["Real Estate Affordability Predictor"],
  highlights: null,
  main_image: SiTensorflow,
  images: [],
},
{
  title: "Pandas",
  description: null,
  date: null,
  technologies: ["Real Estate Affordability Predictor"],
  highlights: null,
  main_image: SiPandas,
  images: [],
},
{
  title: "Scikit-learn",
  description: null,
  date: null,
  technologies: ["Real Estate Affordability Predictor"],
  highlights: null,
  main_image: SiScikitlearn,
  images: [],
},
{
  title: "Visual Studio",
  description: null,
  date: null,
  technologies: ["Personal Running Interface"],
  highlights: null,
  main_image: SiVisualstudiocode,
  images: [],
},
{
  title: "GitHub",
  description: null,
  date: null,
  technologies: ["Secret Gitler"],
  highlights: null,
  main_image: SiGithub,
  images: [],
},
{
  title: "WebSockets",
  description: null,
  date: null,
  technologies: ["Secret Gitler "],
  highlights: null,
  main_image: FaProjectDiagram,
  images: [],
},
{
  title: "Flask",
  description: null,
  date: null,
  technologies: ["Mock Compiler"],
  highlights: null,
  main_image: SiFlask,
  images: [],
}
];

const languages = [
  {
    title: "Python",
    description: null,
    date: null,
    technologies: ["Machine Learning", "Data Analysis"],
    highlights: null,
    main_image: SiPython,
    images: [
    ],
  },
  {
    title: "JavaScript",
    description: null,
    date: null,
    technologies: ["React", "Node.js", "Express"],
    highlights: null,
    main_image: SiJavascript,
    images: [
    ],
  },
  {
    title: "",
    description: null,
    date: null,
    technologies: ["React", ".NET"],
    highlights: null,
    main_image: SiCsharp,
    images: [
    ],
  },
  {
    title: "TypeScript",
    description: null,
    date: null,
    technologies: ["React", "Node.js"],
    highlights: null,
    main_image: SiTypescript,
    images: [
    ],
  },
  {
    title: "",
    description: null,
    date: null,
    technologies: ["Mock Compiler"],
    highlights: null,
    main_image: SiC,
    images: [
    ],
  },
  {
    title: "SQL",
    description: null,
    date: null,
    technologies: ["Real Estate Affordability Predictor"],
    highlights: null,
    main_image: DiDatabase,
    images: [
    ],
  },
  {
    title: "",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiR,
    images: [
    ],
  },
  {
    title: "",
    description: null,
    date: null,
    technologies: ["Secret Gitler"],
    highlights: null,
    main_image: FaGit,
    images: [],
  },
  {
    title: "Java",
    description: null,
    date: null,
    technologies: ["Mock Compiler"],
    highlights: null,
    main_image: FaJava,
    images: [
    ],
  },
  {
    title: "HTML",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiHtml5,
    images: [
    ],
  },
  {
    title: "CSS",
    description: null,
    date: null,
    technologies: ["Personal Running Interface"],
    highlights: null,
    main_image: SiCss3,
    images: [
    ],
  },
];

const techniques = [
  {
    title: "Neural Networks",
    description: null,
    date: null,
    technologies: ["Real Estate Affordability Predictor"],
    highlights: null,
    main_image: FaBrain,
    images: [],
  },
  {
    title: "Project Management",
    description: null,
    date: null,
    technologies: ["Secret Gitler"],
    highlights: null,
    main_image: FaTasks,
    images: [],
  },
  {
    title: "Product Development",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: FaDraftingCompass,
    images: [],
  },
  {
    title: "Test-Driven Development",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: SiJira,
    images: [],
  },
  {
    title: "Agile Methodologies",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: FaSyncAlt,
    images: [],
  },
  {
    title: "Machine Learning",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: GiArtificialIntelligence,
    images: [],
  },
  {
    title: "SOLID Design Principles",
    description: null,
    date: null,
    technologies: ["Mock Compiler"],
    highlights: null,
    main_image: FaPencilRuler,
    images: [],
  },
  {
    title: "Software Design",
    description: null,
    date: null,
    technologies: ["Personal Running Interface"],
    highlights: null,
    main_image: FaDraftingCompass,
    images: [],
  },
  {
    title: "User Interface Design",
    description: null,
    date: null,
    technologies: ["Secret Gitler"],
    highlights: null,
    main_image: FaUserCircle,
    images: [],
  },
  {
    title: "Marketing",
    description: null,
    date: null,
    technologies: null,
    highlights: null,
    main_image: FaBullhorn,
    images: [],
  },
  {
    title: "Data Visualization",
    description: null,
    date: null,
    technologies: ["Real Estate Affordability Predictor"],
    highlights: null,
    main_image: FaNetworkWired,
    images: [],
  },
];


export const Skills = () => {
  return (
    <>
      {skills.map((skill, i) => {
        const Icon = skill.main_image;
        return <Card key={i} title={skill.title} enlargeIcon={skill.title === ""} type={"small"} Icon={Icon} />;
      })}
    </>
  );
};

export const Languages = () => {
  return (
    <>
      {languages.map((language, i) => {
        const Icon = language.main_image;
        return <Card key={i} title={language.title} enlargeIcon={language.title === ""} type={"small"} Icon={Icon} />;
      })}
    </>
    )
  }

  export const Techniques = () => {
    return (
      <>
        {techniques.map((item, i) => {
          const Icon = item.main_image;
          return <Card key={i} title={item.title} enlargeIcon type={"medium"} Icon={Icon} />;
        })}
      </>
      )
    }
