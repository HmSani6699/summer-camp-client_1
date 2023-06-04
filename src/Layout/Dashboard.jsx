import { FaBook, FaCalendarAlt, FaEnvelope, FaHome, FaListUl, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import useCards from "../hooks/useCards";


const Dashboard = () => {

    const [cart] = useCards();


    //TODO: load the server in admin data
    const isAdmin = true;

    return (


        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex  items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80">
                    <h2 className="font-bold text-2xl lg:ml-4  mt-5">BISTRO BOSS</h2>
                    <small className="lg:ml-4 lg:mb-10" style={{ letterSpacing: '0.38em' }} >Restaurant</small>

                    {
                        isAdmin ? <>
                         <li><NavLink to=""><FaHome></FaHome> ADMIN HOME</NavLink></li>
                            <li><NavLink to=""><FaUtensils></FaUtensils> ADD ITEMS</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaListUl></FaListUl> MANAGE ITEMS</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> MANAGE BOOKING</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> ALL USERS</NavLink></li>
                            
                        </> : <>
                            <li><NavLink to=""><FaHome></FaHome> User Home</NavLink></li>
                            <li><NavLink to=""><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                    <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                                </NavLink>

                            </li>
                        </>
                    }
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/manu"><CgMenu></CgMenu> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                    <li><NavLink to="/"><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashboard;