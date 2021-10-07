import Link from "next/link";

const IntroSection = () => {
    return (
        <header className="max-w-[80%] mx-auto mt-32 text-center sm:mt-36 sm:text-center sm:w-full">
            <div className="w-full m-8 mx-auto sm:mx-0 opacity-0 animate-fade-in-down animation-delay-1000">
                <h1 className="mt-5 mb-2 text-3xl sm:text-4xl font-extrabold sm:mt-0">Hello there!</h1>
                <div className="text-xl">
                    <p>Hi, I am Eduardo Gómez!</p>
                    <p className="mb-4">A journalist that leaped into the digital world</p>
                    <Link href="/about">
                        <a className="transition-all duration-250 rounded inline-block px-5 py-3 border border-blue-600 text-blue-800 bg-transparent hover:bg-blue-600 hover:text-white">
                            Read more
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default IntroSection;
