import { FaTrashAlt } from "react-icons/fa";
import useCards from "../../../hooks/useCards";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyCart = () => {

    const [cart,refetch] = useCards();

    const sum = cart?.reduce((a, b) => a + b?.price, 0)



    const handlaCartDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-server-hmsani6699.vercel.app/cards/${id}`, {
                    method: "DELETE"
                })
                    .then(res => {
                        console.log(res);
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your item has been deleted.',
                            'success'
                        )
                    })
                    .catch(error => console.log(error))
            }
        })


    }


    return (
        <div className="h-screen">
             <Helmet><title>Bistro boss | My card</title></Helmet>
            <SectionTitle hedding={'WANNA ADD MORE?'} subHadding={'---My Cart---'}></SectionTitle>
            <div className="w-[700px] p-7 bg-[#cccccc1f]">
                <div className="lg:flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold uppercase">Total orders: {cart?.length}</h2>
                    <h2 className="text-2xl font-bold uppercase">total price: ${sum}</h2>
                    <button className="btn btn-sm bg-[#D1A054] border-0">PAY</button>
                </div>
                <table className="table lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#D1A054] text-white"> #</th>
                            <th className="bg-[#D1A054] text-white">ITEM IMAGE</th>
                            <th className="bg-[#D1A054] text-white">ITEM NAME</th>
                            <th className="bg-[#D1A054] text-white">PRICE</th>
                            <th className="bg-[#D1A054] text-white">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item, i) => <tr key={item._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td><h2 className="font-semibold">{item.name}</h2></td>
                                <td><p className="text-end">${item.price}</p></td>
                                <th>
                                    <button onClick={() => handlaCartDelete(item._id)} className="btn btn-circle h-3 bg-red-800 text-white">
                                        <FaTrashAlt></FaTrashAlt>
                                    </button>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )

};

export default MyCart;
