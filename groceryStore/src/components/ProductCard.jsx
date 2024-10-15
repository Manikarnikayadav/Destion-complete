import React,{useState} from 'react'
import StuImage from '../images/Stu.png';
import MnoImage from '../images/Mno.png';
import PqrImage from '../images/Pqr.png';
import VwxImage from '../images/Vwx.png';
import GhiImage from '../images/Ghi.png';
import JklImage from '../images/Jkl.png';
import DefImage from '../images/Def.png';
import AbcImage from '../images/Abc.png';
import { FiHeart } from 'react-icons/fi';
import { FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ name, price }) => {
    const [liked, setLiked] = useState(false); // State for heart icon

    const images = {
        'Stu': StuImage,
        'Mno': MnoImage,
        'Pqr': PqrImage,
        'Vwx': VwxImage,
        'Ghi': GhiImage, 
        'Abc': AbcImage, 
        'Def': DefImage, 
        'Jkl': JklImage,
    };

    return (
        <div className="bg-white shadow-md p-4 rounded-lg relative hover:shadow-lg transition-transform transform hover:scale-105 max-w-xs">
    <img src={images[name]} alt={name} className="w-full h-40 object-cover rounded-t-lg" />
            <button
                className={`absolute top-2 right-2 bg-white p-2 rounded-full ${liked ? 'text-red-600' : 'text-gray-500'}`} // Toggle heart color
                onClick={() => setLiked(!liked)}
            >
                <FiHeart />
            </button>
            <div className='flex justify-between gap-3'>
            <div>
            <h3 className="text-lg font-bold text-black mt-2">{name}</h3> {/* Text color to gray */}
            <p className="text-green-600 text-md">{price}</p>
            </div>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
                <FaCartPlus />
            </button>
            </div>
        </div>
    );
};

export default ProductCard
