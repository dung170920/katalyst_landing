import Tag from '@/components/ui/Tag'
import React from 'react'
import StarIcon from '@/assets/icons/star.svg'
import Image from 'next/image'

const works = [
  {
    id: 'discovery',
    label: 'Discovery',
    description: 'We start by getting to know our clients, their business goals, and their target audience.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YWdlbmN5fGVufDB8fDB8fHww',
    number: '01',
  },
  {
    id: 'strategy',
    label: 'Strategy',
    description: 'We develop a strategy that outlines the design approach, user experience, and key features of the project.',
    img: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzaWduJTIwYWdlbmN5fGVufDB8fDB8fHww',
    number: '02',
  },
  {
    id: 'design',
    label: 'Design',
    description: 'We work closely with our clients to get feedback and iterate on the design until it meets their needs and vision.',
    img: 'https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzaWduJTIwYWdlbmN5fGVufDB8fDB8fHww',
    number: '03',
  },
  {
    id: 'development',
    label: 'Development',
    description: 'Once the design is finalized, our development team takes over to build the final product.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGRlc2lnbiUyMGFnZW5jeXxlbnwwfHwwfHx8MA%3D%3D',
    number: '04',
  }
]

const Works = () => {
  return (
    <div className='text-white relative'>
      <div className="bg-primary h-10 transform -skew-y-2 absolute w-full -z-[2px]" />
      <div className="bg-grayscale-800 absolute inset-0 -z-[1px]" style={{ clipPath: 'polygon(0 1%, 100% 0%, 100% 85%, 0% 90%)' }} />
      <Tag text='How It Works' className='absolute left-0 top-40 bg-grayscale-600' />
      <StarIcon className="w-10 h-10 fill-white absolute lg:left-1/6 left-10 lg:top-40 top-10" />
      <StarIcon className="w-10 h-10 fill-white absolute lg:right-40 right-2 top-1/6" />
      <div className="container lg:py-40 py-20 relative z-0 px-6 md:px-12">
        <h2 className='text-center max-w-2xl fs-40 font-mono mx-auto mb-6'>How Our Design Process {" "}
          <div className="w-auto h-auto px-8 py-3 bg-primary text-grayscale-800 inline-flex place-items-center rounded-[2vh_2.5vh] [transform:skew(-20deg)]">
            <div className="[transform:skew(20deg)]">
              Works
            </div>
          </div>
        </h2>
        <p className='text-center mx-auto max-w-3xl leading-relaxed text-grayscale-300 text-xl'>Katalyst Studio follows a collaborative and iterative approach to design, with a focus on understanding and meeting the unique needs of each client.</p>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20 gap-4">
          {works.map(item => (
            <div className="lg:rounded-xl rounded-lg bg-grayscale-700 flex flex-col gap-10 lg:p-12 md:p-10 p-6" key={item.id}>
              <span className='font-mono fs-32 text-grayscale-400'>{item.number}</span>
              <div className="lg:rounded-lg rounded w-full aspect-video overflow-hidden">
                <Image src={item.img} alt={item.label} height={1000} width={1000} className='w-full h-full' />
              </div>
              <div>
                <h3 className='font-mono fs-24 mb-4'>{item.label}</h3>
                <p className='text-lg'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works