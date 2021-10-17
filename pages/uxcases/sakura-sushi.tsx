import Layout from "../../components/layout";
import Image from "next/image";
import RoleBar from "../../components/post-components/role-bar";
import IntroChallenges from "../../components/post-components/intro-challenges";
import ProjectGoals from "../../components/post-components/project-goals";
import Paragraph from "../../components/post-components/paragraph";
import Personas from "../../components/post-components/personas";
import ImageParagraph from "../../components/post-components/image-text-section";
import Challenge from "../../components/post-components/challenge";

import SushiHero from "../../public/sakura-sushi/hero-cover.jpg";
import SushiPrototype from "../../public/sakura-sushi/prototype.jpg";
import PaperWireframes from "../../public/paper-wireframe.jpg";
import Closure from "../../components/post-components/closure";

const challenges = [
    "Eliminate login barrier for the users",
    "Make a streamlined booking process",
    "Provide accessible and quick to find useful information",
    "Make a simple yet useful app, not for just booking",
];

const researchQuestions = [
    "How long does it take a user to make a booking?",
    "What can we learn from the user flow?",
    "Do users think the app is easy or difficult to use?",
    "Any points where the user gets stuck or finds something unclear?",
    "Are there more features that users would like to see included in the app?",
];

const personas = [
    {
        name: "Rachel",
        age: "26",
        occupation: "Junior Web Developer",
        description: "Rachel is a person with allergies who needs to be able to change ingredients in the orders because she can get really sick.",
        image: "/personas/rachel.png",
    },
    {
        name: "Thomas",
        age: "35",
        occupation: "Business Operation Manager",
        description:
            "Thomas is a business man that likes to hang out with partners and would like to know if the restaurants he goes to can accommodate him and his guests.",
        image: "/personas/thomas.png",
    },
];

