import SocialLogin from "@/components/SocialLogin";
import useAuth from "@/hooks/useAuth";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const { signUp, updateUser } = useAuth();
    const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const userInfo = {
            name,
            email,
            photo,
            password,
        };
        console.log(userInfo);
        signUp(email, password)
            .then((res) => {
                console.log(res.user);
                if (res.user) {
                    updateUser(name, photo)
                        .then(() => {
                            toast.success("Register and Logged in successfully!");
                            navigate("/");
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            })
            .catch((error) => {
                toast.error("Something went wrong!");
                console.log(error);
            });
    };
    return (
        <div className="container mx-auto min-h-screen flex items-center">
            <div className="w-[350px] mx-auto bg-white shadow-md rounded-lg p-6">
                <p className="text-center font-bold text-lg mb-6">Register</p>
                <form onSubmit={handleRegister} className="flex flex-col gap-4 mb-4">
                    <input
                        type="text"
                        className="rounded-full border border-gray-300 p-3"
                        name="name"
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        className="rounded-full border border-gray-300 p-3"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        type="url"
                        className="rounded-full border border-gray-300 p-3"
                        name="photo"
                        placeholder="Photo URL"
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
                        Register
                    </button>
                </form>
                <p className="text-xs text-gray-500">
                    Already have an account?
                    <Link to="/login" className="ml-1 text-teal-600 font-bold underline">
                        Login
                    </Link>
                </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;
