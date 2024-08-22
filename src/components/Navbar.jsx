import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { logout, user } = useAuth();
    const navLinks = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Contact Us",
            path: "/contactUs",
        },
        {
            name: "About",
            path: "/about",
        },
    ];
    // const uls = (
    //     <>
    //         {navLinks.map(({ name, path }) => (
    //             <NavLink to={path} key={path} className={`text-nowrap`}>
    //                 {name}
    //             </NavLink>
    //         ))}
    //         <button className="bg-red-600" onClick={() => logout()}>
    //             Logout
    //         </button>
    //     </>
    // );
    return (
        <>
            <nav className="bg-gray-800 shadow-md mb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img className="h-8 w-8" src="/logo.png" alt="Logo" />
                            </div>
                        </div>
                        <div className="hidden md:flex items-center justify-center ">
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    {navLinks.map(({ name, path }) => (
                                        <NavLink
                                            to={path}
                                            key={path}
                                            className={({ isActive }) =>
                                                `text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium ${
                                                    isActive ? "bg-gray-900 text-white" : ""
                                                }`
                                            }
                                        >
                                            {name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                            <div className="ml-4 flex items-center md:ml-6">
                                <button
                                    className="bg-red-600 px-3 py-2 rounded-md text-sm font-medium text-white"
                                    onClick={() => logout()}
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                type="button"
                                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                                onClick={() => setMenu(!menu)}
                            >
                                <span className="sr-only">Open main menu</span>
                                {!menu ? (
                                    <TfiMenu className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <RxCross2 className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </button>
                        </div>
                    </div>
                    {menu && (
                        <div className="md:hidden" id="mobile-menu">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navLinks.map(({ name, path }) => (
                                    <NavLink
                                        to={path}
                                        key={path}
                                        onClick={() => setMenu(false)}
                                        className={({ isActive }) =>
                                            `block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white ${
                                                isActive ? "bg-gray-900 text-white" : ""
                                            }`
                                        }
                                    >
                                        {name}
                                    </NavLink>
                                ))}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5">
                                    <div className="ml-3">
                                        {/* <div className="text-base font-medium text-white">Tom Cook</div> */}
                                        <div className="text-sm font-medium text-gray-400">{user?.email}</div>
                                    </div>
                                    <button
                                        className="ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                        onClick={() => logout()}
                                    >
                                        {/* <span className="sr-only">View notifications</span> */}
                                        <svg
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                {/* <div className="mt-3 px-2 space-y-1">
                                    <a
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                        onClick={() => logout()}
                                    >
                                        Sign out
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    )}
                </div>
            </nav>
            {/* <div className="bg-[#1e40af] mb-10 w-full text-white py-2 md:py-0 relative">
                <div className="flex items-center justify-between container mx-auto ">
                    <div className="flex items-center justify-center gap-3">
                        <img alt="logo" src={"/logo.png"} className="size-9 md:size-[61px]" />
                        <p className="flex gap-2 text-xl md:text-4xl font-bold">
                            Product<span className="text-[#bb84e8]">Pulse</span>
                        </p>
                    </div>
                    <ul className="md:flex hidden *:px-5 *:py-5 text-lg font-semibold">{uls}</ul>
                    <div onClick={() => setMenu(!menu)} className="inline md:hidden cursor-pointer">
                        <div>{!menu ? <TfiMenu className="size-6" /> : <RxCross2 className="size-6" />}</div>
                        {menu && (
                            <ul className="md:hidden flex flex-col right-0 absolute *:px-3 *:py-3 text-lg font-semibold bg-[#1e40af] shadow-md rounded-b">
                                {uls}
                            </ul>
                        )}
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Navbar;
