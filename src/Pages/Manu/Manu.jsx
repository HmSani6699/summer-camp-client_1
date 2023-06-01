import { Helmet } from "react-helmet";
import ManuCover from "../Shared/ManuCover/ManuCover";
import PopularManu from "../PopularManu/PopularManu";

import coberImg1 from '../../assets/menu/banner3.jpg';
import coberImg2 from '../../assets/menu/dessert-bg.jpeg';
import coberImg3 from '../../assets/menu/pizza-bg.jpg';
import coberImg4 from '../../assets/menu/salad-bg.jpg';
import coberImg5 from '../../assets/menu/soup-bg.jpg';



const Manu = () => {
    return (
        <div>
            <Helmet><title>Bistro boss | Manu</title></Helmet>

            <ManuCover
                coberImg={coberImg1}
                title='OUR MENU'
                description='Would you like to try a dish'
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
                coberImg={coberImg2}
                title='Desserts'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
                coberImg={coberImg3}
                title='pizza'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
                coberImg={coberImg4}
                title='salads'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
                coberImg={coberImg5}
                title='soups'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Manu;