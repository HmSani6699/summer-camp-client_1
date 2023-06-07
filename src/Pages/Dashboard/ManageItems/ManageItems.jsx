import { FaTrashAlt } from "react-icons/fa";
import useManu from '../../../hooks/useManu';
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";


const ManageItems = () => {
    const [axiosSecure] = useAxiosSecure();
const [menu, , refetch]=useManu()
console.log(menu.length);

    const handleDelete = item => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                        console.log(res);
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })

            }
        })
    }

    return (
        <div className="h-screen">
        <Helmet><title>Bistro boss | Manage Item</title></Helmet>
       <SectionTitle hedding={'WANNA ADD MORE?'} subHadding={'---My Cart---'}></SectionTitle>
       <div className="w-[700px] p-7 bg-[#cccccc1f]">
           <div className="lg:flex items-center justify-between mb-8">
               <h2 className="text-2xl font-bold uppercase">Total orders: {menu?.length}</h2>
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
                       menu?.map((item, i) => <tr key={item._id}>
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
                               <button onClick={() => handleDelete(item)} className="btn btn-circle h-3 bg-red-800 text-white">
                                   <FaTrashAlt></FaTrashAlt>
                               </button>
                           </th>
                       </tr>)
                   }

               </tbody>

           </table>
       </div>
   </div>
    );
};

export default ManageItems;