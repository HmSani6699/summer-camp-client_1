import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"
import { useQuery } from "@tanstack/react-query"

const useCards=()=>{
    const{user}=useContext(AuthContext)
    const { data:cart } = useQuery({
        queryKey: ['films'],
        queryFn: async () =>{
            const res= await fetch(`http://localhost:5000/cards?email=${user?.email}`);
            res.send(res)
        }
      })

      return[cart]
}

export default useCards