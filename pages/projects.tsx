import { Project } from "../utils/types";
import { GetStaticProps } from "next";
import { getProjects } from "../utils/data";
import Layout from "../components/layout";
import ExperienceSection from "../components/experience-section";
import UxCases from "../components/uxcases";

interface ProjectProps {
    webProjects: Project[];
    mobileProjects: Project[];
}

const Projects = ({ webProjects, mobileProjects }: ProjectProps) => {
    return (
        <Layout title="Projects" description="List of projects made by Eduardo Gómez">
            <UxCases />
            <ExperienceSection projects={webProjects} h1="Web projects" h2="Some of the things I've worked on" />
            <ExperienceSection
                projects={mobileProjects}
                h1="Mobile only projects"
                h2="It's highly recommended that you check this webs on mobile as that was the platform they were designed for"
            />
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<ProjectProps> = async () => {
    const projects = await getProjects();
    // @ts-ignore
    return {
        props: {
            webProjects: projects.slice(0, 6),
            mobileProjects: projects.slice(6, 10),
        },
    };
};

export default Projects;
