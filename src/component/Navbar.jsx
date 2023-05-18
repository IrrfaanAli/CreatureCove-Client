import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                            <Link to={'/'}><button className="m-3">Home</button></Link>
                            <Link to={'/alltoyes'}><button className="m-3"> All Toys</button></Link>
                            <Link to={'/mytoys'}><button className="m-3">My Toys</button></Link>
                            <Link to={'/addtoy'}><button className="m-3">Add Toy</button></Link>
                            <Link to={'/blogs'}><button className="m-3">Blogs</button></Link>

                            
                        </ul>
                    </div>
                    <div>
                        <img src="logo.png" className="w-24  h-24 rounded-full" alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl font-bold">CreatureCove</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link  to={'/'}><button className="m-3 p-7" >Home</button></Link>
                        <Link to={'/alltoyes'}><button className="m-3 p-7"> All Toys</button></Link>
                        <Link to={'/mytoys'}><button className="m-3 p-7">My Toys</button></Link>
                        <Link to={'/addtoy'}><button className="m-3 p-7">Add Toye</button></Link>
                        <Link to={'/blogs'}><button className="m-3 p-7">Blogs</button></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                <Link to={'/login'}><button className="m-3 p-7">Log In</button></Link>
                <Link to={'/logout'}><button className="m-3 p-7">Log Out</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;