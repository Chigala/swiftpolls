import React from 'react'
import Image from 'next/image'
import { FiLogIn } from "react-icons/fi"

const SignInForm = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <p className=''>Login</p>

      <div className='relative'>
        <input
          type='text'
          placeholder='email'
          className='outline-none pr-8 pl-1 py-1 border-2 border-black rounded-md'
        />
        <div className='absolute cursor-pointer right-2 bottom-1 w-fit h-fit '>
          <Image
            src='/svg/cancelLogo.svg'
            width={15}
            height={15}
            className='m-4'
            alt='google icon'
          />
        </div>
      </div>

      <div className='relative'>
        <input
          type='text'
          placeholder='Password'
          className='outline-none pr-8 pl-1 py-1 border-2 border-black rounded-md'
        />
        <div className='absolute cursor-pointer right-2 bottom-1 w-fit h-fit '>
          <Image
            src='/svg/cancelLogo.svg'
            width={15}
            height={15}
            className='m-4'
            alt='google icon'
          />
        </div>
      </div>

      <div className='space-y-2 pt-4'>
          <div className='border-2 flex items-center justify-center space-x-1 border-black rounded-md '>
          <FiLogIn/>
            <button>Sign in</button>
          </div>
          <p className='text-center'>Or</p>
          <div className='border-2 flex items-center justify-center space-x-1 border-black rounded-md '>
          <Image src='/svg/google.svg' width={15} height={15} alt='google-logo'/>
            <button>Google Sign in</button>
          </div>
      </div>
    </div>
  )
}

export default SignInForm
