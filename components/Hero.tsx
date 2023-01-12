/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCirles'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
            "Hi, My Name's Timothy Williams",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />",
          ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden pt-[100px]'>
      <BackgroundCircles />
      <img
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
      src='https://media.licdn.com/dms/image/C4D03AQEp_4CsHGLEmg/profile-displayphoto-shrink_800_800/0/1552595666470?e=1678924800&v=beta&t=c8w_laBdlhi5hmJQFxRT5GgzEThG1mvdskfMKSOM5ZI'
      alt=''
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href='#about'>
          <button className='heroButton'>About</button>
          </Link>
          {/* <Link href='#experience'>
          <button className='heroButton'>Experience</button>
          </Link> */}
          <Link href='#skills'>
          <button className='heroButton'>Skills</button>
          </Link>
          <Link href='#projects'>
          <button className='heroButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero