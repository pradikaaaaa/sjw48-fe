import Breadcrumb from "@/components/Common/Breadcrumb"
import TalentSectionOne from "@/components/Talent/TalentSectionOne";

const TalentPage = () => {
    return (
        <>
            <Breadcrumb 
                pageName="Talent"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
            />
            <TalentSectionOne />
        </>
    );
};

export default TalentPage;