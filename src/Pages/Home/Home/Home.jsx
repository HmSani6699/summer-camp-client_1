import ContactUs from "../../../component/ContactUs/ContactUs";
import PopularManu from "../../PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
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
            <Featured></Featured>
        </div>
    );
};

export default Home;