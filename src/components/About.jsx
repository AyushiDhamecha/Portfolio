import React from 'react'

const About = () => {
    return (
        <div
            name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-20'>
            <div div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>

                <p className='text-xl mt-20'>Hello! I'm Ayushi Dhamecha, a passionate web developer specializing in creating dynamic visually appealing websites. I am excited to apply my skills and knowledge to contribute to a dynamic and innovative team. </p>
                <br />

                <p className='text-2xl font-bold  border-b-2 border-gray-500'>Education</p>
                <ul>
                    <li>
                        <li className='list-disc font-bold mt-5'>Bachelor's in Computer Engineering</li>
                        <p>L.D Colllege of Engineering</p>
                        <p>2021-2025</p>
                    </li>
                    <li>
                        <li className='list-disc font-bold mt-5'>Higher Secondary Education</li>
                        <p>Brilliant group of School, Jamangar</p>
                        <p>2019-2021</p>
                    </li>
                    <li>
                        <li className='list-disc font-bold mt-5'>SSC</li>
                        <p>Brilliant group of School, Jamangar</p>
                        <p>2018-2019</p>
                    </li>
                </ul>
            </div >


        </div>

    )
}

export default About
