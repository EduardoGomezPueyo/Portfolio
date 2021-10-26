import Layout from "../../components/layout";
import Image from "next/image";
import RoleBar from "../../components/post-components/role-bar";
import IntroChallenges from "../../components/post-components/intro-challenges";
import ProjectGoals from "../../components/post-components/project-goals";
import Paragraph from "../../components/post-components/paragraph";
import Personas from "../../components/post-components/personas";
import ImageParagraph from "../../components/post-components/image-text-section";
import Challenge from "../../components/post-components/challenge";
import Closure from "../../components/post-components/closure";

import LinkArmsHero from "../../public/linkarms/hero-cover.jpg";
import LinkArmsPrototype from "../../public/linkarms/prototype.jpg";
import PaperWireframes from "../../public/paper-wireframe.jpg";

const challenges = [
    "Design quick and easy navigation to access all tabs easily",
    "Provide a seamless experience across platforms",
    "Maintain a curated selection of resources",
];

const researchQuestions = [
    "How long does it take to choose a mentor?",
    "What can we learn from the user flow?",
    "Do users think the service stays consistent?",
    "Any points where the user gets stuck or finds something unclear?",
    "Are there more features that users would like to see included?",
];

const personas = [
    {
        name: "Albert",
        age: "21",
        occupation: "Student",
        description:
            "Albert is a student that wants to get some working experience before finishing his degree and wants to connect with professionals that offer some guidance.",
        image: "/personas/thomas.png",
    },
    {
        name: "Liz",
        age: "34",
        occupation: "UX Designer",
        description:
            "Liz is a self taught UX designer that would love to help the younger ones with some guidance and resources when they enter the  UX field.",
        image: "/personas/rachel.png",
    },
];

const Mechbuild = () => {
    return (
        <Layout title="LinkArms" description="LinkArms UX Case Study" className="text-white">
            <div className="mt-16 md:mt-0 animate-fade-in-down animation-delay-500 opacity-0">
                <Image src={LinkArmsHero} layout="responsive" alt="LinkArms app and responsive web hero image" />
            </div>
            <RoleBar
                role="UX Designer &amp; UX Researcher"
                duration="3 weeks"
                link="https://drive.google.com/file/d/1xeGRm4SJ_Y8G0RbPaH0prxracfvmC8HG/view?usp=sharing"
                prototype="https://www.figma.com/proto/ezh0dRUbqZHwhhxiVpInqS/College-Grad-app?page-id=18%3A236&node-id=18%3A259&viewport=241%2C48%2C0.19&scaling=min-zoom&starting-point-node-id=18%3A259"
            />
            <IntroChallenges challenges={challenges} className="text-blue-600">
                LinkArms is a software solution in the form of an App with a responsive website that aims to connect college students and graduates with mentors
                in the workforce. For this project, we decided to use a goal-oriented design method, which focuses on the creation of personas and tailor the
                design decisions to solve their problems. The overall goal is to provide useful information and guidance to young people before joining the
                workforce through a mentorship process.
            </IntroChallenges>
            <ProjectGoals title="Project Goals" researchQuestions={researchQuestions} className="border-blue-600">
                One of the goals is to provide a seamless experience across platforms. The service would be an application with a corresponding responsive
                website that allows college students to look for a mentor in the workplace, so a system that ensures consistency is needed. Another goal is to
                provide ample search parameters so students can perform a precise search that will match them with a suitable mentor. Lastly, it would be
                important to have a curated selection of easy to share and accessible resources.
            </ProjectGoals>
            <Paragraph title="User Research">
                The research conducted focused on interviews and started assuming that people would just need a place to connect with experts and share their
                experience. At the same time, it was assumed that just a mobile app would suffice, but there are a lot of users that enjoy using a desktop
                computer with these type of apps. Research showed that people, especially college students would access more to the solution with a mobile app,
                but also, that they would access, like another SNS like Facebook, through their computers or tablets. Older professionals like to access through
                bigger screens.
            </Paragraph>
            <Personas personas={personas} className="border-blue-600" />
            <ImageParagraph title="User Journey" image="/linkarms/user-journey-map.png" altText="User Journey Map">
                The user should start by searching a suitable mentor through a well built search screen. At the same time the user should be able to receive,
                share and locate important resources like articles.
            </ImageParagraph>
            <div className="w-full md:w-[85%] mx-auto pb-8">
                <Image src={PaperWireframes} layout="responsive" alt="Paper wireframes for LinkArms App" />
            </div>
            <Paragraph title="Wireframes and Flow">
                The design process started with a Crazy Eights exercise that was the foundation for some pen and paper wireframes that were later digitalized.
                These digital wireframes were made into prototypes and usability tests were performed on them, which provided ample user feedback. A lot of time
                was spent on these steps to ensure that the users were front and center and always keeping them in mind during the designing phases.
            </Paragraph>
            <div className="w-[60%] mx-auto pb-8">
                <Image src={LinkArmsPrototype} layout="responsive" alt="LinkArms App Wireframe Prototype" />
            </div>
            <Challenge
                accentColor="text-blue-600"
                title={challenges[0]}
                subtitle="Challenge 1"
                image="/linkarms/chat-screen-mockup.png"
                altText="Chat screen mockup"
            >
                One of the first issues that was discovered during the usability studies was that even though the use of a hamburger menu was a feature that
                most users already knew, it was not the right choice for them, and they found it out of place. Instead they suggested a more direct approach, a
                navigation that would be instant, especially for smaller devices, and as such, the idea of using tabs was born. With tabs, there’s no need to
                look for more navigation steps other than clicking on the tab and going to the next screen in just one step.
            </Challenge>
            <Challenge
                accentColor="text-blue-600"
                title={challenges[1]}
                subtitle="Challenge 2"
                image="/linkarms/ipad-desktop-mockup.png"
                altText="Tablet and desktop screen mockups"
                className="bg-gray-200"
            >
                This is an app that has a corresponding responsive website that will be used across different devices. As such, one of the most important
                characteristics is to maintain consistency, This has to be achieved alongside two different paths. The first one, design wise, has to match the
                branding across devices, with the same color palette and the same font with weight and size changes when needed. The second one is related to
                development. When the app is produced, it has to synchronize the chats and history across devices.
            </Challenge>
            <Challenge
                accentColor="text-blue-600"
                title={challenges[2]}
                subtitle="Challenge 3"
                image="/linkarms/resources-screen-mockup.png"
                altText="Resources screen mockup"
            >
                Research showed that even though the resources tab was a really interesting feature it was not usable because there was no way to filter and
                search for specific information. Because of this feedback, there was a need to include some new elements into the design that allowed users to
                search and filter for their selected content. In future versions of the app some options to consider would be to allow users to select, curate,
                save and share the resources they want.
            </Challenge>

            <Paragraph title="Takeaways" className="bg-gray-200">
                This app and the responsive website that pairs with it can help college students and graduates to find mentors who will guide them and provide
                resources to better understand how to enter into the workforce successfully.
                <p className="mt-3">
                    I learned that trying to design a tool for social help can improve so many people’s experiences and truthfully I would have loved to have
                    something like this when I finished my college degree.
                </p>
            </Paragraph>
            <Closure />
        </Layout>
    );
};

export default Mechbuild;
