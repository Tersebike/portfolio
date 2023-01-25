import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  directionLeft?: boolean;
  url: string;
}

function Skill({ directionLeft, url }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
        }}
        src={`${url}`}
        alt=''
        className='rounded-full border border-gray-500 object-contain h-16 md:h-20 w-16 md:w-20 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 md:h-20 w-16 md:w-20 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-lg md:text-2xl font-bold text-black opacity-100'>100%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill