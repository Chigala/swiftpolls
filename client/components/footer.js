import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="pb-4 md:pb-0">
      <div className="flex justify-center ">
        <p className="text-[12px] mr-2">@chigala kinglsey</p>
        <div className="mr-1">
            <Image src='/svg/github.svg' width={15} height={15} alt='github-logo' />
        </div>
        <div>
            <Image src='/svg/twitter.svg' width={15} height={15} alt='twitter-logo' />
        </div>
      </div>
    </div>
  )
}

export default Footer
