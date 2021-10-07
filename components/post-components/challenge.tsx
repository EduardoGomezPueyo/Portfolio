import Image from "next//image";

interface ChallengeProps {
    title: string;
    children: string;
    className?: string;
    image: string;
    altText: string;
    subtitle: string;
}

const Challenge = ({ title, children, className, image, altText, subtitle }: ChallengeProps) => {
    const src = require("../../public" + image);
    console.log(src);

    return (
        <div className={className}>
            <div className="pt-24 pb-20 flex flex-col sm:flex-row w-full sm:w-[60%] mx-auto gap-8 min-h-[50vh] items-center">
                <div className="w-full sm:w-[60%] my-auto px-10 sm:px-0">
                    <h3 className="mb-2 text-lg sm:text-2xl font-semibold uppercase text-pink-600">{subtitle}</h3>
                    <h2 className="mb-4 text-xl sm:text-3xl font-bold">{title}</h2>
                    <p className="text-base sm:text-lg">{children}</p>
                </div>
                <div className="w-full sm:w-[40%]">
                    <Image src={src.default} layout="responsive" alt={altText} />
                </div>
            </div>
        </div>
    );
};

export default Challenge;
