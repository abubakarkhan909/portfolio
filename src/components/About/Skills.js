import React from 'react'
import SkillCard from './SkillCard';
import {
    DiReact,
    DiJqueryLogo,
    DiJavascript1,
    DiBootstrap,
    DiCss3,
    DiHtml5,
    DiWordpress,
    DiGit,
    DiSass,
  } from "react-icons/di";
   import { SiMui, SiRedux, SiTailwindcss, SiJira, SiTrello,SiAsana } from "react-icons/si";

  const skillsData = [
    {
      icon: <DiReact />,
      title: "React.js",
      description: "Building powerful UIs with React.js.",
    },
    {
      icon: <SiRedux />,
      title: "Redux",
      description: "State management with Redux.",
    },
    {
      icon: <DiJqueryLogo />,
      title: "jQuery",
      description: "Enhancing interactivity using jQuery.",
    },
    {
      icon: <DiJavascript1 />,
      title: "JavaScript",
      description: "Writing modern JavaScript applications.",
    },
    {
      icon: <SiMui />,
      title: "Material UI",
      description: "Designing with Material UI components.",
    },
    {
      icon: <DiBootstrap />,
      title: "Bootstrap",
      description: "Responsive designs with Bootstrap.",
    },
    {
      icon: <SiTailwindcss />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for styling.",
    },
    {
      icon: <DiWordpress />,
      title: "WordPress",
      description: "Building websites with WordPress.",
    },
    {
      icon: <DiSass />,
      title: "Sass",
      description: "Advanced CSS with Sass.",
    },
    {
      icon: <DiCss3 />,
      title: "CSS3",
      description: "Styling web pages with modern CSS.",
    },
    {
      icon: <DiHtml5 />,
      title: "HTML5",
      description: "Building structure with HTML5.",
    },
    {
        icon: <DiGit />,
        title: "Git",
        description: "Version control with Git.",
      },
    {
      icon: <SiTrello />,
      title: "Trello/Agile",
      description: "Following Agile methodologies.",
    },
    {
      icon: <SiAsana />,
      title: "Scrum",
      description: "Scrum framework for project management.",
    },
   
      {
        icon: <SiJira />,
        title: "Jira",
        description: "Project management with Jira.",
      },
  ];
  

function Skills() {
  return (
    <div className='skillsset'>
        <div className='container'>
            <h1 className="project-heading">
            What <strong className="purple">I do</strong>
            </h1>
            <div className="skills-container">
            {skillsData.map((skill, index) => (
                <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
                />
            ))}
            </div>
        </div>
    </div>
  )
}

export default Skills