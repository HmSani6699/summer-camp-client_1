
const FoodCard = ({item}) => {
    const { name, image,recipe,price } = item;
    return (
        <div className="card w-full  bg-base-100 shadow-xl border">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <p className="bg-yellow-700 text-white py-2 rounded-tr-lg rounded-bl-lg px-4 absolute right-0 mt-4  mr-4">${price}</p>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end mt-3">
                    <button className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;