import FoodCard from "../../../component/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10 p-3">
            {
                items?.map((item, i) => <FoodCard key={i} item={item}></FoodCard>)
            }
        </div>
    );
};

export default OrderTab;