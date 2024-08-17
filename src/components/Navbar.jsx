import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { TfiMenu } from "react-icons/tfi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const { logout } = useAuth();
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
    const uls = (
        <>
            {navLinks.map(({ name, path }) => (
                <NavLink to={path} key={path} className={`text-nowrap`}>
                    {name}
                </NavLink>
            ))}

            <button className="bg-red-600" onClick={() => logout()}>
                Logout
            </button>
        </>
    );
    return (
        <div className="bg-[#1e40af] mb-10 w-full text-white py-2 md:py-0 relative">
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
        </div>
    );
};

export default Navbar;
