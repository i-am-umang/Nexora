import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';
import { motion } from "motion/react"

const ContactUs = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        
        const formData = new FormData(event.target);

        formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

        try{
            
            const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
            });

            const data = await response.json();

            if (data.success) {
            toast.success('ThankYou for your submission')
            event.target.reset();
            } else {
            toast.error(data.message)
            }
        }catch(error){
            toast.error(error.message)
        }

    };
  return (
    <motion.div
    initial="hidden"
    whileInView="visible"
    transition={{staggerChildren: 0.2}}
    viewport={{once:true}}

    id='contact-us'  className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
        <Title title={'Lets Build Something Great Together'} desc={'Have an idea in mind? Lets turn it into a digital experience that makes a lasting impact.'}/>

        <motion.form 
        initial={{opacity:0, y:30}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5, delay: 0.4}}
        viewport={{once:true}}

        onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full' action="">
            <div>
                <p className='mb-2 text-sm font-medium'>your name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" name='name' placeholder='Enter your name' className='w-full p-2 text-sm outline-none ' required/>
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Email id</p>
                <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                    <img src={assets.email_icon} alt="" />
                    <input type="emai" name='email' placeholder='Enter your email' className='w-full p-2 text-sm outline-none' required/>
                </div>
            </div>

            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea  name='message' rows={8} placeholder='Enter your message' className='w-full p-2 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600' required></textarea>
            </div>

            <button
                type="submit"
                className='w-max flex items-center justify-center gap-3
                        bg-primary text-white text-sm font-medium
                        px-7 py-3 rounded-full cursor-pointer
                        hover:scale-103 hover:shadow-lg
                        transition-all duration-300'
            >
                Send Message
                <img
                    src={assets.arrow_icon}
                    alt=""
                    className='w-4'
                />
            </button>
        </motion.form>
    </motion.div>
  )
}

export default ContactUs