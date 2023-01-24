import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center align-middle'>
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-row items-center'>
        {/* Social Icons */}
        <SocialIcon
          url='https://www.linkedin.com/in/tim-d-williams/'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://github.com/WilliamsTim'
          fgColor='gray'
          bgColor='transparent'
        />
        <SocialIcon
          url='https://www.instagram.com/t1m_williams/'
          fgColor='gray'
          bgColor='transparent'
        />
      </motion.div>

      <motion.div
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon
          url='/#contact'
          fgColor='gray'
          bgColor='transparent'
          network='email'
        />
        <Link href="#contact">
          <p className='uppercase hidden md:inline-flex text-sm text-gray-400 pb-1'>Get In Touch</p>
        </Link>
      </motion.div>
    </header>
  )
}

