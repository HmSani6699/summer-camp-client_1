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
    const [manu]= useManu();
    const offered = manu?.filter(item=>item.category==='offered');
    const dessert = manu?.filter(item=>item.category==='dessert');
    const pizza = manu?.filter(item=>item.category==='pizza');
    const salad = manu?.filter(item=>item.category==='salad');
    const soup = manu?.filter(item=>item.category==='soup');

    return (
        <div>
            <Helmet><title>Bistro boss | Manu</title></Helmet>
            {/* Main  Manu */}
            <ManuCover
                coberImg={coberImg1}
                title='OUR MENU'
                description='Would you like to try a dish'
            ></ManuCover>
            <SectionTitle
                hedding={'TODAYS OFFER'}
                subHadding={'---Do not miss---'}
            ></SectionTitle>
            <div className='my-24'>
                {/* Offerd manu */}
                <ManuCategory offered={offered}></ManuCategory>
                <div className='flex justify-center'>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* Desserts  Manu cover*/}
            <ManuCover
                coberImg={coberImg2}
                title='Desserts'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <div className='my-24'>
                {/* Desserts  Manu */}
                <ManuCategory offered={dessert}></ManuCategory>
                <div className='flex justify-center'>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* Pizza  Manu */}
            <ManuCover
                coberImg={coberImg3}
                title='pizza'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <div className='my-24'>
            <ManuCategory offered={pizza}></ManuCategory>
                <div className='flex justify-center'>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* Salads  Manu */}
            <ManuCover
                coberImg={coberImg4}
                title='salads'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <div className='my-24'>
            <ManuCategory offered={salad}></ManuCategory>
                <div className='flex justify-center'>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>

            {/* Soups  Manu */}
            <ManuCover
                coberImg={coberImg5}
                title='soups'
                description='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            ></ManuCover>
            <div className='my-24'>
            <ManuCategory offered={soup}></ManuCategory>
                <div className='flex justify-center'>
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">ORDER YOUR FAVOURITE FOOD</button>
                </div>
            </div>
        </div>
    );
};

export default Manu;