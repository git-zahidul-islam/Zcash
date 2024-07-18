import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../home/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signup/SignUp";
import PrivateRoute from "./PrivateRoute";
import ServicePage from "../pages/servicePage/ServicePage";
import SendMoney from "../components/SendMoney";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/sign-in',
                element: <SignIn></SignIn>
            },
            {
                path: '/service-page',
                element: <ServicePage/>
            },
            {
                path: '/send-money',
                element: <SendMoney/>
            },
            {
                path: '/other',
                element: <PrivateRoute></PrivateRoute>
            }
        ],

    },
]);