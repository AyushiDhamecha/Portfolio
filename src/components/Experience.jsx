import React from 'react'
import html from '../assets/img/HTML.png'
import css from '../assets/img/CSS.png'
import js from '../assets/img/JS.png'
import react from '../assets/img/react.png'
import tailwind from '../assets/img/TailwindCSS.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: js,
      title: 'javascript',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id: 1,
      src: tailwind,
      title: 'TailwindCSS',
      style: 'shadow-sky-400'
    },
  ]
  return (
    <div
      name="experience"
      className='bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen'>
      <div
        className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
          <p className='py-6'>These are the technologies I've worked with </p>
        </div>

        <div className='w-full grid grid-col-2 sm:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            techs.map(({ id, src, title, style }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='text-center mt-4'>{title}</p>
              </div>
            ))
          }

        </div>
      </div>
    </div>
  )
}

export default Experience
