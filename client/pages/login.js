import React from 'react'
import SignInForm from '../components/sign-in-form'
import RegisterForm from '../components/register-form'

const Login = () => {
  return (
    <div  className="w-screen h-[90vh] md:h-[80vh]">
      <div className='flex flex-col md:flex-row pt-8  items-center md:items-start h-full space-y-10 md:space-y-0 md:space-x-44 md:justify-center'>
        <RegisterForm/>
        <SignInForm/>
      </div>
    </div>
  )
}

export default Login
