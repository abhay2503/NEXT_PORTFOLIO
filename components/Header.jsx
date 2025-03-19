import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I'm Abhay <Image src={assets.hand_icon} alt='' className='w-6' /></motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Full Stack web developer</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='max-w-2xl mx-auto font-Ovo'>
        Full Stack Developer with 3+ years of experience in web development with a strong passion for building user-friendly and high-performance websites and applications.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>


        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/abhayfinal-cv.pdf"
          download="Abhay-CV.pdf"
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          My CV <Image src={assets.download_icon} alt='' className='w-4' /></motion.a>


        {/* LinkedIn Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          href="https://www.linkedin.com/in/abhay-chauhan-b748b3183/"
          target="_blank"
          rel="noopener noreferrer"
          className=' px-7 lg:px-10 py-3 border rounded-full border-blue-600 flex items-center gap-2 bg-blue-600 dark:text-black'
        >
          LinkedIn <Image src={assets.linkedin_icon} alt='LinkedIn Icon' className='w-8' />
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          href="https://github.com/abhay2503"
          target="_blank"
          rel="noopener noreferrer"
          className='px-10 py-3 border rounded-full border-gray-800 flex items-center gap-2 bg-gray-800 text-white'
        >
          GitHub <Image src={assets.github_icon} alt='GitHub Icon' className='w-5' />
        </motion.a>
      </div>
    </div>
  )
}

export default Header
