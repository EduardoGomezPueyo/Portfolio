import Layout from "../components/layout";
import IntroSection from "../components/intro-section";
import UxSection from "../components/uxcases";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact-section";
import { getProjects } from "../utils/data";
import { GetStaticProps } from "next";
import { Project } from "../utils/types";
import Link from "next/link";

interface HomeProps {
    projects: Project[];
}

const Home = ({ projects }: HomeProps) => (
    <Layout title="Home" description="Eduardo Gómez's personal website for portfolio and contact">
        <IntroSection />
        <UxSection />
        <ExperienceSection projects={projects} h1="Web and app projects" h2="Some of the things I've worked on" />
        <p className="text-lg sm:text-xl mt-0 sm:mt-8 mb-0 mx-auto max-w-[550px] px-0 py-8 text-center">
            {" "}
            Feel free to see{" "}
            <Link href="/projects">
                <a className="transiton duration-200 ease-in-out text-gray-400 inline-block underline hover:text-gray-800 cursor-pointer">all of my projects</a>
            </Link>
        </p>
        <ContactSection />
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    const projects = await getProjects();
    return {
        props: {
            projects: projects.slice(0, 6),
        },
    };
};

export default Home;
