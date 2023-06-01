import { Helmet } from 'react-helmet';
import ManuCover from '../../Shared/ManuCover/ManuCover';

import coberImg1 from '../../../assets/menu/banner3.jpg';
import coberImg2 from '../../../assets/menu/dessert-bg.jpeg';
import coberImg3 from '../../../assets/menu/pizza-bg.jpg';
import coberImg4 from '../../../assets/menu/salad-bg.jpg';
import coberImg5 from '../../../assets/menu/soup-bg.jpg';
import SectionTitle from '../../../component/SectionTitle/SectionTitle';
import ManuCategory from '../ManuCategory/ManuCategory';
import useManu from '../../../hooks/useManu';



const Manu = () => {
    const [manu] = useManu();
    const offered = manu?.filter(item => item.category === 'offered');
    const dessert = manu?.filter(item => item.category === 'dessert');
    const pizza = manu?.filter(item => item.category === 'pizza');
    const salad = manu?.filter(item => item.category === 'salad');
    const soup = manu?.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet><title>Bistro boss | Manu</title></Helmet>
            <ManuCover coverImg={coberImg1} title={'OUR MENU'} description='Would you like to try a dish' titleUpperCatch='titleUpperCatch' ></ManuCover>
            <SectionTitle hedding={'TODAY OFFER'} subHadding={'---Do not miss---'}></SectionTitle>
            {/* Ofered manu */}
            <ManuCategory items={offered} ></ManuCategory>
            {/* dessert manu */}
            <ManuCategory items={dessert} coverImg={coberImg2} subTitle={'Dessert'} title={'dessert'} ></ManuCategory>
            {/* pizza manu */}
            <ManuCategory items={pizza} coverImg={coberImg3} subTitle={'Pizza'} title={'pizza'}></ManuCategory>
            {/* salad manu */}
            <ManuCategory items={salad} coverImg={coberImg4} subTitle={'Salad'} title={'salad'}></ManuCategory>
            {/* soup manu */}
            <ManuCategory items={soup} coverImg={coberImg5} subTitle={'Soup'} title={'soup'}></ManuCategory>
        </div>
    );
};

export default Manu;