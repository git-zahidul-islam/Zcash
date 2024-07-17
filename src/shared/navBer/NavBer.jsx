import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBer = () => {
    const {  user,setUser } = useAuth()
    const navigate = useNavigate()
    const [toggle,setToggle] = useState(true)

    const navLink = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/'}>link 1</Link></li>
        <li><Link to={'/'}>Link 2</Link></li>
        <li><Link to={'/other'}>Other</Link></li>
    </>

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/')
        console.log('User logged out');
    }

    return (
        <div className="flex justify-between items-center bg-[#E2136E] p-2">
            {/* logo and balance */}
            <div className="flex gap-5 items-center">
                <div className="w-16 h-16 rounded-full bg-slate-600"></div>
                <div className="flex flex-col gap-2">
                    <input className="w-36 text-black block bg-transparent outline-none border-none" type="text" name="balance" id="balance" defaultValue={user?.user.name} />
                    <input onClick={()=>setToggle(!toggle)}
                    readOnly
                     className={`cursor-pointer p-1 border-[1px] rounded-2xl w-36 ${toggle ? "text-white" : "text-black"} block outline-none border-none`} type="text" name="balance" id="balance" defaultValue={520} />
                </div>
            </div>
            {/* nav */}
            <div className="flex gap-3">
                <button onClick={handleLogout} className="bg-red-300">Logout</button>
                <GiHamburgerMenu size={40}/>
            </div>
        </div>
    );
};

export default NavBer;