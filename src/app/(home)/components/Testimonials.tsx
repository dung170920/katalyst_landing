"use client"
import Tag from '@/components/ui/Tag'
import StarIcon from '@/assets/icons/star.svg'
import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import QuoteUpIcon from '@/assets/icons/quoteup.svg'
import { ArrowLeftSmall, ArrowRightSmall } from 'magicon'

const testimonials = [
  { id: 1, avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D', name: 'Alan Baker', position: 'CEO of Redbird Company', content: "Working with Katalyst Studio has been an incredible experience. They truly listened to our needs and delivered a stunning design that exceeded our expectations. We couldn't be happier with the final product!" },
  { id: 2, avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D', name: 'Theresa Webb', position: 'CEO of Redbird Company', content: "From start to finish, working with Katalyst Studio was a seamless experience. They were professional, creative, and delivered on time and within budget. We're thrilled with the final result and look forward to working with them again in the future." }, { id: 3, avatar: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXJ8ZW58MHx8MHx8fDA%3D', name: 'Jane Cooper', position: 'CEO of Redbird Company', content: "The team at Katalyst Studio was a pleasure to work with. They were communicative, responsive, and provided valuable insights that helped us refine our design vision. We highly recommend them to anyone looking for top-notch design solutions." }
]

const Testimonials = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className='text-white relative'>
      <div className="bg-primary h-10 transform -skew-y-2 absolute w-full -z-[2px] bottom-0" />
      <div className="bg-grayscale-800 absolute inset-0 -z-[1px]" style={{ clipPath: 'polygon(0 0%, 100% 0%, 100% 96%, 0% 100%)' }} />
      <Tag text='Testimonials' className='absolute left-0 top-40 bg-grayscale-600' />
      <StarIcon className="w-10 h-10 fill-white absolute lg:left-1/6 lg:top-40 left-10 top-5" />
      <StarIcon className="w-10 h-10 fill-white absolute lg:right-40 lg:top-1/6 right-10 top-10" />
      <div className="lg:pt-40 pt-20 lg:pb-24 pb-12 relative z-0">
        <div className="container px-6 md:px-12">
          <h2 className='text-center max-w-2xl fs-40 font-mono mx-auto mb-6'>
            <div className="w-auto h-auto md:px-8 md:py-3 px-6 py-2 bg-primary text-grayscale-800 inline-flex place-items-center rounded-[2vh_2.5vh] [transform:skew(-20deg)] mb-2">
              <div className="[transform:skew(20deg)]">
                Testimonials
              </div>
            </div>
            {" "}that Speak to Our Results
          </h2>
          <p className='text-center mx-auto max-w-3xl leading-relaxed text-grayscale-300 text-xl'>Read through our testimonials to see why our clients love working with us and how we can help you achieve your business goals through creative and effective design.</p>
        </div>
        <Swiper
          spaceBetween={24}
          slidesPerView={'auto'}
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          initialSlide={1}
          centeredSlides
        >
          {testimonials.map(item => (
            <SwiperSlide key={item.id} className='max-w-[680px] w-full pt-12'>
              {({ isActive }) => (
                <div className={`flex flex-col bg-grayscale-700 rounded-lg md:px-10 px-8 md:py-6 py-4 gap-10 ${isActive ? 'opacity-100 -translate-y-4' : 'opacity-40'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-4">
                      <div className="md:size-16 size-12 rounded-full shrink-0">
                        <Image src={item.avatar} alt="" width={64} height={64} className='rounded-full object-cover w-full h-full' />
                      </div>
                      <div>
                        <h5 className='fs-24 mb-1.5'>{item.name}</h5>
                        <span className='text-grayscale-200 text-sm md:text-base'>{item.position}</span>
                      </div>
                    </div>
                    <QuoteUpIcon />
                  </div>
                  <p>{item.content}</p>
                </div>
              )}

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-4 md:my-10 my-5">
          <button className="md:size-12 size-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-grayscale-500" ref={prevRef}>
            <ArrowLeftSmall size={28} />
          </button>
          <button className="md:size-12 size-10 rounded-full border border-white flex items-center justify-center cursor-pointer hover:bg-grayscale-500" ref={nextRef}>
            <ArrowRightSmall size={28} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonials