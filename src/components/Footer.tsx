import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const socials = [
  {
    path: '/',
    img: 'fb.svg'
  },
  {
    path: '/',
    img: 'linkedin.svg'
  },
  {
    path: '/',
    img: 'github.svg'
  },
  {
    path: '/',
    img: 'dribble.svg'
  }
]

const Footer = () => {
  return (
    <footer className='bg-grayscale-800 pb-8 pt-14 text-white'>
      <div className="container px-6 md:px-12">
        <div className="flex flex-col gap-5 font-mono mx-auto text-center lg:mb-32 mb-16">
          <div className='inline-flex gap-8 items-center justify-center flex-col md:flex-row'>
            <Image src={"/logo.svg"} alt='logo' height={80} width={80} />
            <span className='fs-80'>
              <span className='text-primary'>Katalyst </span>
              Studio
            </span>
          </div>
          <p className='fs-32'>Innovate. Inspire. Create</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p>Copyright © {new Date().getFullYear()} Catalyst Studio. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {socials.map(item => (
              <Link key={item.img} href={item.path} className='size-10 rounded-full flex items-center justify-center bg-grayscale-600'>
                <Image src={`/${item.img}`} alt='' height={20} width={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer