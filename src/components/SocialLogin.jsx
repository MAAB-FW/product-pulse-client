import useAuth from "@/hooks/useAuth";
import React from "react";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const { googleLogin } = useAuth();
    const navigate = useNavigate();
    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res.user);
                if (res.user) {
                    toast.success("Logged in successfully!");
                    return navigate("/");
                }
            })
            .catch((error) => {
                toast.error("Something went wrong!");
                console.log(error);
            });
    };
    return (
        <div className="flex flex-col gap-4 mt-5">
            <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center border border-gray-400 rounded-full p-3 shadow-md space-x-2"
            >
                <FcGoogle className="text-xl"></FcGoogle>
                <p> Log in with Google</p>
            </button>
        </div>
    );
};

export default SocialLogin;
