import {Helmet} from "react-helmet";
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
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
            coberImg={coberImg2}
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
            coberImg={coberImg3}
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
            coberImg={coberImg4}
            ></ManuCover>
            <PopularManu></PopularManu>

            <ManuCover
            coberImg={coberImg5}
            ></ManuCover>
            <PopularManu></PopularManu>
        </div>
    );
};

export default Manu;