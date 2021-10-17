import Link from "../../components/link";

const Closure = () => {
    return (
        <div className="text-center text-lg my-20 px-8 md:px-0">
            <p>Thank you for your time,</p>
            <p>if you have any suggestions you can contact me at</p>
            <Link href="mailto:eduardogomezpueyo@gmail.com">eduardogomezpueyo@gmail.com</Link>
            <p>
                or send me a message through <Link href="https://www.linkedin.com/in/eduardo-gomez-pueyo">LinkedIn</Link>
            </p>
        </div>
    );
};

export default Closure;
