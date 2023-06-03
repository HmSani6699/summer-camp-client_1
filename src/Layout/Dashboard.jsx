import { FaCalendarAlt, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile max-w-7xl mx-auto" style={{fontFamily:'Cinzel' }}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#D1A054]">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <h2 className="font-bold text-2xl ml-7 pt-8 ">BISTRO BOSS <br />  <small style={{ letterSpacing: '0.38em' }} >Restaurant</small></h2>
                <ul className="menu p-4 w-80" >
                    <li><NavLink to="/dashboard/home"><FaHome></FaHome> User Home</NavLink></li>
                    <li><NavLink to="/dashboard/reservations"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet> Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink></li>
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink to="/menu"> Our Menu</NavLink></li>
                    <li><NavLink to="/order/salad">Order Food</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;