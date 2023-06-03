import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import useCards from "../../../hooks/useCards";

const MyCart = () => {

    const [cart] = useCards()
    console.log(cart);


    return (
        <div>
            <SectionTitle hedding={'WANNA ADD MORE?'} subHadding={'---My Cart---'}></SectionTitle>

            <div className=" p-10 w-full bg-base-100 shadow-xl border">
                <div className="lg:flex justify-between gap-5">
                    <h2 className="uppercase">Total orders: {cart?.length}</h2>
                    <h2 className="uppercase">total price: ${cart?.length}</h2>
                    <button className="btn btn-sm border-0 bg-[#BB8506]">PAY</button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
