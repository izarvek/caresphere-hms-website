import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import NotFound from '@/components/common/NotFound'
import React from 'react'

const notFound = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
      <Navbar/>
      <NotFound/>
      <Footer/>
    </div>
  )
}

export default notFound