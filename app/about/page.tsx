'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen py-24 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-shadow"
      >
        About Tuyi Oluwalade
      </motion.h1>
      
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mb-8 md:mb-0"
        >
          <Image src="/placeholder.svg?height=400&width=400&text=Tuyi+Oluwalade" alt="Tuyi Oluwalade" width={400} height={400} className="rounded-full shadow-lg" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="md:w-1/2 md:pl-8"
        >
          <p className="text-lg mb-4">
            Tuyi Oluwalade is a seasoned realtor and real estate investor with decades of experience in the industry. His passion for transforming properties and improving neighborhoods has made him a respected figure in the Baltimore real estate market.
          </p>
          <p className="text-lg mb-4">
            With a keen eye for potential and a deep understanding of market trends, Tuyi has successfully flipped numerous properties, turning neglected houses into beautiful homes. His expertise extends to property acquisition for rentals, creating valuable long-term investments.
          </p>
          <p className="text-lg">
            Tuyi's commitment to community development goes beyond individual properties. Through his work, he has played a significant role in revitalizing neighborhoods, increasing property values, and creating desirable living spaces for families throughout Baltimore.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

