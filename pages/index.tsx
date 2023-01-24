/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import { ArrowUpIcon } from '@heroicons/react/24/solid';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track--gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
    <Head>
      <title>Timothys portfolio</title>
    </Head>

    <Header />

    {/* Hero */}
    <section id='hero' className='snap-center'>
    <Hero />
    </section>

    {/* About */}
    <section id='about' className='snap-start'>
      <About />
    </section>

    {/* Experience
    <section id='experience' className='snap-center'>
      <Experience />
    </section> */}

    {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills />
    </section>

    {/* Projects */}
    <section id='projects' className='snap-start'>
      <Projects />
    </section>

    {/* Contact Me */}
    <section id='contact' className='snap-start'>
      <ContactMe />
    </section>

    <Link href='#hero'>
      <footer className='sticky bottom-5 w-fill cursor-pointer'>
        <div className='flex items-end justify-end pr-[2.5%]'>
            <ArrowUpIcon
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
        </div>
      </footer>
    </Link>

    </div>
  )
}
