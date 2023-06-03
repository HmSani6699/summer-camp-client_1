import { FaCalendarAlt, FaEnvelope, FaHome, FaShoppingBag, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import useCards from "../hooks/useCards";


const Dashboard = () => {

    const [cart] = useCards()

    return (

        <div className="max-w-7xl mx-auto">
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-20">
                    <Outlet></Outlet>
                    <div className="flex w-screen flex-col items-center justify-center"> <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label></div>

                </div>
                <div className="drawer-side bg-[#D1A054]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                    <ul className="menu p-4 w-80">

                        <h2 className="font-bold text-2xl lg:ml-4  ">BISTRO BOSS</h2>
                        <small className="lg:ml-4 lg:mb-10" style={{ letterSpacing: '0.38em' }} >Restaurant</small>

                        <li><NavLink to=""><FaHome></FaHome> User Home</NavLink></li>
                        <li><NavLink to=""><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                        <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                        <li>
                            <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge inl badge-secondary">+{cart?.length || 0}</span>
                            </NavLink>

                        </li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                        <li><NavLink to="/manu"><CgMenu></CgMenu> Our Menu</NavLink></li>
                        <li><NavLink to="/order/salad"><FaShoppingBag></FaShoppingBag> Order Food</NavLink></li>
                        <li><NavLink to="/"><FaEnvelope></FaEnvelope>Contact</NavLink></li>
                    </ul>

                </div>
            </div>
        </div>

    );
};

export default Dashboard;