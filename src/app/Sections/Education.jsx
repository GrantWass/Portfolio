'use client';
import Card from "@/Components/Card";
import { education } from "../../information";
import { useState } from "react";
import Popup from "@/Components/Popup";

const WorkExperience = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleClick = (i) => {
    setActiveKey(i);
  };

  const closeFunction = () => {
    setActiveKey(null);
  };

  return (
    <>
      {education.map((project, i) => (
        <Card 
          key={i} 
          title={project.title}
          shortTitle={project.shortTitle} 
          date={project.date}
          shortDesc={project.shortDesc}
          description={project.description}
          gpa={project.gpa}
          type="x-large" 
          event={() => { handleClick(i); }} 
          backgroundImage={project.main_image}
        >
        </Card>
      ))}
      {activeKey !== null && (
        <Popup 
          data={education[activeKey]} 
          closeFunction={closeFunction} 
          highlightTitle={"Education Highlights"}
        />
      )}
    </>
  );
};

export default WorkExperience;
