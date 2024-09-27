'use client';
import Card from "@/Components/Card";
import { work_experience } from "../../information";
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
      {work_experience.map((project, i) => (
        <Card 
          key={i} 
          title={project.title} 
          date={project.date}
          description={project.role}
          type="x-large" 
          event={() => { handleClick(i); }} 
          backgroundImage={project.main_image}
          priority
        >
        </Card>
      ))}
      {activeKey !== null && (
        <Popup 
          data={work_experience[activeKey]} 
          closeFunction={closeFunction} 
          secondaryTitle={work_experience[activeKey].role}
          highlightTitle={"Experience Highlights"}
        />
      )}
    </>
  );
};

export default WorkExperience;
