'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const properties = [
  { id: 1, type: 'Flipped', address: '123 Main St, Baltimore, MD', price: '$299,000' },
  { id: 2, type: 'Rental', address: '456 Oak Ave, Baltimore, MD', price: '$1,800/month' },
  { id: 3, type: 'Flipped', address: '789 Elm St, Baltimore, MD', price: '$349,000' },
  { id: 4, type: 'Rental', address: '101 Pine Rd, Baltimore, MD', price: '$2,200/month' },
]

export default function Properties() {
  return (
    <div className="min-h-screen py-24 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-shadow"
      >
        Our Properties
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {properties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg"
          >
            <Image src={`/placeholder.svg?height=300&width=400&text=Property+${property.id}`} alt={`Property ${property.id}`} width={400} height={300} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{property.type} Property</h3>
              <p className="text-gray-400 mb-4">{property.address}</p>
              <p className="text-2xl font-bold">{property.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

