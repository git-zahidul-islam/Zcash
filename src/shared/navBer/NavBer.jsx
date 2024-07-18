import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const NavBer = () => {
    const { user, setUser } = useAuth();
    const navigate = useNavigate();
    const [toggle, setToggle] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
        console.log('User logged out');
    }

    return (
        <div className="relative">
            <div className="flex justify-between items-center bg-[#E2136E] p-2">
                {/* logo and balance */}
                <div className="flex gap-5 items-center">
                    <div className="w-16 h-16 rounded-full bg-slate-600"></div>
                    <div className="flex flex-col gap-2">
                        <input className="w-36 text-black block bg-transparent outline-none border-none" type="text" name="balance" id="balance" defaultValue={user?.user.name} />
                        <input 
                            onClick={() => setToggle(!toggle)}
                            readOnly
                            className={`cursor-pointer p-1 border-[1px] rounded-2xl w-36 ${toggle ? "text-white" : "text-black"} block outline-none border-none`} 
                            type="text" 
                            name="balance" 
                            id="balance" 
                            defaultValue={520} 
                        />
                    </div>
                </div>
                {/* nav */}
                <div className="flex gap-3">
                    <GiHamburgerMenu size={40} onClick={() => setShowSidebar(!showSidebar)} />
                </div>
            </div>

            {/* Sidebar menu */}
            {showSidebar && (
                <div className="absolute top-0 right-0 min-h-screen w-64 bg-[#E2136E] border-[1px] border-black/75 shadow-lg z-50 p-4">
                    <div className="flex justify-between items-center mb-4 text-white">
                        <h2 className="text-xl font-bold">Menu</h2>
                        <button onClick={() => setShowSidebar(false)} className="text-2xl"><ImCross/></button>
                    </div>
                    <ul>
                        <li className="mb-2 bg-red-400 text-black p-3 w-full">
                            <Link to="#" onClick={() => setShowSidebar(false)}>Transaction</Link>
                        </li>
                        <li className="mb-2 bg-red-400 text-black p-3 w-full">
                        <button onClick={handleLogout}>Logout</button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavBer;
