import SocialLogin from "@/components/SocialLogin";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    };
    return (
        <div className="container mx-auto min-h-screen flex items-center">
            <div className="w-[350px] mx-auto bg-white shadow-md rounded-lg p-6">
                <p className="text-center font-bold text-lg mb-6">Login</p>
                <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
                    <input
                        type="email"
                        className="rounded-full border border-gray-300 p-3"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="password"
                        className="rounded-full border border-gray-300 p-3"
                        name="password"
                        placeholder="Password"
                        required
                    />
                    {/* <p className="text-right text-sm text-gray-500 underline cursor-pointer hover:text-black">Forgot Password?</p> */}
                    <button type="submit" className="bg-teal-600 text-white rounded-full p-3 shadow-md active:shadow-none">
                        Log in
                    </button>
                </form>
                <p className="text-xs text-gray-500">
                    Don&apos;t have an account?
                    <Link to="/register" className="ml-1 text-teal-600 font-bold underline">
                        Register
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;
