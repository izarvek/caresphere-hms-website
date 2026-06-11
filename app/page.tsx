import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/home/HomeHero'
import Badge from '@/components/ui/Badge'
import Title from '@/components/ui/Title'
import Cards from '@/components/home/HomeCards'
import WhyCareSphere from '@/components/home/HomeWhyCareSphere'
import NewsLetter from '@/components/common/NewsLetter'
import Footer from '@/components/layout/Footer'

const page = () => {
  return (
    <div className="px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28">
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