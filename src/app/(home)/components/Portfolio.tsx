"use client"
import { Button } from '@/components/ui/Button'
import Tag from '@/components/ui/Tag'
import { ArrowLeftSmall, ArrowRightSmall, ArrowUpRight } from 'magicon'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import Image from 'next/image'

const portfolio = [
  {
    id: 1,
    img: ['https://cdn.dribbble.com/userupload/5399208/file/original-8ac99d84edd82a8419128682313486be.png?resize=2048x1536&vertical=center', 'https://cdn.dribbble.com/userupload/5526602/file/original-22e1d70498a1bce568674779059e4984.png?resize=2048x1536&vertical=center'],
    label: 'Coca - Tech Startup Landing Page',
    description: 'We start by getting to know our clients, their business goals, and their target audience. This involves conducting research, analyzing data, and discussing ideas with our clients to gain a deep understanding of their needs.',
    types: ['UX Research', 'Wireframe', 'Visual Design']
  },
  {
    id: 2,
    img: ['https://cdn.dribbble.com/userupload/37886010/file/original-b3f43ed0d5568b0fb8204beaae421b36.png?format=webp&resize=800x600&vertical=center', 'https://cdn.dribbble.com/userupload/37916158/file/original-30f4347e863deaa6c5b3986614eec3be.png?resize=1504x1128&vertical=center'],
    label: 'Consuly - Consulting Landing Page View',
    description: 'Consuly is a platform website that provides comprehensive services to support your business by leveraging strategy to drive people, processes, and information.',
    types: ['UX Research', 'Wireframe', 'Visual Design']
  }
]

const Portfolio = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className='lg:mb-16 mb-8 relative'>
      <Tag text='Portfolio' className='absolute left-0 top-3 max-sm:top-24' />
      <div className="container flex items-end justify-between gap-6 px-6 md:px-12 flex-col md:flex-row">
        <h2 className='max-w-xl fs-40 font-mono'>Our {" "}
          <div className="w-auto h-auto px-8 py-3 bg-primary text-grayscale-800 inline-flex place-items-center rounded-[2vh_2.5vh] [transform:skew(-20deg)] mb-2">
            <div className="[transform:skew(20deg)]">
              Best Work
            </div>
          </div>
          {" "} of Successful Projects
        </h2>
        <Button href='/' variant={"outline"} intent={'dark'}>See More <ArrowRightSmall size={20} /></Button>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
      >
        {portfolio.map(item => (
          <SwiperSlide key={item.id} className='flex flex-col'>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5 items-center mb-10 mt-14 container px-6 md:px-12">
              <div className="rounded-lg border-8 border-white overflow-hidden aspect-thumbnail shadow-[0_6px_24px_rgba(0,0,0,.08)]">
                <Image src={item.img[0]} alt="" height={1000} width={1000} className='h-full w-full' />
              </div>
              <div className="rounded-lg border-8 border-white overflow-hidden aspect-thumbnail shadow-[0_6px_24px_rgba(0,0,0,.08)]">
                <Image src={item.img[1]} alt="" height={1000} width={1000} className='h-full w-full' />
              </div>
            </div>
            <div className="flex gap-4 items-center justify-center">
              {item.types.map(type => (
                <span className='rounded-full md:px-3 md:py-1.5 px-2 py-1 lg:text-lg text-sm bg-grayscale-100 text-grayscale-400' key={type}>{type}</span>
              ))}
            </div>
            <h3 className='font-mono fs-32 text-center mt-6 mb-2'> {item.label}
              <span className='inline-flex items-center justify-center rounded-full bg-primary size-10 ml-2'><ArrowUpRight /></span>
            </h3>
            <p className='leading-relaxed text-lg lg:max-w-3xl max-w-xl text-center mx-auto text-grayscale-500'>{item.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="absolute lg:left-20 left-4 top-1/2 -translate-y-1/2 md:size-14 size-10 rounded-full border border-grayscale-800 flex items-center justify-center cursor-pointer hover:bg-grayscale-800 hover:text-white z-10 bg-white" ref={prevRef}>
        <ArrowLeftSmall size={28} />
      </button>
      <button className="absolute lg:right-20 right-4 top-1/2 -translate-y-1/2 md:size-14 size-10 rounded-full border border-grayscale-800 flex items-center justify-center cursor-pointer hover:bg-grayscale-800 hover:text-white z-10 bg-white" ref={nextRef}>
        <ArrowRightSmall size={28} />
      </button>
    </div>
  )
}

export default Portfolio