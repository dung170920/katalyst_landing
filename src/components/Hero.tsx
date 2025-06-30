import React from 'react'
import Navbar from './Navbar'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="text-white relative">
      <div className="absolute inset-0 bg-grayscale-800 -z-10" style={{ backgroundImage: 'url("/grid.svg")', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 95%)' }}></div>
      <div className='container text-center px-6 md:px-12'>
        <Navbar />
        <h1 className='xl:mt-[132px] mt-16 mb-4 fs-80 font-mono'>
          <div className="w-auto h-auto px-8 py-3 bg-primary text-grayscale-800 inline-flex place-items-center rounded-[2vh_2.5vh] [transform:skew(-20deg)] mb-2">
            <div className="[transform:skew(20deg)]">
              Katalyst
            </div>
          </div>
          <span> Studio</span>
        </h1>
        <h2 className='font-mono fs-48'>Indonesia-Based Digital Agency</h2>
        <p className='max-w-[958px] mx-auto fs-24 leading-relaxed text-grayscale-200 mt-8 bg-linear-to-b from-[#272727] from-0% to-grayscale-800'>Katalyst Design Studio is a dynamic and innovative design agency that brings creative ideas to life.  We works with a wide range of clients to develop unique and effective branding, web design, and graphic design solutions.</p>
        <div className="relative inline-flex max-sm:flex-wrap mx-auto gap-2 md:translate-y-1/2 mt-4 items-center justify-center">
          <div className="aspect-square rounded-lg border-8 border-white h-[150px] lg:h-[200px] xl:h-[300px] relative rotate-6 overflow-hidden z-10 shadow-[0_8px_80px_rgba(0,0,0,0.06)]">
            <Image src="https://cdn.dribbble.com/userupload/18354758/file/original-f957d3411a7c921b707e05b63c5187c4.png?format=webp&resize=640x480&vertical=center" alt='' fill className='object-cover' />
          </div>
          <div className="aspect-square rounded-lg border-8 border-white h-[150px] lg:h-[200px] xl:h-[300px] relative -rotate-8 overflow-hidden shadow-[0_8px_80px_rgba(0,0,0,0.06)]">
            <Image src="https://cdn.dribbble.com/userupload/14436859/file/original-9fcfcc3fa44a97512f763674044ec3f0.jpg?format=webp&resize=640x480&vertical=center" alt='' fill className='object-cover' />
          </div>
          <div className="aspect-square rounded-lg border-8 border-white h-[150px] lg:h-[200px] xl:h-[300px] relative rotate-3 overflow-hidden ml-2 shadow-[0_8px_80px_rgba(0,0,0,0.06)]">
            <Image src="https://cdn.dribbble.com/userupload/17918229/file/original-9f7953a8094024aa9eb44a68a2591590.png?format=webp&resize=640x480&vertical=center" alt='' fill className='object-cover' />
          </div>
          <div className="aspect-square rounded-lg border-8 border-white h-[150px] lg:h-[200px] xl:h-[300px] relative -rotate-8 overflow-hidden shadow-[0_8px_80px_rgba(0,0,0,0.06)]">
            <Image src="https://cdn.dribbble.com/userupload/42689882/file/original-df68ad18743a5025539192c3585fd3a9.png?format=webp&resize=640x480&vertical=center" alt='' fill className='object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero