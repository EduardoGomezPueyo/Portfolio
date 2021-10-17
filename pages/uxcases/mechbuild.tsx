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

import MechHero from "../../public/mechbuild/hero-cover.jpg";
import KeyboardPrototype from "../../public/mechbuild/prototype.jpg";
import PaperWireframes from "../../public/paper-wireframe.jpg";

const challenges = [
    "Provide accessible and useful information for new users",
    "Place recurrent orders from user profile",
    "Make a streamlined checkout process",
];

const researchQuestions = [
    "How long does it take to complete a checkout?",
    "What can we learn from the user flow?",
    "Do users think the web information is accessible?",
    "Any points where the user gets stuck or finds something unclear?",
    "Are there more features that users would like to see included in the store?",
];

const personas = [
    {
        name: "Jin",
        age: "21",
        occupation: "Keyboard Aficionado",
        description:
            "Jin is a keyboard aficionado who needs information about what to buy to make his own keyboard because he wants to make a responsible purchase.",
        image: "/personas/thomas.png",
    },
    {
        name: "Eliza",
        age: "28",
        occupation: "Keyboard craftswoman",
        description: "Eliza is a keyboard craftswoman who needs to make recurrent purchases because she creates different keyboards for her clients",
        image: "/personas/rachel.png",
    },
];

const Mechbuild = () => {
    return (
        <Layout title="Mechbuild" description="Mechbuild UX Case Study" className="text-white">
            <div className="mt-16 md:mt-0 animate-fade-in-down animation-delay-500 opacity-0">
                <Image src={MechHero} layout="responsive" alt="Mechbuild Web Store Hero Image" />
            </div>
            <RoleBar
                role="UX Designer &amp; UX Researcher"
                duration="3 weeks"
                link="https://drive.google.com/file/d/1tSaK5GCGxorrma73GI2Nivc6NwsuJTr1/view?usp=sharing"
                prototype="https://xd.adobe.com/view/3be41756-0baa-4ed2-bc76-316f7d294630-6eb7/?fullscreen"
            />
            <IntroChallenges challenges={challenges} className="text-yellow-600">
                Mechbuild is a web store for mechanical keyboards. For this project, we decided to use a goal-oriented design method, which focuses on the
                creation of personas and tailor the design decisions to solve their problems. This web, even though it&apos;s a store, has to provide
                information for new users and experienced ones so they&apos;re able to make responsible decisions and purchases. This project covers the design
                and prototyping for the app, not the actual development.
            </IntroChallenges>
            <ProjectGoals title="Project Goals" researchQuestions={researchQuestions} className="border-yellow-600">
                Most web stores like this one do not provide detailed information about building keyboards and their components. Although there is a lot of
                information available on the web, for users would be more useful to have all the information curated in the same place as the store is. The goal
                is to find out how easy is for users to gather information and complete the checkout process. At the same time, it aims to understand the
                challenges of new aficionados who want to build a keyboard and their experienced counterparts.
            </ProjectGoals>
            <Paragraph title="User Research">
                The research conducted focused on interviews and started assuming that people would not need much information about building mechanical
                keyboards, as there is already a lot of that on the internet. At the same time, it was assumed that these stores would be frequently visited by
                experienced customers. Research showed that people, especially those without that much experienced, wanted well written content (if possible
                with video demonstrations) and that content is also really interesting for the people with more experience.
            </Paragraph>
            <Personas personas={personas} className="border-yellow-600" />
            <ImageParagraph title="User Journey" image="/mechbuild/user-journey-map.png" altText="User Journey Map">
                The store should easily provide all the information the user needs regarding keyboard components and how to use it. It also should provide the
                chance to make recurrent purchases for experienced buyers.
            </ImageParagraph>
            <div className="w-full md:w-[85%] mx-auto pb-8">
                <Image src={PaperWireframes} layout="responsive" alt="Paper wireframes for Mechanical Keyboard Web Store" />
            </div>
            <Paragraph title="Wireframes and Flow">
                After sketching out some p&amp;p wireframes they were digitalized and prototyped over them. Then a usability test with users was conducted in
                order to discover new user pain points. Thanks to this, new insights were brought to light and changes were made as the prototype started to
                change from low-fidelity to high fidelity. A lot of time was spent on this steps to ensure that the users were front and center and always
                keeping them in mind during the designing phases.
            </Paragraph>
            <div className="w-[60%] mx-auto pb-8">
                <Image src={KeyboardPrototype} layout="responsive" alt="Mechanical Keyboard Web Store Wireframe Prototype" />
            </div>
            <Challenge
                accentColor="text-yellow-600"
                title={challenges[0]}
                subtitle="Challenge 1"
                image="/mechbuild/product-description-page-mockup.png"
                altText="Product description page mockup"
            >
                One of the first issues that most new users would face is the huge amount of information on the subject, as well as the many sources that like
                to address it. There are a lot of sites that provide good information and guides about mechanical keyboards, but not so many stores that provide
                this information alongside a shopping experience. With this in mind, a store was built with space to accommodate guides and content to guide new
                users and, at the same time, provide content for experienced users that like to bask themselves in this hobby.
            </Challenge>
            <Challenge
                accentColor="text-yellow-600"
                title={challenges[1]}
                subtitle="Challenge 2"
                image="/mechbuild/user-profile-mockup.png"
                altText="User profile page mockup"
                className="bg-gray-200"
            >
                There are numerous keyboard aficionados that get completely hooked on this hobby and that once they&apos;ve found a suitable store, they will
                keep placing orders there to make new builds. This feature wants to make that process easier, as it provides the chance to make another order
                with the same characteristics and also the ability to modify the order to change one or two components. That way, some elements like a keycap
                set might stay the same while others like the switch selection change to suit new tastes.
            </Challenge>
            <Challenge
                accentColor="text-yellow-600"
                title={challenges[2]}
                subtitle="Challenge 3"
                image="/mechbuild/payment-mockup.png"
                altText="Payment process page mockup"
            >
                Research showed that in a complex checkout process, with a lot of information to be inputted, there is a need to divide it into affordable
                pieces. With this in mind, the process designed is something users are already used to, a segmented process that asks for information step by
                step. In the near future, it would be interesting to implement a “remember checkout information” feature, so there is no need to repeat it all
                over every time.
            </Challenge>

            <Paragraph title="Takeaways" className="bg-gray-200">
                The web aims to be a place for every keyboard aficionado and it fulfills that role perfectly. Anyone who wants to buy a new prebuild keyboard
                and that does not have that much experience; and those who want specific components to craft their own, have their place in this web store.
                <p className="mt-3">
                    I learned that a store is a lot more work than it seems, and the general logic behind, for the teams that do front-end and back-end
                    programming, is way more complex than anyone could think of.
                </p>
            </Paragraph>
            <Closure />
        </Layout>
    );
};

export default Mechbuild;
