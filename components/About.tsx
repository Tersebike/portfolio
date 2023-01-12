import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        src='https://media.licdn.com/dms/image/C4D03AQEp_4CsHGLEmg/profile-displayphoto-shrink_800_800/0/1552595666470?e=1678924800&v=beta&t=c8w_laBdlhi5hmJQFxRT5GgzEThG1mvdskfMKSOM5ZI'
        alt=''
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] mt-[75px]'
      />
      <motion.div
        initial={{
          opacity: 0
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='space-y-10 px-0 md:px-10'
      >

        <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>

        <p className='text-base'>Lots and lots of information about me will go here once I actually and properly set up the website. Until then, I will probably just fill whatever space more that I need with latin filler words.</p>

      </motion.div>

    </div>
  )
}

export default About