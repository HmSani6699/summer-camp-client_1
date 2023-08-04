import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useCards from "../../hooks/useCards";

const FoodCard = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const [, refetch] = useCards();

    const handleShoppingCart = item => {
        console.log(item);
        const orderItem = { menuItemId: _id, name, image, price, recipe, email: user?.email }


        if (user && user?.email) {
            fetch('https://bistro-server-hmsani6699.vercel.app//cards', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);

                    if (data?.insertedId) {
                        refetch() // Refatch the cart number in items to cart number
                        Swal.fire({
                            icon: 'success',
                            title: 'Card add success full !!',
                        })
                    }

                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Please login!',
                    )
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card w-full  bg-base-100 shadow-xl border">
            <figure><img className="w-full" src={image} alt="Shoes" /></figure>
            <p className="bg-yellow-700 text-white py-2 rounded-tr-lg rounded-bl-lg px-4 absolute right-0 mt-4  mr-4">${price}</p>
            <div className="card-body text-center items-center">
                <h2 className="card-title text-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end mt-3">
                    <button onClick={() => handleShoppingCart(item)} className="btn bg-[#E8E8E8] text-[#BB8506] border-0 border-b-4 border-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;