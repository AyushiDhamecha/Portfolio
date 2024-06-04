
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Outlet, Link } from 'react-router-dom';

const Navbar = () => {

    const [nav, setnav] = useState(false);
    // const links = [
    //     { id: 1, link: "home" },
    //     { id: 2, link: "about" },
    //     { id: 3, link: "portfolio" },
    //     { id: 4, link: "experience" },
    //     { id: 5, link: "contact" },
    // ]

    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
            <div>
                <h1 className="text-5xl ml-2 font-signature">Ayushi</h1>
            </div>
            <ul className='hidden md:flex'>

                <Link to="/"><li

                    className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">Home</li>
                </Link>
                <Link to="/about"><li

                    className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">About</li>
                </Link>
                <Link to="/portfolio"><li

                    className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">Portfolio</li>
                </Link>
                <Link to="/experience"><li

                    className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">Experience</li>
                </Link>
                <Link to="/contact"><li

                    className="px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-105 duration-200">Contact</li>
                </Link>
                <Outlet />
            </ul>

            <div onClick={() => setnav(!nav)} className='pr-4 cursor pointer z-10 text-gray-400 md:hidden'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}

            </div>

            {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-400'>

                <Link to="/home">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Home</li></Link>

                <Link to="/about">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">About</li></Link>

                <Link to="/portfolio">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Portfolio</li></Link>

                <Link to="/experience">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Experience</li></Link>

                <Link to="/contact">
                    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Contact</li></Link>


            </ul>}

        </div>
    )
}

export default Navbar
