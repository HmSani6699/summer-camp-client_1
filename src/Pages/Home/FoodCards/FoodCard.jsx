
const FoodCard = ({ item }) => {
    const { name, image,recipe } = item;
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end mt-3">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;