import React from "react";

const Card = ({ product }) => {
    // const { name, image, description, price, category, ratings, createdAt } = product;
    return (
        <div className="card max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
                <img
                    src="https://img.freepik.com/free-photo/still-life-tech-device_23-2150722694.jpg?t=st=1723701402~exp=1723705002~hmac=5e4c256d4cb706ccda9f2ed1039d80c394fa28c79576ac8dea62cda83f34bf8f&w=360"
                    alt="Product Image"
                    className=" w-full h-full object-cover"
                />
            </div>
            <div className="p-4">
                <h4 className="text-xl font-bold">Wireless Bluetooth Headphones</h4>
                <p className="text-gray-600 mt-2">
                    High-quality wireless Bluetooth headphones with noise-cancellation and a comfortable fit.
                </p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-900 font-bold">$99.99</span>
                    <span className="text-gray-600 text-sm">Category: Electronics</span>
                </div>
                <div className="flex items-center mt-2">
                    {/* <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.435L24 9.335l-6 5.848 1.416 8.26L12 18.897l-7.416 3.546L6 15.183 0 9.335l8.332-1.313z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.435L24 9.335l-6 5.848 1.416 8.26L12 18.897l-7.416 3.546L6 15.183 0 9.335l8.332-1.313z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.435L24 9.335l-6 5.848 1.416 8.26L12 18.897l-7.416 3.546L6 15.183 0 9.335l8.332-1.313z" />
                        </svg>
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.435L24 9.335l-6 5.848 1.416 8.26L12 18.897l-7.416 3.546L6 15.183 0 9.335l8.332-1.313z" />
                        </svg>
                        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 .587l3.668 7.435L24 9.335l-6 5.848 1.416 8.26L12 18.897l-7.416 3.546L6 15.183 0 9.335l8.332-1.313z" />
                        </svg>
                    </div> */}
                    <span className="text-gray-600">Rating: (4.0)</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">Created on: 2024-08-13T10:15:00Z</div>
            </div>
        </div>
    );
};

export default Card;
