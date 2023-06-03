import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider"

const useCards=()=>{
    const{user}=useContext(AuthContext)

}

export default useCards