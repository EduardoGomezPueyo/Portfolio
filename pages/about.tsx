import Layout from "../components/layout";
import Image from "next/image";

import authorPicture from "../public/profile-picture.jpg";

const About = () => {
    return (
        <Layout title="About" description="Learn something about me!">
            <div className="w-full md:w-4/5 h-auto xl:h-[63vh] my-0 mx-auto flex flex-col xl:flex-row mt-24 gap-x-10 animate-fade-in-down animation-delay-1000 opacity-0 pt-12">
                <div className="my-auto w-[100%]">
                    <Image src={authorPicture} alt="Author profile picture" />
                </div>
                <div className="px-8 pt-4 lg:pt-0 mt-6 flex flex-col sm:my-auto text-center sm:text-left w-[95%]">
                    <h1 className="text-4xl font-bold mb-6">Nice to meet you!</h1>
                    <p className="text-gray-700 text-lg mb-4">
                        Yep! That&apos;s me, on the right, during my birthday, being yelled at because I did not put the cake facing the other camera taking
                        photos. Hi, I&apos;m Eduardo! I was a journalist that decided to change paths and become a UX designer. I&apos;ve done a lot of stuff, a
                        little bit of this and that and ended up knowing how to code a little bit as well.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        I really like problem solving in design, especially web/mobile sites. I’ve worked on stack teams with so much talent and I hope to
                        continue doing so because it’s the best way to keep learning and moving forward.
                    </p>
                    <p className="text-gray-700 text-lg mb-4">
                        When I’m not working you can find me playing with my cat, playing PC games with my friends or searching for a new keycap set for
                        mechanical keyboard.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
