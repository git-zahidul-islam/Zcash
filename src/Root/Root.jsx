import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";



const Root = () => {
    return (
        <div className="w-full">
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;