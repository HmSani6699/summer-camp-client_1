import useCards from "../../../hooks/useCards";

const MyCart = () => {

    const [cart] = useCards()
    console.log(cart);

    
    return (
        <div>
            <h2>this is may cart</h2>
        </div>
    );
};

export default MyCart;