"use client"
import Tag from '@/components/ui/Tag'
import { cn } from '@/utils'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react'
import { ArrowRight, ArrowUpRight } from 'magicon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    id: 'uiux',
    label: 'UI/UX Design',
    number: '01',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHV4JTIwdWklMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'web',
    label: 'Web Development',
    number: '02',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlYiUyMERldmVsb3BtZW50fGVufDB8fDB8fHww'
  },
  {
    id: '3d',
    label: '3D Designs',
    number: '03',
    image: 'https://images.unsplash.com/photo-1708199370329-4e9c67823075?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fDNEJTIwRGVzaWduc3xlbnwwfHwwfHx8Mg%3D%3D'
  },
  {
    id: 'motion',
    label: 'Motion Graphics',
    number: '04',
    image: 'https://images.unsplash.com/photo-1732032506091-6fd57cc3113e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vdGlvbiUyMEdyYXBoaWNzfGVufDB8fDB8fHwy'
  }
]

const Services = () => {
  return (
    <div className='lg:mt-80 md:mt-40 mt-10'>
      <div className="container flex flex-col lg:flex-row justify-between lg:gap-10 gap-5 px-6 md:px-12">
        <h3 className='font-mono fs-40'>
          Digital thinkers. Small studios build awesome design.
        </h3>
        <p className='text-grayscale-500 text-xl leading-relaxed'>Despite being a small team, we believe that our size gives us an advantage, allowing us to be nimble, adaptable, and able to work closely with our clients to deliver truly awesome designs.</p>
      </div>
      <div className="container flex flex-col md:flex-row mt-1.5 lg:gap-10 gap-5 w-full relative px-6 md:px-12">
        <Image src={"/star.svg"} alt='star' height={80} width={80} className='absolute -left-8' />
        <div className="aspect-video md:rounded-lg rounded md:mt-11 flex-2 overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1552581234-26160f608093?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpZ2l0YWwlMjBhZ2VuY3l8ZW58MHx8MHx8fDA%3D" alt='' height={1000} width={1000} className='w-full h-full' />
        </div>
        <div className="aspect-retro md:rounded-lg rounded flex-1 overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1666698809123-44e998e93f23?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlnaXRhbCUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D" alt='' height={1000} width={1000} className='w-full h-full' />
        </div>
      </div>

      <div className='lg:mt-[120px] lg:mb-36 mt-20 mb-18 relative'>
        <Tag text='What We Do' className='absolute left-0 top-3' />
        <h3 className='container lg:pl-0 pl-14 font-mono fs-40 lg:mb-10 mb-5'>Our <div className="w-auto h-auto px-8 py-3 bg-primary text-grayscale-800 inline-flex place-items-center rounded-[2vh_2.5vh] [transform:skew(-20deg)]">
          <div className="[transform:skew(20deg)]">
            Services
          </div>
        </div>
        </h3>
        <TabGroup>
          <div className="container flex gap-14 flex-col lg:flex-row px-6 md:px-12">
            <TabList className="flex-1 min-h-full">
              <p className='text-grayscale-500 text-xl leading-relaxed lg:mb-10 mb-5 lg:pl-0 md:pl-3 pl-8'>Katalyst Studio offers a range of design services tailored to each client</p>
              <ul className='flex flex-col gap-8'>
                {services.map((item) => (
                  <Tab
                    key={item.id}
                    className={({ selected }) =>
                      cn(
                        'flex items-center gap-6 lg:text-2xl text-base rounded-full lg:px-10 lg:py-8 px-5 py-4 cursor-pointer focus:not-data-focus:outline-none',
                        selected
                          ? 'bg-grayscale-900 text-white font-semibold'
                          : 'bg-transparent text-grayscale-500 border border-grayscale-200 font-medium'
                      )
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={cn('font-mono', selected ? 'text-primary' : '')}>{item.number}</span>
                        <span>{item.label}</span>
                        <ArrowRight variant='filled' size={28} className='ml-auto' />
                      </>
                    )}
                  </Tab>
                ))}
              </ul>
            </TabList>

            <TabPanels className="flex-2">
              {services.map((item) => (
                <TabPanel key={item.id} className="grid gap-6 md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1">
                  <div className="md:col-span-2 md:row-span-2 max-h-[620px]">
                    <Image
                      src={item.image}
                      alt='Service image'
                      width={1000}
                      height={1000}
                      className='w-full h-full object-cover rounded-lg'
                    />
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg bg-grayscale-700 text-white p-6 xl:p-14 flex justify-between flex-col">
                    <p className="text-lg leading-relaxed">Ever wondered how design magic happens?</p>
                    <Link href="/" className='w-full flex items-center gap-3.5'>
                      <span className='lg:text-[28px] text-xl font-semibold leading-snug'>See how we work</span>
                      <span className='size-16 rounded-full bg-grayscale-600 flex-shrink-0 flex items-center justify-center'>
                        <ArrowUpRight variant='filled' size={24} />
                      </span>
                    </Link>
                  </div>
                  <div className="col-span-1 row-span-1 rounded-lg bg-primary p-6 xl:p-14 flex justify-between flex-col">
                    <p className="text-lg leading-relaxed">Looking for design experts who can bring your vision to life?</p>
                    <Link href="/" className='w-full flex items-center gap-3.5'>
                      <span className='lg:text-[28px] text-xl font-semibold leading-snug'>Meet our expert</span>
                      <span className='size-16 rounded-full bg-white flex-shrink-0 flex items-center justify-center'>
                        <ArrowUpRight variant='filled' size={24} />
                      </span>
                    </Link>
                  </div>
                </TabPanel>
              ))}
            </TabPanels>
          </div>
        </TabGroup>
      </div>
    </div>
  )
}

export default Services