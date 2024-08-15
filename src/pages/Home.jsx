import React from "react";

const Home = () => {
    return (
        <div className="flex w-[83%] mx-auto items-center justify-center bg-white rounded-lg overflow-hidden cursor-pointer pl-4 shadow-md h-10">
            <input
                placeholder="Search Products by Name"
                id="input"
                className="w-full h-full border-none outline-none text-sm caret-orange-600"
                name="text"
                type="text"
            />
            <label className="cursor-text px-3" htmlFor="input">
                <svg className="w-3 h-3 text-gray-500" viewBox="0 0 512 512" fill="currentColor">
                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                </svg>
            </label>
        </div>
    );
};

export default Home;
