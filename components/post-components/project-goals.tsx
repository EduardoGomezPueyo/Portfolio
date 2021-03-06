import { classNames } from "../../utils/style";

interface ProjectGoalsProps {
    title: string;
    children: string;
    researchQuestions: string[];
    className: string;
}

const ProjectGoals = ({ title, children, researchQuestions, className }: ProjectGoalsProps) => {
    return (
        <div className="bg-gray-200 py-24 opacity-0 animate-fade-in-down animation-delay-1000">
            <div className="w-[80%] lg:w-[40%] mx-auto">
                <h2 className="mb-4 text-xl md:text-3xl font-bold">{title}</h2>
                <p className="text-base lg:text-lg text-gray-600">{children}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    {researchQuestions.map((question) => (
                        <p key={question} className={classNames("text-base lg:text-lg text-gray-600 border-l-2 pl-4", className)}>
                            {question}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectGoals;
