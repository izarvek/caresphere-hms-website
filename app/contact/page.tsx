import NewsLetter from '@/components/common/NewsLetter'
import ContactHelp from '@/components/contact/ContactHelp'
import ContactHero from '@/components/contact/ContactHero'
import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Title from '@/components/ui/Title'
import React from 'react'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
        <Navbar/>
        <ContactHero/>
        <Title title="We’re Here to Help?" />
        <ContactHelp/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default page