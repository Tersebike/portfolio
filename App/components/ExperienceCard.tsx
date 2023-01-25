/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[400px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true
        }}
        className='w-16 h-16 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center'
        src='https://media.licdn.com/dms/image/C560BAQHrP1umKnHBrg/company-logo_200_200/0/1671479990719?e=1681344000&v=beta&t=eetN_J7bkcHXwJ5s72eRRORDg5PwY5f2JJQf7YgMFZ8'
        alt=''
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-2xl font-light'>CEO of PAPAFAM</h4>
        <p className='font-bold text-md mt-1'>PAPAFAM</p>
        <div className='flex space-x-1 my-1'>
          <img
            className='h-9 w-9 rounded-full'
            src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
            alt=''
          />
          <img
            className='h-9 w-9 rounded-full'
            src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
            alt=''
          />
          <img
            className='h-9 w-9 rounded-full'
            src='https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png'
            alt=''
          />
          {/* Tech Used */}
          {/* Tech Used */}
          {/* Tech Used */}
        </div>
        <p className='uppercase py-4 text-gray-300'>Started work... - Ended...</p>
        <ul className='list-disc space-y-3 ml-4 text-md'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  )
}

export default ExperienceCard