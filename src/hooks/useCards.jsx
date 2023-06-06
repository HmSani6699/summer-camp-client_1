import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useCards = () => {
    const { user } = useContext(AuthContext)
    // console.log(user);

    const token = localStorage.getItem('access-token')

    const { data: cart, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled:!!user?.email,
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json()
        },

    })

    return [cart, refetch]
}

export default useCards