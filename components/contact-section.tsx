import Section from "./section";
import Link from "./link";

const ContactSection = () => {
    return (
        <Section className="text-center mt-24 sm:mt-32" id="contact">
            <Section.Title className="">Contact me</Section.Title>
            <p className="mb-6 text-xl sm:text-2xl px-8">Get in touch! I don&apos;t bite...</p>
            <p className="text-lg sm:text-xl mt-0 mb-0 mx-auto max-w-[550px] px-0">
                You can contact me at <Link href="mailto:eduardogomezpueyo@gmail.com">eduardogomezpueyo@gmail.com</Link>
                <br />
                or reach out on <Link href="https://www.linkedin.com/in/eduardo-gomez-pueyo/">LinkedIn</Link>
            </p>
        </Section>
    );
};

export default ContactSection;
