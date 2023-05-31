import ContactUs from "../../../component/ContactUs/ContactUs";
import PopularManu from "../../PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Manubanner from "../ManuBanner/Manubanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Manubanner></Manubanner>
            <PopularManu></PopularManu>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;