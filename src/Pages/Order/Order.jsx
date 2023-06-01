import ManuCover from "../Shared/ManuCover/ManuCover";
import orderBannerImg from '../../assets/shop/banner2.jpg'


const Order = () => {
    return (
        <div>
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