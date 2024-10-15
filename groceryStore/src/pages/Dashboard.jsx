import React, { useState,useEffect } from 'react';
import { FiBell, FiShoppingCart, FiFilter } from 'react-icons/fi';
import {FaCalendarDay,FaCalendarWeek,FaCalendarAlt,FaHeart,FaTimes, FaAppleAlt, FaStar, FaShoppingCart, FaEnvelope, FaSmile, FaCog,FaHamburger} from 'react-icons/fa';
import basketImage from '../images/basket.png';
import SidebarItem from '../components/SidebarItem.jsx';
import CategoryCard from '../components/CategoryCard.jsx';
import ProductCard from '../components/ProductCard.jsx';
import IncomeCard from '../components/IncomeCard.jsx';
import Notification from '../components/Notification.jsx'; 
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('market');
    const [showDropdown, setShowDropdown] = useState(false);  // State to control the dropdown
     const navigate = useNavigate();
    

  // Handle logout function
  const handleLogout = () => {
    localStorage.removeItem('token');  // Remove the token from localStorage
    navigate('/');  // Navigate back to the login page
  }
    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible);
    };

    // Close sidebar when clicking outside of it
    const handleClickOutside = (e) => {
        if (isSidebarVisible && !document.getElementById('sidebar').contains(e.target)) {
            setIsSidebarVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarVisible]);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Sticky Header */}
            {/* Header */}
         <header className="sticky top-0 bg-white p-3 flex flex-row justify-between sm:justify-evenly pl-7 items-center z-50 h-auto w-full">
             <h1 className="text-green-600 font-bold text-xl sm:text-lg">WELCOME TO MARKET</h1>
             <div className="flex space-x-2 items-center">
             {/* Hide search bar on mobile */}
            <input
            type="text"
            className="border-b border-gray-300 p-2 focus:outline-none focus:border-green-600 hidden sm:block"
            placeholder="Search..."
        />
        <FiBell className="text-gray-600 cursor-pointer hover:text-green-600" size={24} />
        <FiShoppingCart className="text-gray-600 cursor-pointer hover:text-green-600" size={24} />
        <div className="relative">
            {/* Reduce profile image size on mobile */}
            <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-8 h-8 rounded-full cursor-pointer hover:shadow-md"
                onClick={() => setShowDropdown(!showDropdown)}  // Toggle dropdown
            />

            {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
    </div>
         </header>



        <div className="flex flex-1">
                {/* Sidebar */}
                {/* Sidebar Toggle Button */}
                
                <button onClick={toggleSidebar} className="md:hidden p-1  text-black-600    fixed top-4   z-50  animate-wiggle">
                {isSidebarVisible ? <FaTimes size={18} /> : <FaHamburger size={18} />} {/* Toggle Icon */}
               </button>

                {/* Sidebar */}
                <aside className={`w-64 bg-white border-r bottom-4 ${isSidebarVisible ? 'block' : 'hidden'} md:block transition-all`}>
                <h2 className="text-green-600 text-2xl font-bold px-6 mb-3">MarketEase</h2>
                <nav className="flex flex-col space-y-1 px-4">
                 {['market', 'categories', 'order', 'favorite', 'cart', 'message', 'feedback', 'settings'].map((item) => (
               <SidebarItem
                key={item}
                title={capitalize(item)}
                icon={getIcon(item)}
                active={activeSection === item}
                onClick={() => setActiveSection(item)}
            />
        ))}
    </nav>
               </aside>

                
                {/* Main Content */}
                <div className='w-auto'>
                <main className="flex-1 p-6">
                    {/* Section 2.2.1: Get Special Discounts */}
                    <section className="bg-green-600 p-6 rounded-lg relative mb-6 flex justify-between items-center h-auto">
                <div className="w-2/3">
                <h2 className="text-white text-2xl font-bold">GET SPECIAL DISCOUNTS UP TO 45%</h2>
                <p className="text-white  mt-2">Enjoy our vegetables at a discount</p>
                <button className="mt-4 px-6 py-2 bg-white text-green-600 font-semibold rounded hover:bg-gray-100 hover:shadow-lg hover:translate-y-1 transition-all delay-75">
                 Use Now
               </button>
               </div>
               <div className="w-1/3">
               <img src={basketImage} alt="Basket of Fruits" className="max-w-full rounded-lg" />
               </div>
               </section>
               {/* Income Section 2.2.2 */}
               <div className="mb-6 bg-white p-6 rounded-md">
                        <h2 className="text-2xl font-bold text-black mb-4">Income</h2>
                        <div className='flex gap-2'>
                        <IncomeCard label="Daily" amount="$129.80" icon={<FaCalendarDay className="text-green-600  gap-4 mb-2 text-lg  " />} />
                       <IncomeCard label="Weekly" amount="$347.62" icon={<FaCalendarWeek className="text-green-600  gap-4 mb-2 text-lg" />} />
                      <IncomeCard label="Monthly" amount="$897.66" icon={<FaCalendarAlt className="text-green-600 gap-4 mb-2 text-lg" />} />
                      </div>
                    </div>

                    {/* Section 2.2.3: Categories and Stock */}
                    <section className="mb-6 bg-white p-6 rounded-md">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-black">Categories and Stock</h2>
                            <FiFilter className="text-green-600" size={24} />
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4  ">
                            {['Veggies', 'Tubers', 'Fish', 'Fruits'].map((category) => (
                                <CategoryCard key={category} category={category} stock="123" />
                            ))}
                        </div>
                    </section>

                    {/* Section 2.2.4: Popular Products */}
                    <section className="mb-6 bg-white p-6 rounded-md">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-black">Popular Products</h2>
                            <a href="#" className="text-green-600">See All</a>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">  
                            {['Abc', 'Def', 'Ghi', 'Jkl'].map((product) => (
                                <ProductCard key={product} name={product} price="$15.00" />
                            ))}
                        </div>
                    </section>

                    {/* Section 2.2.5: Top Items */}
                    <section className="mb-6 bg-white p-6 rounded-md">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-black">Top Items</h2>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                            {['Mno', 'Pqr', 'Stu', 'Vwx'].map((item) => (
                                <ProductCard key={item} name={item} price="$12.00" />
                            ))}
                        </div>
                    </section>
                    {/* Notifications Section 2.2.6 */}
                    <div className="mb-6 bg-white p-6 rounded-md">
                        <h2 className="text-2xl font-bold text-black mb-4">Notifications</h2>
                        {['Fruit stock running low', 'New order received'].map((notif, idx) => (
                            <Notification key={idx} message={notif} />
                        ))}
                    </div>

                    {/* Latest Orders Section 2.2.7 */}
                    <div className='bg-white p-6 rounded-md'>
                        <h2 className="text-2xl font-bold text-black mb-4">Latest Orders</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="text-left text-black-600 font-bold text-lg">Name</th>
                                    <th className="text-left text-black-600 font-bold text-lg">Goods</th>
                                    <th className="text-left text-black-600 font-bold text-lg">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="py-2 text-left text-black-600   text-md">John Doe</td>
                                    <td className="py-2 text-left text-black-600   text-md">Apples</td>
                                    <td className="py-2 text-left text-black-600   text-md">
                                        <button className="bg-green-600 text-white px-2 py-1 rounded w-full hover:translate-y-1 duration-75 ease-out">Accept</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="py-2 text-left text-black-600   text-md">Jane Smith</td>
                                    <td className="py-2 text-left text-black-600   text-md">Tomatoes</td>
                                    <td className="py-2 text-left text-black-600  text-md">
                                        <button className="bg-gray-400 text-white px-2 py-1 rounded w-full hover:translate-y-1 duration-75 ease-out">Accepted</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </main>

                
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-4 w-full">
                <p>&copy; 2024 MarketEase. All rights reserved.</p>
            </footer>
        </div>
    );
};

 

// Utility function to get icon
const getIcon = (item) => {
    switch (item) {
        case 'market':
            return <FaShoppingCart />;
        case 'categories':
            return <FaAppleAlt />;
        case 'order':
            return <FaEnvelope />;
        case 'favorite':
            return <FaHeart />;
        case 'cart':
            return <FaShoppingCart />;
        case 'message':
            return <FaSmile />;
        case 'feedback':
            return <FaStar />;
        case 'settings':
            return <FaCog />;
        default:
            return null;
    }
};

// Utility function to capitalize first letter
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export default Dashboard;
