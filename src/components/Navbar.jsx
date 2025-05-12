import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoLogoApple } from "react-icons/io5";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navLink = [
    { icon: <IoLogoApple size={20} />, href: "#" },
    { name: "Home", href: "#" },
    { name: "Mac", href: "#" },
    { name: "iPad", href: "#" },
    { name: "iPhone", href: "#" },
    { name: "Watch", href: "#" },
    { name: "Airpods", href: "#" },
    { name: "TV & Home", href: "#" },
    { name: "Entertainment", href: "#" },
    { name: "Accessories", href: "#" },
    { name: "Support", href: "#" },
    { icon: <FaSearch size={16} />, href: "#" },
    { icon: <MdOutlineShoppingBag size={18} />, href: "#" }
];

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-100 px-4 py-3 shadow-lg">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Header - Logo and Menu Button */}
                <div className="md:hidden flex items-center justify-between">
                    <a href="#" className="text-gray-700 hover:text-green-400 transition-colors">
                        <IoLogoApple size={24} />
                    </a>
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-gray-700 hover:text-green-400 transition-colors">
                            <FaSearch size={18} />
                        </a>
                        <a href="#" className="text-gray-700 hover:text-green-400 transition-colors">
                            <MdOutlineShoppingBag size={20} />
                        </a>
                        <button 
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-green-400 transition-colors"
                        >
                            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex justify-center">
                    <ul className="flex items-center gap-x-6">
                        {navLink.map((link, index) => (
                            <li key={index}>
                                <a 
                                    href={link.href} 
                                    className="text-gray-700 hover:text-green-400 transition-colors flex items-center gap-1"
                                >
                                    {link.icon}
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Menu - Centered when open */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-100 z-50 shadow-lg px-4 py-2">
                        <ul className="flex flex-col items-center gap-2">
                            {navLink.slice(1, -2).map((link, index) => (
                                <li key={index}>
                                    <a 
                                        href={link.href} 
                                        className="text-gray-700 hover:text-green-400 transition-colors block py-2 px-2"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;