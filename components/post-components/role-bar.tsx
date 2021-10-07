import Link from "../link";

interface roleBarProps {
    role: string;
    duration: string;
    link: string;
    prototype: string;
}

const roleBar = ({ role, duration, link, prototype }: roleBarProps) => {
    return (
        <div className="w-full md:w-4/5 h-auto my-0 mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 animate-fade-in-down animation-delay-1000 opacity-0 pt-12 text-center items-center px-5 md:px-0">
            <p>Role: {role}</p>
            <p>Duration: {duration}</p>
            <Link href={link} className="no-underline border px-6 py-3 mx-auto hover:text-white hover:bg-gray-600 text-gray-600 border-gray-600">
                Process deck
            </Link>
            <Link href={prototype} className="no-underline border px-6 py-3 mx-auto hover:text-white hover:bg-gray-600 text-gray-600 border-gray-600">
                Prototype
            </Link>
        </div>
    );
};

export default roleBar;
