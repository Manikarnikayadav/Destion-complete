import React from 'react'

// Sidebar Item Component
const SidebarItem = ({ title, icon, active, onClick }) => (
    <button
        className={`flex items-center p-3 space-x-4 text-left w-full transition-all ${
            active ? 'bg-gray-100 text-green-600 border-r-4 border-green-600 rounded-l-md' : 'text-gray-600'
        } hover:bg-gray-50`}
        onClick={onClick}
    >
        {icon}
        <span className="text-lg font-medium">{title}</span>
    </button>
);


export default SidebarItem