const SakuraSushi = () => {
    return (
        <Layout title="Sakura Sushi" description="Sakura Sushi UX Case Study" className="text-white">
            <div className="mt-16 md:mt-0 animate-fade-in-down animation-delay-500 opacity-0">
                <Image src={SushiHero} layout="responsive" alt="Sakura Sushi App Hero Image" />
            </div>
            <RoleBar
                role="UX Designer &amp; UX Researcher"
                duration="4 weeks"
                link="https://drive.google.com/file/d/1kZOgycqyszABP6fM9rfYYgeb_i5XjcW6/view?usp=sharing"
                prototype="https://www.figma.com/proto/6NPhJwcdjbMvAo9cGXrYnX/UX-Course-Lo-Fi-and-Hi-Fi-Wirefarme?page-id=84%3A3580&node-id=84%3A3619&viewport=241%2C48%2C0.24&scaling=scale-down&starting-point-node-id=84%3A3619"
            />
            <IntroChallenges challenges={challenges} className="text-pink-600">
                Sakura Sushi is the booking app for a sushi restaurant. For this project, we decided to use a goal-directed design method which revolves around
                focusing on our persona creation and goals. The application will help users with the information they need and a streamlined booking process.
                This project covers the design and prototyping for the app, not the actual development.
            </IntroChallenges>
            <ProjectGoals title="Project Goals" researchQuestions={researchQuestions} className="border-pink-600">
                Most booking services do not provide accurate information or its access is not prominent. It’s hard for the user to make bookings without all
                available information. The goal is to find out how easy it is for users to complete a booking and understand the specific challenges that users
                might face in the searching, scheduling, and reservation processes. For this, we&apos;ll focus on three KPI: Time on task, conversion rates and
                system usability scale.
            </ProjectGoals>
            <Paragraph title="User Research">
                The research conducted focused on interviews and started by assuming that people would not need much information when making a booking at a
                restaurant. Also, that people would like to go socialize more now that the pandemic restrictions have been partially lifted. Research showed
                that people, especially people with allergies and people who take care of others (a parent with a child with type 1 diabetes) look thoroughly
                through menus and the information they provide.
            </Paragraph>
            <Personas personas={personas} className="border-pink-600" />
            <ImageParagraph title="User Journey" image="/user-journey-map.jpg" altText="User Journey Map">
                The app should easily provide all the information the user needs regarding the menu items and their nutritional values. It also should have a
                streamlined booking process that’s both easy and quick to be used.
            </ImageParagraph>
            <div className="w-full md:w-[85%] mx-auto pb-8">
                <Image src={PaperWireframes} layout="responsive" alt="Paper wireframes for Sushi Booking App" />
            </div>
            <Paragraph title="Wireframes and Flow">
                After sketching out some p&amp;p wireframes they were digitalized and prototyped over them. Then a usability test with users was conducted in
                order to discover new user pain points. Thanks to this, new insights were brought to light and changes were made as the prototype started to
                change from low-fidelity to high fidelity. A lot of time was spent on this steps to ensure that the users were front and center and always
                keeping them in mind during the designing phases.
            </Paragraph>
            <div className="w-[60%] mx-auto pb-8">
                <Image src={SushiPrototype} layout="responsive" alt="Sushi App Wireframe Prototype" />
            </div>
            <Challenge
                accentColor="text-pink-600"
                title={challenges[0]}
                subtitle="Challenge 1"
                image="/sakura-sushi/login-mockup.png"
                altText="Sakura Sushi login mockup screen"
                className="bg-gray-200"
            >
                One of the issues that most of the participants raised during the usability testing conducted was the ability to access the app without login
                in. This was something that was kept in mind since the beginning of the project, as applications like this one should be able to grant the user
                the capability to make the booking without a registration. With this in mind, the login screen of the app was designed to enable the users to
                log in with their Google account, their mail and password or without registration.
            </Challenge>
            <Challenge
                accentColor="text-pink-600"
                title={challenges[1]}
                subtitle="Challenge 2"
                image="/sakura-sushi/booking-mockup.png"
                altText="Sakura Sushi booking mockup screen"
            >
                The usability tests brought up another issue with the prototype: the booking process was confusing. This issue was actually split into two. The
                first one: all the information needed to make a booking should be inputted in one place. The second one: there was a need from all the users to
                have a confirmation screen so they could see all the details that they have inputted before confirming the reservation
            </Challenge>
            <Challenge
                accentColor="text-pink-600"
                title={challenges[2]}
                subtitle="Challenge 3"
                image="/sakura-sushi/home-mockup.png"
                altText="Sakura Sushi home mockup screen"
                className="bg-gray-200"
            >
                When doing the first round of testing, one of the things that research brought up quite quickly was the need to make the main features of the
                app stand out more so users could see them right away. From what the users told us, this app granted services related to recipes rather than
                booking or dish information. This was a great insight to make changes in the design and make a more clear decision path for the user.
            </Challenge>
            <Challenge
                accentColor="text-pink-600"
                title={challenges[3]}
                subtitle="Challenge 4"
                image="/sakura-sushi/recipes-mockup.png"
                altText="Sakura Sushi recipes mockup screen"
            >
                These times have taught us that staying at home is not an easy thing to do. So, when designing the app one thing that was kept in mind was to
                add something that was not directly related to business, and this was recipes to try at home. This is a feature that would benefit users as they
                can attempt new recipes at home and with a variety of flavors to try from.
            </Challenge>
            <Paragraph title="Takeaways" className="bg-gray-200">
                I believe that these designs make the booking process more streamlined, clear and offer users possibilities other than just booking. As one of
                the participants from the usability study said: &quot;Having both options, continue with and without login is a great decision, as many people
                would like to just make a reservation without an account.&quot;
                <p className="mt-3">
                    I learned that the research process is at the same time interesting and key to understand the users needs. At the same time, it helps
                    designers to focus the designs back to be user centered, target users’ needs, and ultimately, be useful to them.
                </p>
            </Paragraph>

            <Closure />
        </Layout>
    );
};

export default SakuraSushi;
