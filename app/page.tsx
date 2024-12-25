import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo-placeholder.svg" alt="Multiple Homes, Inc. Logo" width={50} height={50} />
            <span className="ml-2 text-2xl font-bold text-gray-800">Multiple Homes, Inc.</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-600 hover:text-red-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Properties</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-red-600">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[600px]">
          <Image 
            src="/placeholder.svg?height=600&width=1920" 
            alt="Beautiful Baltimore Home" 
            layout="fill" 
            objectFit="cover" 
            className="brightness-50"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-5xl font-bold mb-4">Transform Your Home in Baltimore</h1>
            <p className="text-xl mb-8">Expert house flipping services to maximize your property's value</p>
            <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg">
              Get Started
            </Button>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Property Acquisition', 'Renovation & Design', 'Sale & Marketing'].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{service}</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image 
                    src={`/placeholder.svg?height=300&width=400&text=Property+${index + 1}`} 
                    alt={`Featured Property ${index + 1}`} 
                    width={400} 
                    height={300} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">Beautiful Home in Baltimore</h3>
                    <p className="text-gray-600 mb-4">3 bed • 2 bath • 1,800 sqft</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Property?</h2>
            <p className="text-xl mb-8">Let's discuss how we can maximize your home's value in the Baltimore market.</p>
            <Button className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full text-lg">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Multiple Homes, Inc.</h3>
              <p>Transforming Baltimore properties since 2010</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-400">Home</a></li>
                <li><a href="#" className="hover:text-red-400">Services</a></li>
                <li><a href="#" className="hover:text-red-400">Properties</a></li>
                <li><a href="#" className="hover:text-red-400">About</a></li>
                <li><a href="#" className="hover:text-red-400">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <p>123 Main St, Baltimore, MD 21201</p>
              <p>Phone: (410) 555-1234</p>
              <p>Email: info@multiplehomes.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-400">Facebook</a>
                <a href="#" className="hover:text-red-400">Twitter</a>
                <a href="#" className="hover:text-red-400">Instagram</a>
                <a href="#" className="hover:text-red-400">LinkedIn</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2023 Multiple Homes, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

