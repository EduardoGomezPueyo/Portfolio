import Image from "next//image";
import { classNames } from "../../utils/style";

interface ParagraphProps {
    title: string;
    children: string;
    className?: string;
    image: string;
    altText: string;
}

const Paragraph = ({ title, children, className, image, altText }: ParagraphProps) => {
    const src = require("../../public" + image);
    console.log(src);

    return (
        <div className={classNames("pt-24 pb-20 flex flex-col md:flex-row w-full md:w-[60%] mx-auto gap-8 min-h-[50vh]", className)}>
            <div className="w-full md:w-[40%] my-auto px-10 md:px-0">
                <h2 className="mb-4 text-xl md:text-3xl font-bold">{title}</h2>
                <p className="text-base md:text-lg">{children}</p>
            </div>
            <div className="w-full md:w-[60%] my-auto">
                <Image src={src.default} layout="responsive" alt={altText} />
            </div>
        </div>
    );
};

export default Paragraph;
