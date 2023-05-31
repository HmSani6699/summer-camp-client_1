
const Navber = () => {

    const navLink = <>
        <li><a>Home</a></li>
        <li><a>DASHBOARD</a></li>
        <li><a>Our Menu</a></li>
        <li><a>Our Shop</a></li>
    </>

    return (
        <div>
            <div className="navbar fixed z-10 max-w-7xl mx-auto  text-white bg-black bg-opacity-30">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <span><h2 className="font-bold text-2xl">BISTRO BOSS</h2><p className="">Restaurant</p></span>
                </div>
                <div className="navbar-end  w-full">
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navber;