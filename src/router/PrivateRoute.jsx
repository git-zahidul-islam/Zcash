import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoute = ({ children }) => {

    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(user);

    if (loading) {
        return <span className="loading loading-bars loading-xs"></span>;
    }

    if (user) {
        return children;
    }

    return <Navigate to="/sign-in" state={{ from: location }} replace />;
};

export default PrivateRoute;
