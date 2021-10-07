import Section from "./section";
import ProjectList from "./project-list";
import { Project } from "../utils/types";

interface ExperienceSectionProps {
    projects: Project[];
    h1: string;
    h2: string;
}

const ExperienceSection = ({ projects, h1, h2 }: ExperienceSectionProps) => {
    return (
        <Section className="text-center mt-24 sm:mt-32 opacity-0 animate-fade-in-down animation-delay-2000">
            <Section.Title>{h1}</Section.Title>
            <Section.Subtitle>{h2}</Section.Subtitle>
            <ProjectList projects={projects} />
        </Section>
    );
};

export default ExperienceSection;
