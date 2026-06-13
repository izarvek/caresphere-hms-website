import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Testimonials from '@/components/about/AboutTestimonials'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
        <Navbar/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default page