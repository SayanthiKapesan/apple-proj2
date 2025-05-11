import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoLogoApple } from "react-icons/io5";
import { PiGreaterThan } from "react-icons/pi";


const navLink = [

    { icon:  <IoLogoApple />, href: "#" },
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
    { icon: <FaSearch />, href: "#" },
    { icon: <MdOutlineShoppingBag />, href: "#" }
];

function Navbar() {
    return (


        //NavBar
        <nav className="bg-gray-100 px-6 py-5 shadow-lg text-center ">
            <div className="flex items-center">
        <div className="flex items-center justify-between max-w-7xl mx-auto ">      
        <ul className="flex items-center gap-x-6">
                    {navLink.map((link, index) => (
                        <li key={index}>
                            <a 
                                href={link.href} 
                                className="text-gray-700 hover:text-green-400 transition-colors flex items-center"
                            > { link.icon}
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
                
            </div></div>


        </nav>



    );
}

export default Navbar;