import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const NavBer = () => {
    const { logout, user } = useAuth()

    const handleLogout = () => {
        logout()
            .then(() => console.log("successfully logout"))
            .catch(error => console.error(error))
    }

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>link 1</Link></li>
        <li><Link to={'/'}>Link 2</Link></li>
        <li><Link to={'/other'}>Other</Link></li>
    </>

    return (
        <div className="navbar fixed z-10 bg-black bg-opacity-20 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to={'/'} className="text-2xl font-bold">All React Template</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <details className="dropdown relative">
                            <summary className="">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={`${user?.photoURL}`} />
                                    </div>
                                </div>
                            </summary>
                            <ul className="menu dropdown-content z-[1] bg-base-100 absolute -left-20 w-32">
                                <li><a>Item 1</a></li>
                                <li><button className="btn" onClick={handleLogout}>Logout</button></li>
                            </ul>
                        </details>
                        // <button onClick={handleLogout}>logout</button>
                        :
                        <button className="p-2 bg-gray-300 text-base font-semibold"><Link to={'sign-in'}>Login</Link></button>
                }
            </div>
        </div>
    );
};

export default NavBer;