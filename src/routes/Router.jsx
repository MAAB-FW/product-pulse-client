import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import ContactUs from "@/pages/ContactUs";
import About from "@/pages/About";
import PrivateRoute from "./PrivateRoute";
import Home from "@/pages/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <PrivateRoute>
                <App></App>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/contactUs",
                element: (
                    <PrivateRoute>
                        <ContactUs></ContactUs>
                    </PrivateRoute>
                ),
            },
            {
                path: "/about",
                element: (
                    <PrivateRoute>
                        <About></About>
                    </PrivateRoute>
                ),
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
]);
