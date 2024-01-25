import Image from "next/image";
import TeamCard from "./TeamCard";
import talentData from "@/data/talent";

const TalentSectionOne = () => {

    return (
        <section id="about" className="pt-16 md:pt-20 lg:pt-28">
            <div className="container">
                <div className="-mx-4 flex flex-wrap justify-center">
                    {/* <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/T1J9LD4/image-03-2.jpg"
                    /> */}
                    {
                        talentData.map((talentItem, index)=> (
                            <TeamCard
                                name={talentItem.name}
                                profession={talentItem.job}
                                imageSrc={talentItem.image}
                                slug={talentItem.slug}
                            />
                        ))
                    }

                    {/* <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/8P6cvVy/image-01-1.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/30tGtjP/image-04.jpg"
                    />
                    <TeamCard
                        name="Coriss Ambady"
                        profession="Web Developer"
                        imageSrc="https://i.ibb.co/yVVT0Dp/image-02-2.jpg"
                    /> */}

                    
                </div>

            </div>
        </section>
    )

}

export default TalentSectionOne