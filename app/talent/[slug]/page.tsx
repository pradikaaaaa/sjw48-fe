import TalentDetail from "@/components/Talent/TalentDetail";


const DetailTalentPage = ({ params }: { params: { slug: string } }) => {
    return (
        <>
            <TalentDetail url={params.slug} />
        </>
    )
}

export default DetailTalentPage;