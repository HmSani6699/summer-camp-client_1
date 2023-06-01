import ManuCover from "../Shared/ManuCover/ManuCover";
import orderBannerImg from '../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet";


const Order = () => {
    return (
        <div>
             <Helmet><title>Bistro boss | Order</title></Helmet>
           <ManuCover 
            coberImg={orderBannerImg}
            title='OUR MENU'
            description='Would you like to try a dish'
            titleUpperCatch='titleUpperCatch'
           ></ManuCover>
        </div>
    );
};

export default Order;