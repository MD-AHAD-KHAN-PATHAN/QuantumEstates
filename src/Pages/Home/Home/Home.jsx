import ContactForm from "../ContactForm/ContactForm";
import Header from "../Header/Header";
import LatestProperty from "../LatestProperty/LatestProperty";
import LatestReview from "../LatestReview/LatestReview";
import RealStateAgent from "../RealStateAgent/RealStateAgent";



const Home = () => {
   
    return (
        <div>
            <Header></Header>
            <LatestProperty></LatestProperty>
            <RealStateAgent></RealStateAgent>
            <LatestReview></LatestReview>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;