import Section from "./section";
import Link from "./link";
import Image from "next/image";

import comingSoon from "../public/coming-soon.jpg";
import SushiThumbnail from "../public/sakura-thumbnail.jpg";

const UxCases = () => {
    return (
        <Section className="text-center mt-24 sm:mt-32 opacity-0 animate-fade-in-down animation-delay-2000">
            <Section.Title className="">Ux Design Cases</Section.Title>
            <Section.Subtitle>A bit in depth in the Ux-Design process</Section.Subtitle>
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full lg:w-[80%] mx-auto gap-y-8 lg:gap-4">
                <Link href="/uxcases/sakura-sushi" className="overflow-hidden rounded-xl focus:ring-pink-600 hover:ring-2 hover:ring-pink-600">
                    <Image src={SushiThumbnail} placeholder="blur" layout="responsive" alt="Sushi Booking App Image" />
                </Link>
                <Link href="/" className="overflow-hidden rounded-xl focus:ring-blue-500 hover:ring-2 hover:ring-blue-500">
                    <Image src={comingSoon} placeholder="blur" layout="responsive" alt="" />
                </Link>
                <Link href="/" className="overflow-hidden rounded-xl focus:ring-blue-500 hover:ring-2 hover:ring-blue-500">
                    <Image src={comingSoon} placeholder="blur" layout="responsive" alt="" />
                </Link>
                <Link href="/" className="overflow-hidden rounded-xl focus:ring-blue-500 hover:ring-2 hover:ring-blue-500">
                    <Image src={comingSoon} placeholder="blur" layout="responsive" alt="" />
                </Link>
            </div>
        </Section>
    );
};

export default UxCases;
