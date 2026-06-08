import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/Hero'
import Badge from '@/components/ui/Badge'
import Title from '@/components/ui/Title'
import Cards from '@/components/home/Cards'
import WhyCareSphere from '@/components/home/WhyCareSphere'
import NewsLetter from '@/components/home/NewsLetter'
import Footer from '@/components/layout/Footer'

const page = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Badge title="Core Services"/>
      <Title title="Healthcare Services"/>
      <Cards/>
      <WhyCareSphere/>
      <NewsLetter/>
      <Footer/>
    </div>
  )
}

export default page