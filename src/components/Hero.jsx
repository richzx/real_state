import React from 'react'
import heroImg from '../assets/image6.jpg'

const Hero = () => {
  return (
    <div className='w-full px-5 '>
      <nav className='flex justify-between items-center py-5 ' >
        <h1 className='text-xl font-bold md:text-2xl ' >Real Estate</h1>
        <ul className='flex items-center space-x-5 text-xs md:text-base ' >
          <li>Features</li>
          <li>Trending</li>
          <li>About</li>
        </ul>
        <button className='bg-yellow-400 px-5 py-2 rounded-xl text-xs font-normal md:text-base ' >Contact</button>
      </nav>

      <div className='h-[500px] relative '>
        <img src={heroImg} alt="Imagen for hero" className='w-full h-full object-cover rounded-md ' />
        <div className='absolute bottom-5 w-full '>
          <div className='w-11/12 m-auto bg-white grid grid-cols-2 justify-between items-center p-5 drop-shadow-2xl md:space-x-4 md:rounded-md lg:flex xl:w-4/5 '> 
            <div className='flex flex-col space-y-2 '>
              <label htmlFor="location">Location</label>
              <input className='border-gray-300 border-2 rounded pl-2 outline-0 text-sm ' type="text" placeholder='US' />
            </div>
            <div className='flex flex-col space-y-2 '>
              <label htmlFor="property">Property</label>
              <input className='border-gray-300 border-2 rounded pl-2 outline-0 text-sm ' type="text" placeholder='Property' />
            </div>
            <div className='flex flex-col space-y-2 '>
              <label htmlFor="price">Max Price</label>
              <input className='border-gray-300 border-2 rounded pl-2 outline-0 text-sm ' type="text" placeholder='$100,000' />
            </div>
            <div>
              <button className='bg-yellow-400 px-5 py-2 mt-5 rounded-xl md:mt-0 md:rounded-full ' >Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero