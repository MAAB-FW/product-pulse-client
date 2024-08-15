import React from "react";
import PropTypes from "prop-types";

const Card = ({ product }) => {
    const { name, image, description, price, category, ratings, createdAt } = product;
    return (
        <div className="card max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative w-full h-56 overflow-hidden">
                <img src={image} alt={`${name} Image`} className=" w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h4 className="text-xl font-bold">{name}</h4>
                <p className="text-gray-600 mt-2">{description}</p>
                <div className="flex items-center justify-between mt-3">
                    <span className="text-gray-900 font-bold">${price}</span>
                    <span className="text-gray-600 text-sm">Category: {category}</span>
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
                    <span className="text-gray-600">Rating: ({ratings})</span>
                </div>
                <div className="text-sm text-gray-500 mt-2">Created on: {new Date(createdAt).toLocaleDateString()}</div>
            </div>
        </div>
    );
};

export default Card;

Card.propTypes = {
    product: PropTypes.object,
};
