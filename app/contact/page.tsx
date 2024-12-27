'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen py-24 px-4">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center mb-12 text-shadow"
      >
        Contact Us
      </motion.h1>
      
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">We'd love to hear from you! Whether you're interested in our properties, have questions about our services, or want to discuss a potential project, please don't hesitate to reach out.</p>
          <p className="text-lg mb-4">You can contact Tuyi Oluwalade directly at <a href="tel:443-621-6263" className="underline hover:text-gray-300 transition-colors duration-300">443-621-6263</a> or fill out the form below, and we'll get back to you as soon as possible.</p>
        </motion.div>
        
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-lg mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-cream border border-gray-700 focus:outline-none focus:border-cream"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-cream border border-gray-700 focus:outline-none focus:border-cream"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-cream border border-gray-700 focus:outline-none focus:border-cream"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-cream text-black px-6 py-3 rounded-full text-lg font-semibold hover:bg-opacity-80 transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
        
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-4 bg-green-500 text-black rounded-md"
          >
            Thank you for your message! We'll get back to you soon.
          </motion.div>
        )}
      </div>
    </div>
  )
}

