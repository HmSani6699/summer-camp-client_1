import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
const [axiosSecure]=useAxiosSecure()

    const { data: users, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await axiosSecure.get('/users');
            return result.data
        }
    })


    // UPDATE THE USER
    const handleMackAdmin = user => {
        fetch(`https://bistro-server-hmsani6699.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        icon: 'success',
                        title: `${user.name} add to  an admin`,
                    })
                }
            })
    }


    // DELETE USER
    const handleDeleteUser = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bistro-server-hmsani6699.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }


    return (
        <div className="h-screen">
            {/*  SECTION TITLE IN IFREME  */}
            <Helmet><title>Foods web | All users</title></Helmet>
            {/*  SECTION TITLE  */}
            <SectionTitle hedding={'MANAGE ALL USERS'} subHadding={'---How many??---'}></SectionTitle>
            {/* ALL USERS  */}
            <div className="w-[700px] p-7 bg-[#cccccc1f]">
                <h2 className="text-2xl font-bold mb-6 uppercase">Total Users: {users?.length}</h2>
                <table className="table lg:w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="bg-[#D1A054] text-white"> #</th>
                            <th className="bg-[#D1A054] text-white">NAME</th>
                            <th className="bg-[#D1A054] text-white">EMAIL</th>
                            <th className="bg-[#D1A054] text-white">ROLE</th>
                            <th className="bg-[#D1A054] text-white">ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td><h2 className="font-semibold">{user.name}</h2></td>
                                <td><h2 >{user.email}</h2></td>
                                <th>
                                    {
                                        user.rol === 'admin' ? <h2 className="text-[#D1A054] font-semibold">Admin</h2> : <button onClick={() => handleMackAdmin(user)} className="btn btn-circle h-3 bg-[#D1A054] text-white">
                                            <FaUsers className="text-2xl"></FaUsers>
                                        </button>
                                    }
                                </th>
                                <th>
                                    <button onClick={() => handleDeleteUser(user._id)} className="btn btn-circle h-3 bg-red-800 text-white">
                                        <FaTrashAlt className="text-1xl"></FaTrashAlt>
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

export default AllUsers;