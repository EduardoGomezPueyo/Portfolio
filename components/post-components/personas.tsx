import Image from "next/image";

interface PersonaProps {
    name: string;
    age: string;
    occupation: string;
    description: string;
    image: string;
}

interface PersonasItemProps {
    personas: PersonaProps[];
}

const Personas = ({ personas }: PersonasItemProps) => {
    return (
        <div className="text-left bg-gray-200 py-24">
            <h2 className="w-[40%] mx-auto mb-10 text-xl md:text-3xl text-center font-bold">Meet the users</h2>
            <div className="w-[80%] md:w-[60%] mx-auto flex flex-col lg:flex-row gap-8 md:gap-4 justify-around">
                {personas.map((persona) => (
                    <div className="w-full lg:w-[40%] border-l-4 pl-4 border-pink-600">
                        <div className="flex flex-row items-center gap-8 text-base md:text-lg">
                            <Image src={persona.image} width={181} height={132} alt="Persona Image" />
                            <div>
                                <p>Name: {persona.name}</p>
                                <p>Age: {persona.age}</p>
                                <p>Occupation: {persona.occupation}</p>
                            </div>
                        </div>
                        <div className="text-base md:text-lg pt-4">{persona.description}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Personas;
