import ContactUs from "../../../component/ContactUs/ContactUs";
import PopularManu from "../../PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import FoodCards from "../FoodCards/FoodCards";
import Manubanner from "../ManuBanner/Manubanner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Manubanner></Manubanner>
            <PopularManu></PopularManu>
            <ContactUs></ContactUs>
            <FoodCards></FoodCards>
        </div>
    );
};

export default Home;