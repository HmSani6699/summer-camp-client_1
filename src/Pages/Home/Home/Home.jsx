import ContactUs from "../../../component/ContactUs/ContactUs";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import PopularManu from "../../PopularManu/PopularManu";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import FoodCards from "../FoodCards/FoodCards";
import Manubanner from "../ManuBanner/Manubanner";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        <div>
            <Helmet><title>Foods web | Home</title></Helmet>
            <Banner></Banner>
            <Category></Category>
            <Manubanner></Manubanner>
            <SectionTitle
                hedding={'FROM OUR MENU'}
                subHadding={'---Popular items---'}
            ></SectionTitle>
            <PopularManu></PopularManu>
            <ContactUs></ContactUs>
            <FoodCards></FoodCards>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;