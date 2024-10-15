import React from 'react'
import {FiChevronDown} from 'react-icons/fi'
// Notification Component
const Notification = ({ message }) => (
    <div className="bg-gray-100 p-3 rounded-md flex justify-between items-center mb-2">
        <p className='text-md'>{message}</p>
        <FiChevronDown />
    </div>
);

export default Notification
