import Image from 'next/image'
import React from 'react'
import StarIcon from '@/assets/icons/star.svg'
import { Button } from '@/components/ui/Button'

const Contact = () => {
  return (
    <div className="container py-20 px-6 md:px-12">
      <div className="flex items-center gap-10 justify-between font-mono lg:fs-72 fs-48 font-bold flex-col md:flex-row">
        <span>Innovate</span>
        <Image src="/star.svg" height={48} width={48} alt='' />
        <span>Inspire</span>
        <Image src="/star.svg" height={48} width={48} alt='' />
        <span>Create</span>
      </div>
      <div className="flex gap-6 items-center my-14">
        <div className="flex-1 h-1 bg-grayscale-800" />
        <StarIcon className="w-8 h-8 fill-grayscale-800" />
        <div className="flex-1 h-1 bg-grayscale-800" />
      </div>
      <Image src={"https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D"} alt='' width={1000} height={1000} className='w-full aspect-[22/9] rounded mb-10' />
      <p className='fs-24 max-w-[956px] mb-6 mx-auto text-center'>Finding the right talent for your business can be a daunting task. Let Catalyst Studio&rsquo;s hiring agency take the guesswork out of the process and help you find the perfect fit for your team</p>
      <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto flex-col md:flex-row">
        <Button href='/' intent={"dark"} className='flex-1 text-lg max-sm:w-full'>Hire Us</Button>
        <Button href='/' intent={"dark"} variant={"outline"} className='flex-1 text-lg max-sm:w-full'>Book Consultation</Button>
      </div>
    </div>
  )
}

export default Contact