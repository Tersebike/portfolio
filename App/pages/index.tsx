import { GetStaticProps, NextPage } from 'next'
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
import { PageInfo, Project, Social, Skill } from '../typings'
import { fetchPageInfo } from '../utils/fetchPageInfo'
import { fetchSkills } from '../utils/fetchSkills'
import { fetchProjects } from '../utils/fetchProjects'
import { fetchSocial } from '../utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[]
}

const inter = Inter({ subsets: ['latin'] })

export default function Home({ pageInfo, skills, projects, socials}: Props) {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track--gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
    <Head>
      <title>Timothys portfolio</title>
    </Head>

    <Header socials={socials} />

    {/* Hero */}
    <section id='hero' className='snap-center'>
    <Hero pageInfo={pageInfo} />
    </section>

    {/* About */}
    <section id='about' className='snap-start'>
      <About pageInfo={pageInfo} />
    </section>

    {/* Experience
    <section id='experience' className='snap-center'>
      <Experience />
    </section> */}

    {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills skills={skills} />
    </section>

    {/* Projects */}
    <section id='projects' className='snap-start'>
      <Projects projects={projects} />
    </section>

    {/* Contact Me */}
    <section id='contact' className='snap-start'>
      <ContactMe />
    </section>

    <Link href='#hero'>
      <footer className='sticky bottom-[15%] md:bottom-5 w-fill cursor-pointer mt-[1000px]'>
        <div className='flex items-start md:items-end justify-start md:justify-end pr-[2.5%] pl-[1%]'>
            <ArrowUpIcon
              className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
            />
        </div>
      </footer>
    </Link>

    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
    revalidate: 3600,
  }
}
