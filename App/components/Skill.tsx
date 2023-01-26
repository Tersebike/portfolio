import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
}

function Skill({ directionLeft, skill }: Props) {
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
        src={urlFor(skill?.image).url()}
        alt=''
        className='rounded-full border border-gray-500 object-contain h-16 md:h-[72px] w-16 md:w-[72px] filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 md:h-[72px] w-16 md:w-[72px] rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-lg md:text-2xl font-bold text-black opacity-100'>{skill?.progress}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill