import ManuCover from "../Shared/ManuCover/ManuCover";
import orderBannerImg from '../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useManu from "../../hooks/useManu";
import OrderTab from "./OrderTab/OrderTab";


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const [manu] = useManu();
    const drinks = manu?.filter(item => item.category === 'drinks');
    const dessert = manu?.filter(item => item.category === 'dessert');
    const pizza = manu?.filter(item => item.category === 'pizza');
    const salad = manu?.filter(item => item.category === 'salad');
    const soup = manu?.filter(item => item.category === 'soup');

    return (
        <div>
            <Helmet><title>Bistro boss | Order</title></Helmet>
            <ManuCover
                coberImg={orderBannerImg}
                title='OUR MENU'
                description='Would you like to try a dish'
                titleUpperCatch='titleUpperCatch'
            ></ManuCover>

            <Tabs className='mb-20' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList className='text-center'>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
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