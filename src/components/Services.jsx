
import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {
    const serviceData = [
        {
            title: 'Web Development',
            description: 'We build responsive, high-performance websites that bring your ideas to life.',
            icon: assets.webdev_icon
        },
        {
            title: 'UI/UX Design',
            description: 'We create intuitive, user-friendly interfaces with thoughtful layouts and modern visuals.',
            icon: assets.uiux_icon
        },
        {
            title: 'Digital Strategy',
            description: 'We turn concepts into structured digital experiences with clear goals and purposeful design.',
            icon: assets.digital_icon
        },
        {
            title: 'Brand Identity',
            description: 'We shape consistent digital identities through cohesive visuals and engaging experiences.',
            icon: assets.brand_icon
        },
    ]

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
            id='services'
            className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'
        >
            <img
                src={assets.bgImage2}
                alt=""
                className='absolute -top-110 -left-70 -z-1 dark:hidden'
            />

            <Title
                title='What We Do'
                desc='From thoughtful design to modern development, we create digital experiences that make an impact.'
            />

            <div className='flex flex-col md:grid grid-cols-2'>
                {serviceData.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </div>
        </motion.div>
    )
}

export default Services
