import ManuCover from "../Shared/ManuCover/ManuCover";
import orderBannerImg from '../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useManu from "../../hooks/useManu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {
    const categories = ['salad','pizza','soup','dessert','drinks']
    const {category} = useParams()
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [activ, setActiv] = useState(category);
    const [manu] = useManu();
    const drinks = manu?.filter(item => item.category === 'drinks');
    const dessert = manu?.filter(item => item.category === 'dessert');
    const pizza = manu?.filter(item => item.category === 'pizza');
    const salad = manu?.filter(item => item.category === 'salad');
    const soup = manu?.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet><title>Bistro boss | Order Food</title></Helmet>
            <ManuCover
                coverImg={orderBannerImg}
                title='OUR MENU'
                description='Would you like to try a dish'
                titleUpperCatch='titleUpperCatch'
            ></ManuCover>

            <Tabs className='mb-20 mt-24' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center mb-4 font-semibold'>
                    <Tab>
                        <button className={activ==='salad'?'text-yellow-600  border-0 border-b-4 border-yellow-500':''} onClick={()=>setActiv('salad')}>Salat</button>
                    </Tab>
                    <Tab>
                        <button className={activ==='pizza'?'text-yellow-600  border-0 border-b-4 border-yellow-500':''} onClick={()=>setActiv('pizza')}>Pizza</button>
                    </Tab>
                    <Tab>
                        <button className={activ==='soup'?'text-yellow-600  border-0 border-b-4 border-yellow-500':''} onClick={()=>setActiv('soup')}>Soup</button>
                    </Tab>
                    <Tab>
                        <button className={activ==='dessert'?'text-yellow-600  border-0 border-b-4 border-yellow-500':''} onClick={()=>setActiv('dessert')}>Dessert</button>
                    </Tab>
                    {/* <Tab>
                        <button className={activ==='drink'?'text-yellow-600  border-0 border-b-4 border-yellow-500':''} onClick={()=>setActiv('drink')}>Drinks</button>
                    </Tab> */}
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;