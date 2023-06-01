import ManuCover from "../Shared/ManuCover/ManuCover";
import orderBannerImg from '../../assets/shop/banner2.jpg'
import { Helmet } from "react-helmet";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Order = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex);

    
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
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
                <TabPanel></TabPanel>
            </Tabs>

        </div>
    );
};

export default Order;