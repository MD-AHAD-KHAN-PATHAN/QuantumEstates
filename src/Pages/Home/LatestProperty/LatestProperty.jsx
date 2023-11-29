import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LatestCard from "../LatestCard/LatestCard";
import useAdvertise from "../../../Hooks/useAdvertise";

const LatestProperty = () => {

    // advertise data collections hooks;
    const [advertise] = useAdvertise();

    return (

        <div>
            <SectionTitle heading="Latest Properties" subHeading="hese are the latest properties in the Sales category. You can create the list using the “latest listing shortcode” and show items by specific categories."></SectionTitle>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 lg:mx-20 md:mx-10 mx-6">
                {
                    advertise.map(item => <LatestCard key={item?._id} item={item}></LatestCard>)
                }
            </div>
        </div>

    );
};

export default LatestProperty;