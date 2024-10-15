import React from 'react'

// Income Card Component
const IncomeCard = ({ label, amount, icon }) => (
    <div className="bg-gray-100 p-4 rounded-md   mb-4 flex-row justify-center text-left w-1/3">
        {icon} {/* Display the passed icon */}
        <div>
        <h3 className="text-lg font-semibold text-gray-700">{label}</h3>
        <p className="text-md text-green-600 ">{amount}</p>
        </div>
    </div>
);

export default IncomeCard
