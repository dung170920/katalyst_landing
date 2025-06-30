"use client"
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/Button'
import Link from 'next/link'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MenuAlt, TimesSquare } from 'magicon'

const LINKS = [
  { path: '/', label: 'Home' },
  { path: '/', label: 'Services' },
  { path: '/', label: 'Portfolio' },
  { path: '/', label: 'Pricing' },
  { path: '/', label: 'About' },
]

const Navbar = () => {
  return (
    <Disclosure as={"nav"} className='pt-12 flex justify-between items-center relative'>
      {({ open }) => (
        <>
          {/* Logo */}
          <Image src={"/logo.svg"} alt='logo' height={60} width={60} />

          {/* Desktop Nav */}
          <ul className='p-2 md:flex items-center xl:gap-14 gap-7 hidden'>
            {LINKS.map((item, index) => (
              <li key={index} className='xl:text-lg'>
                <Link href={item.path}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-4">
            <Button href='/'>Contact Us</Button>
            {/* Mobile Toggle */}
            <DisclosureButton className="md:hidden text-white">
              {open ? <TimesSquare size={24} /> : <MenuAlt size={24} />}
            </DisclosureButton>
          </div>

          {/* Mobile Panel */}
          <DisclosurePanel className="absolute top-full left-0 w-full bg-grayscale-600 z-40 shadow-md lg:hidden rounded-sm mt-4">
            <ul className="flex flex-col px-4 py-4 gap-4 items-end">
              {LINKS.map((item, index) => (
                <li key={index} className='xl:text-lg'>
                  <Link href={item.path}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar