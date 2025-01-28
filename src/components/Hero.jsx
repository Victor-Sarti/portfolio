import React from 'react'
import   perfil from '../assets/Eu.png'
const Hero = () => {
  return (
    <section id='home' className='pt-28 lg:pt-36'>
        <div className='container lg:grid lg:grid-cols-2 items-center lg:gap-10 '>
           <div>
                <div className='flex items-center gap-3'>
                    <figure className='img-box w-9 h-9 rounded-lg'>
                        <img src="" width={40} height={40} alt="" className='img-cover' />
                    </figure>
                    <div className=' flex items-center gap-1.5 text-zinc-400 text-sm 
                     tracking-wide'>
                        <span className=' relative w-2 h-2 rounded-full bg-emerald-400'>
                            <span className=' absolute inset-0  rounded-full bg-emerald-400 animate-ping'></span>
                        </span>
                        Available for Work 
                    </div>
                </div>
                <h2 className=''>
                    Building Scalable Modern Websites for the Future 
                </h2>
                <div className=''>
                    ButtonPrimary 

                    ButtonOutline 
                </div>
            </div>

            <div className="">
                
                    <img src={perfil} alt="" width={656} height={800} className=" w-full " />

            </div>
        </div>
    </section>
  )
}

export default Hero
