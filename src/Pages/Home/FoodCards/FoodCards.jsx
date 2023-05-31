import { useEffect, useState } from "react";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import FoodCard from "./FoodCard";

const FoodCards = () => {
    const [foodItms, setFoodItms] = useState()

    useEffect(() => {
        fetch('manu.json')
            .then(res => res.json())
            .then(data => {
                const popularManuItems = data.filter(item => item.category === 'popular');
                setFoodItms(popularManuItems.slice(1,4))
            })
    }, []);
    return (
        <div className="max-w-6xl mx-auto">
            <SectionTitle
            hedding={'CHEF RECOMMENDS'}
            subHadding={'---Foods items---'}
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mb-20 mt-10 gap-6">
                {
                    foodItms?.map(item=><FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodCards;