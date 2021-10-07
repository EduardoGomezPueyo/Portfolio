interface introChallengesProps {
    challenges: string[];
    children: string;
}

const introChallenges = ({ challenges, children }: introChallengesProps) => {
    return (
        <div className="flex flex-col md:flex-row mt-24 pb-12 gap-16 w-[80%] md:w-[60%] mx-auto opacity-0 animate-fade-in-down animation-delay-1000">
            <div className="w-full md:w-[50%]">
                <h2 className="mb-4 text-xl md:text-2xl font-bold">Project vision</h2>
                <p className="text-base lg:text-lg">{children}</p>
            </div>
            <div className="w-full md:w-[50%]">
                <h2 className="mb-4 text-xl md:text-2xl font-bold">Challenges</h2>
                <ol className="list-decimal list-inside text-base lg:text-lg text-pink-600">
                    {challenges.map((challenge) => (
                        <li className="py-2">
                            <p className="text-black inline">{challenge}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default introChallenges;
