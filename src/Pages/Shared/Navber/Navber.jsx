import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { AuthContext } from "../../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useCards from "../../../hooks/useCards";

const Navber = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const [cart] = useCards();

    const handleLogOutUser = () => {
        logOutUser()
        Swal.fire({
            icon: 'success',
            title: 'Log out Success full !!',
        })
    }

    const navLink = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/manu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>

        <li><Link to='dashboard/home'>
            <button className="btn bg-[#ccc] border-0 border-b-4 border-[#BB8506]">
                <FaShoppingCart className="text-2xl"></FaShoppingCart>
                <div className="badge ml-1 badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {
            user ? <li ><button onClick={handleLogOutUser}>Log Out</button> </li> :
                <li><Link to='/login'>Login</Link></li>
        }
    </>

    return (
        <div>
            <div className="navbar fixed z-10 max-w-7xl mx-auto  text-white bg-black bg-opacity-30">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <span><h2 className="font-bold text-2xl ">BISTRO BOSS</h2><p style={{ letterSpacing: '0.38em' }} className="tracking-wider">Restaurant</p></span>
                </div>
                <div className="ml-auto">
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                </div>
                {
                    user && <div className="avatar">
                        <div className="w-14 border-4 rounded-full">
                            <img title={user?.displayName} src={user?.photoURL} />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navber;