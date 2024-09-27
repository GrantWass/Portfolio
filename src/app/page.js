import Header from "./Header";
import Title from "./Sections/Title";
import Projects from "./Sections/Projects";
import Education from "./Sections/Education";
import { Skills, Languages, Techniques } from "./Sections/Skills";
import Section from "../Components/Section";
import WorkExperience from "./Sections/WorkExperience";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <main>
          <Section title={""} id="home">
            <Title />
          </Section>
          <Section title={"Work Experience"} id="work">
            <WorkExperience />
          </Section>
          <Section title={"Education"} id="education">
            <Education />
          </Section>
          <Section title={"Projects"} id="projects">
            <Projects />
          </Section>
          <Section title={"Languages"} id="languages">
            <Languages />
          </Section>
          <Section title={"Tools"} id="">
            <Skills />
          </Section>
          <Section title={"Skills"} id="skills">
            <Techniques />
          </Section>
          {/* <Section title={"About me"} id="about">
            <Personal />
          </Section> */}
        </main>
      </div>
    </>
  );
}
