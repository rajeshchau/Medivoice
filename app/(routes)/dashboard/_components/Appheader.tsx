import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

const menuOption=[
    {
        id:1,
        name:'Home',
        path:'/home'
    },
    {
        id:2,
        name:'History',
        path:'/history'
    },
    {
        id:3,
        name:'Pricing',
        path:'/pricing'
    },
    {
        id:4,
        name:'Profile',
        path:'/profile'
    }
]

const Appheader = () => {
  return (
    <div className='flex items-center justify-between p-4 shadow px-4 md:px-10 lg:px-10 xl:px-10'>
        <Image src={'/logo.png'} alt="logo" width={90} height={50} />  
        <div className='hidden md:flex gap-12 items-center '>
            {menuOption.map((option,index) => (
                <div key={index}>
                    <h2 className='hover:font-bold cursor-pointer'>{option.name}</h2>
                </div>
            ))}
        </div>
        <UserButton />
    </div>
  )
}

export default Appheader