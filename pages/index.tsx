import Layout from "../components/layout";
import IntroSection from "../components/intro-section";
import AboutSection from "../components/about-section";
import ExperienceSection from "../components/experience-section";
import ContactSection from "../components/contact-section";
import { getProjects } from "../utils/markdown";
import { GetStaticProps } from "next";
import { Project } from "../utils/types";

interface HomeProps {
  projects: Project[];
}

const Home = ({ projects }: HomeProps) => (
  <Layout
    title="Victor Navarro | Software Developer"
    description="Personal website of Victor Navarro for portfolio and contact"
  >
    <IntroSection />
    <AboutSection />
    {/*<ExperienceSection projects={projects} />*/}
    {/*<ContactSection />*/}
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const projects = await getProjects();
  return {
    props: {
      projects: projects.slice(0, 8)
    }
  };
};

export default Home;