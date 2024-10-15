import React from 'react'
import {FaCarrot } from 'react-icons/fa';
// Category Card Component
const CategoryCard = ({ category, stock }) => (
    <div className="bg-white p-4 rounded-lg text-center hover:bg-green-600 hover:text-white transition-transform transform hover:scale-105 cursor-pointer group shadow-md">
        <FaCarrot className="text-green-600 mx-auto mb-2 text-3xl group-hover:text-white " />
        <h3 className="text-lg font-bold">{category}</h3>
        <p className="text-md">Stock: {stock}</p>
    </div>
);

export default CategoryCard
