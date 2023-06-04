import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import SectionTitle from "../../../component/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";

const AllUsers = () => {

    const { data: users } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const result = await fetch('http://localhost:5000/users');
            return result.json()
        }
    })


    // UPDATE THE USER
    const handleMackAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div className="h-screen">
            {/*  SECTION TITLE IN IFREME  */}
            <Helmet><title>Bistro boss | All users</title></Helmet>
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
                                        user.rol === 'admin' ? 'Admin' : <button onClick={() => handleMackAdmin(user)} className="btn btn-circle h-3 bg-[#D1A054] text-white">
                                            <FaUsers className="text-2xl"></FaUsers>
                                        </button>
                                    }
                                </th>
                                <th>
                                    <button className="btn btn-circle h-3 bg-red-800 text-white">
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