'use client';
import Card from "@/Components/Card";
import { projects } from "../../information";
import { useState } from "react";
import Popup from "@/Components/Popup";

const Projects = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (i) => {
    setActiveKey(i);
  };

  const closeFunction = () => {
    setActiveKey(null);
  };

  return (
    <>
      {projects.map((project, i) => (
        <Card 
          key={i} 
          title={project.title} 
          date={project.date}
          description={project.build}
          type="large" 
          event={() => { handleClick(i); }} 
          textBackground
          backgroundImage={project.main_image}
        >
        </Card>
      ))}
      {activeKey !== null && (
        <Popup 
          data={projects[activeKey]} 
          closeFunction={closeFunction} 
        />
      )}
    </>
  );
};

export default Projects;
