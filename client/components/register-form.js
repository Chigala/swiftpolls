import React from 'react'
import Image from 'next/image'
import { HiUserAdd } from 'react-icons/hi'

const RegisterForm = () => {
  return (
    <div className='flex flex-col space-y-2'>
      <p className=''>Register</p>
      
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
          placeholder='username'
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

      <div className='relative'>
        <input
          type='text'
          placeholder='Verify Password'
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


      <div className='border-2 flex items-center justify-center space-x-2 border-black rounded-md '>
        <HiUserAdd />
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default RegisterForm
