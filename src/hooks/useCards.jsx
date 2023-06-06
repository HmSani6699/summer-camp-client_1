
import { useQuery } from "@tanstack/react-query"
import useAxiosSecure from "./useAxiosSecure"
import useAuth from "./useAuth"

const useCards = () => {
    const { user,loding } = useAuth();
    // console.log(user);

    // const token = localStorage.getItem('access-token')

    const [axiosSecure] = useAxiosSecure();

    const { data: cart, refetch } = useQuery({
    //     queryKey: ['carts', user?.email],
    //     enabled:!!user?.email,
    //     queryFn: async () => {
    //         const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${token}`
    //             }
    //         });
    //         return res.json()
    //     },

        // enabled: !!user?.email,
        enabled:!loding && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
            const res = await axiosSecure(`/carts?email=${user?.email}`);
            console.log(res);
            return res.data
        },

    })

    return [cart, refetch]
}

export default useCards