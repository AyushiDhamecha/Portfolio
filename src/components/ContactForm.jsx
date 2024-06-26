import React from 'react'

const ContactForm = () => {
    return (
        <div
            name="contact"
            className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white p-4'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get touch with me </p>
                </div>

                <div>
                    <form action="https://getform.io/f/lajkxmeb"
                        method='POST'
                        className='flex flex-col w-full md:w-1/2 mx-auto'>
                        <input
                            type="text"
                            name="name"
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            className='p-2 my-2 bg-transparent border-2  rounded-md text-white focus:outline-none'
                            required
                        />
                        <textarea
                            name="massage"
                            rows="10"
                            placeholder='Enter massage'
                            required
                            className='p-2 my-2 bg-transparent border-2  rounded-md text-white focus:outline-none'></textarea>
                        <button
                            type='submit'
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 rounded-md mx-auto flex hover:scale-110 duration-300 '>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
