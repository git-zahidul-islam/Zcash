import { Outlet } from "react-router-dom";
import NavBer from "../shared/navBer/NavBer";



const Root = () => {
    return (
        <div className="lg:w-[60%] md:w-[60%] w-full mx-auto">
            {/* <NavBer></NavBer> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;