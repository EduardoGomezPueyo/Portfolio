import { classNames } from "../../utils/style";

interface ParagraphProps {
    title: string;
    children: string | React.ReactNode;
    className?: string;
}

const Paragraph = ({ title, children, className }: ParagraphProps) => {
    return (
        <div className={classNames("pt-24 pb-20", className)}>
            <div className="w-[80%] lg:w-[40%] mx-auto">
                <h2 className="mb-4 text-xl md:text-3xl font-bold">{title}</h2>
                <p className="text-base md:text-lg">{children}</p>
            </div>
        </div>
    );
};

export default Paragraph;
