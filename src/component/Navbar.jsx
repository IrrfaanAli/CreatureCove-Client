import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isHovering, setIsHovering] = useState(false);
    console.log(user);

    const handleLogOut = () => {
        logout()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
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
                            <Link to={'/alltoys'}><button className="m-3"> All Toys</button></Link>
                           
                            {user && <Link to={'/mytoys'}><button className="m-3 p-5 text-xl font-semibold">My Toys</button></Link> }
                            <Link to={'/addtoy'}><button className="m-3">Add Toy</button></Link>
                            <Link to={'/blogs'}><button className="m-3">Blogs</button></Link>


                        </ul>
                    </div>
                    <div>
                        <img src="/logo.png" className="w-24  h-24 rounded-full" alt="" />
                    </div>
                    <a className="btn btn-ghost normal-case text-4xl font-bold text-rose-500">CreatureCove</a>
                </div>
                <div className="navbar-center hidden lg:flex" >
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/'}><button className="m-3 p-5 text-xl font-semibold" >Home</button></Link>
                        <Link to={'/alltoys'}><button className="m-3 p-5  text-xl font-semibold"> All Toys</button></Link>
                        {user && <Link to={'/mytoys'}><button className="m-3 p-5 text-xl font-semibold">My Toys</button></Link> }
                        
                        <Link to={'/addtoy'}><button className="m-3 p-5 text-xl font-semibold">Add Toye</button></Link>
                        <Link to={'/blogs'}><button className="m-3 p-5 text-xl font-semibold">Blogs</button></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                
                    {user ? (
                        
                        <div
                            className="relative cursor-pointer"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='flex gap-2'>
                                <img className='rounded-full w-12 h-12 ' src={user.photoURL} alt="" />

                                <button onClick={handleLogOut} className='bg-rose-500 text-white p-3 rounded'>LogOut</button>
                            </div>

                            {isHovering && (
                                <div className="absolute transform -translate-x-1/2 bg-white shadow-lg rounded-lg py-2 px-4">
                                    <p className="text-gray-800">{user.displayName}</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to={'/login'}><button className='bg-rose-500 text-white p-3 rounded'>LogIn</button></Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;