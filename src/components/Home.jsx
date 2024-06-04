import React from 'react';
import HeroImage from "../assets/img/main.png";
import { FaArrowCircleDown } from "react-icons/fa";
import { RiArrowRightWideLine } from "react-icons/ri";

const Home = () => {
    return (

        <section name="home" className='mx-auto px-5 py-32  w-full bg-gradient-to-b from-black to-gray-800 h-full'>

            <div className=' container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between p-4'>
                <div className='flex flex-col justify-center h-full px-9'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'am Front End Developer</h2>
                    <p className='text-gray-400 py-4 max-w-md'>Computer Engineering student passionate about creating engaging and user-friendly websites. Skilled in web design and development, eager to learn and contribute to innovative projects.
                    </p>

                    <div>
                        <div>
                            <button className='group text-white w-fit px-6 py-2 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                                <a href="portfolio">Portfolio</a>
                                <span className='group-hover:rotate-90 duration-300'>
                                    <RiArrowRightWideLine size={25} className='ml-1' />
                                </span>
                            </button>
                        </div>
                        <div className='block sm:hidden'>
                            <button className='hover:bg-blue-400 group text-white w-fit px-6 py-2 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
                                Resume
                                <span >
                                    <FaArrowCircleDown size={25} className='ml-1' />
                                </span>
                            </button>
                        </div>
                    </div>

                </div>
                <div>
                    <img src={HeroImage} alt="my profile"
                        className="lgw-[70%] ml-auto" />
                </div>
            </div>
        </section>


    )
}

export default Home




// import React from "react";
// import HeroImg from "../assets/img/hero.jpeg";

// import {
//     AiOutlineTwitter,
//     AiOutlineYoutube,
//     AiOutlineFacebook,
// } from "react-icons/ai";

// const Hero = () => {
//     return (
//         <section className="bg-black px-5 text-white py-32">
//             <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
//                 <div className="hero-info pb-5 md:pb-0">
//                     <h1 className="text-4xl lg:text-6xl">
//                         Hi, <br />I am <span className="text-accent">a</span>mrin <br />
//                         Frontend Developer
//                     </h1>

//                     <p className="py-5">
//                         I am proficient in JavaScript, React.js and Tailwind CSS
//                     </p>

//                     <a
//                         href="/#projects"
//                         className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
//                     >
//                         See Projects
//                     </a>
//                 </div>

//                 <div className="hero-img">
//                     <img
//                         src={HeroImg}
//                         alt="coding illustration"
//                         className="lgw-[80%] ml-auto"
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

