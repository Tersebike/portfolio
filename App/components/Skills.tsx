import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flew-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for current proficiency</h3>

      <div className='grid grid-cols-3 gap-5 pt-[150px] md:grid-cols-4'>
        <Skill url='https://adus.tech/wp-content/uploads/2021/05/html5-logo.png'/>
        <Skill url='https://www.shareicon.net/download/2016/08/01/639873_internet.svg'/>
        <Skill url='https://icon-library.com/images/javascript-icon-png/javascript-icon-png-23.jpg'/>
        <Skill url='https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1523028284340-2FY0DO8X58JYL5Z2NF2I/512px-React-icon.svg.png'/>
        <Skill url='https://www.svgrepo.com/download/376337/node-js.svg'/>
        <Skill url='https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg'/>
        <Skill url='https://www.vectorlogo.zone/logos/mongodb/mongodb-ar21.png'/>
        <Skill url='https://e7.pngegg.com/pngimages/707/928/png-clipart-postgresql-logo-database-management-system-graphics-sql-logo-blue-text-thumbnail.png'/>
        <Skill url='https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png'/>
        <Skill url='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/AWS_Simple_Icons_AWS_Cloud.svg/2560px-AWS_Simple_Icons_AWS_Cloud.svg.png'/>
        <Skill url='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'/>
      </div>
    </motion.div>
  )
}

export default Skills