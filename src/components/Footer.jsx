import React, { useState } from 'react'
import assets from '../assets/assets'
import { motion } from "motion/react"

const Footer = ({theme}) => {

    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
    };
  return (
    <motion.div 
        initial={{opacity:0, y:50}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.8}}
        viewport={{once:true}}
        
        className='bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        
        {/* Footer-Top */}
        <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
            <motion.div 
                initial={{opacity:0, x: -30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay: 0.2}}
                viewport={{once:true}}


                className='space-y-5 text-sm text-gray-700 dark:text-gray-400' >
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-20 sm:w-32' alt="Nexora" />
                <p className='max-w-md'>We turn ambitious ideas into thoughtful design, powerful technology, and digital experiences that move businesses forward.</p>
           

                <ul className='flex gap-8'>
                    <li><a className='hover:text-primary' href="#hero">Home</a></li>
                    <li><a className='hover:text-primary' href="#services">Services</a></li>
                    <li><a className='hover:text-primary' href="#our-work">Our Work</a></li>
                    <li><a className='hover:text-primary' href="#contact-us">Contact Us</a></li>
                </ul>
            </motion.div>
            <motion.div
                initial={{opacity:0, x:30}}
                whileInView={{opacity:1, x:0}}
                transition={{duration:0.6, delay: 0.3}}
                viewport={{once:true}}


                className='text-gray-600 dark:text-gray-400'>


                {subscribed && (
                    <div className='mb-3 flex items-center justify-between rounded-lg bg-green-100 text-green-700 px-4 py-2 text-sm'>
                        <span>✓ Thanks for subscribing!</span>

                        <button
                            onClick={() => setSubscribed(false)}
                            className='ml-3 text-2xl font-bold leading-none text-green-700 hover:text-green-900'
                            aria-label='Close notification'
                        >
                            ×
                        </button>
                    </div>
                )}               
                <form onSubmit={handleSubscribe}>
                    <div className='flex gap-2 text-sm'>
                        <input
                            type="email"
                            placeholder='Enter your email'
                            value={email}
                            onChange={e => { setEmail(e.target.value); setSubscribed(false); }}
                            required
                            className='w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500'
                        />
                        <button type="submit" className='bg-primary text-white rounded px-6'>
                            Subscribe
                        </button>
                    </div>
                    {/* {subscribed && <p className='text-sm text-green-500 mt-3'>Thanks for subscribing!</p>} */}
                </form>
            </motion.div>
        </div>

        <hr className='border-gray-300 dark:border-gray-600 my-6'/>

        {/* Footer-bottom */}
        
        <motion.div 
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:0.5, delay: 0.4}}
            viewport={{once:true}}


            className='pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap'>
            <p>Copyright 2026 © Nexora - All Right Reserved.</p>
            <div className='flex items-center justify-between gap-4'>
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.instagram_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Footer