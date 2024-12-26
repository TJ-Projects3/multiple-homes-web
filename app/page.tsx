'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

const impactData = [
  { title: 'Properties Flipped', value: 150 },
  { title: 'Rental Units', value: 300 },
  { title: 'Neighborhoods Improved', value: 25 },
  { title: 'Satisfied Clients', value: 500 },
]

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="h-screen flex flex-col justify-center items-center p-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white text-shadow">
            Multiple Homes
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Transforming Properties, Building Communities
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4"
        >
          <Link href="/properties" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
            View Properties
          </Link>
          <Link href="/contact" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            Contact Us
          </Link>
        </motion.div>
      </div>

      <section className="py-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white text-shadow">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {impactData.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-gray-800 p-6 rounded-lg text-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
              <motion.p
                className="text-4xl font-bold text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={hoveredIndex === index ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3 }}
              >
                {hoveredIndex === index ? item.value : '+'}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why Choose Multiple Homes?</h2>
          <p className="text-lg text-gray-300 mb-8">
            With years of experience in property flipping and rentals, we've built a reputation for excellence in Baltimore's real estate market. Our commitment to quality renovations and community improvement sets us apart.
          </p>
          <Link href="/about" className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  )
}

