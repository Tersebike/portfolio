/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  projects: Project[];
}

type align = {
  align: string
}

function Projects({projects}: Props) {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track--gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-10'>
        {projects.map((project, i) => (
          <motion.div
            key={project?._id}
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 pt-25 md:p-20 md:pt-45 h-screen'>
            <motion.img
              initial={{
                y: -300,
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
                once: true,
              }}
              src={urlFor(project?.image).url()}
              alt=''
              className='h-36 w-36'
            />

            <div className='space-y-5 px-0 md:px-10 max-w-6xl justify-evenly items-center'>
              <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                <span className='underline decoration=[#F7AB0A]/50'>
                  Project {i + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <p className='w-4/5 mx-auto' align="center">
                {project?.summary}
              </p>

                <div className='grid grid-cols-5 md:flex md:flex-row items-center justify-center mx-auto'>
                {project?.technologies.map((technology) => {
                  return <img
                    key={project?._id}
                    src={urlFor(technology.image).url()}
                    alt=''
                    className='h-8 w-8 m-1 md:m-2'
                  />
                })}
              </div>
              </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12' />
    </div>
  )
}

export default Projects