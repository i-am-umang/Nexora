import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {
    const workData = [
        {
            title : 'E-commerce Experience',
            description : 'A modern fashion shopping experience designed for effortless product discovery, seamless browsing, and a refined online shopping journey.',
            image : assets.ecommerce_app
        },
        {
            title : 'Analytics Dashboard',
            description : 'A powerful analytics dashboard that transforms complex business data into clear insights through intuitive visualizations and performance tracking.',
            image : assets.analytics_dashboard
        },
        {
            title : 'Project Management Platform',
            description : 'A collaborative workspace that brings projects, tasks, and teams together to streamline workflows and track progress with ease.',
            image : assets.project_management
        },

    ]
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once:true}}

    id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>
    
    <Title title={'Our Selected Work'} desc={'We design and build digital experiences that combine thoughtful design, modern technology, and meaningful results.'} />

    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {
            workData.map((work, index)=>(
                <motion.div
                initial={{opacity:0, y:30}}
                whileInView={{opacity:1, y:0}}
                transition={{duration:0.5, delay: index*0.2}}
                viewport={{once:true}}


                key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl' alt="" />
                    <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                    <p className='text-sm opacity-60 w-5/6'>{work.description}</p>

                </motion.div>
            ))
        }

    </div>
    </motion.div>
  )
}

export default OurWork