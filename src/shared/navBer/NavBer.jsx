import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { GiHamburgerMenu } from "react-icons/gi";

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
        <div className="flex justify-between items-center bg-[#E2136E] p-2 text-white">
            {/* logo and balance */}
            <div className="flex gap-5 items-center">
                <div className="w-12 h-12 rounded-full bg-slate-600"></div>
                <div>
                    <input className="p-1 border-[1px] rounded-2xl w-36 text-black" type="text" name="balance" id="balance" defaultValue={user?.name} />
                </div>
            </div>
            {/* nav */}
            <div>
                <GiHamburgerMenu size={40}/>
            </div>
        </div>
    );
};

export default NavBer;