import React from 'react'
import Image from 'next/image'
import {BiHomeSmile} from "react-icons/bi"
import {FiSettings} from "react-icons/fi"
import {MdHowToVote} from "react-icons/md"

const Navbar = () => {
  return (
        <div className='flex items-center space-x-6 md:space-x-28 py-3 pl-3 '>
            <div className=' flex'>
            <Image src='/svg/bolt.svg' width={25} height={25} alt='Bolt'/>
            <h1 className='font-semibold text-4xl tracking-wide '>swiftpolls</h1>
            </div>
            <div className='space-x-2 md:space-x-4 flex'>
                <BiHomeSmile />
                <FiSettings/>
                <MdHowToVote/>
            
            </div>
        </div>
  )
}

export default Navbar