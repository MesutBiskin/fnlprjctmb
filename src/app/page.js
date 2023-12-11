import Link from 'next/link'
import Header from '../components/layout/Header'
import Hero from '../components/layout/Hero'
import HomeMenu from '../components/layout/HomeMenu'
import SectionHeaders from '../components/layout/SectionHeaders'


export default function Home() {
  return (
   <>
  
   <Hero />
   <HomeMenu/>
   <section className='text-center my-16'>
    <SectionHeaders 
    subHeader={'Our story'}
    mainHeader={'About us'}
    />
    <div className='text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4'>
    <p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus aliquid quam hic veritatis ad neque fuga quisquam laudantium obcaecati illo soluta,!
</p>
    <p >
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repellendus aliquid quam hic veritatis ad neque fuga quisquam laudantium obcaecati illo soluta,!
</p>
</div>
   </section>
   <section className='text-center my-8'>
    <SectionHeaders 
    subHeader={'For order'}
    mainHeader={'Call us'}
    />
    <a className="text-2xl mmt-8" href="Tel:+1 561-561-9999">+1 561-561-9999</a>

   </section>
  

   </>
  )
}


