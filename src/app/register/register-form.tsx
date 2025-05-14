'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'

export default function RegisterForm() {
  return (
    <div className='flex flex-col w-full xl:w-[45%] px-10 xl:px-32 lg:px-72 md:px-55 py-8 overflow-y-scroll'>
      <div className='mb-15 md:mb-22 xl:mb-28'>
        <Link href='/'>
          <Image src='/assets/svg/logo.svg' alt='Logo' width={79} height={40} className='' />
        </Link>
      </div>
      <h1 className='text-[60px] leading-[82px] tracking-[0.1px] font-bold mb-4 text-[#2B2B43]'>
        Register
      </h1>
      <p className='text-[14px] leading-[20px] tracking-[0.1px] text-[#545563] mb-6 md:mb-8'>
        Create an account to start your journey with us. It&apos;s quick and easy!
      </p>
      <div className='space-y-5 md:space-y-7'>
        <div className='space-y-2'>
          <Label htmlFor='email' className='text-xs leading-4 text-[#545563] font-semibold'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='name@example.com'
            className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
          />
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password' className='text-xs leading-4 text-[#545563] font-semibold'>
            Password
          </Label>
          <div className='relative'>
            <Input
              id='password'
              type='password'
              placeholder='min. 8 characters'
              className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
            />
            <button className='absolute right-3 top-1/2 -translate-y-1/2'>
              <Image
                src='/assets/svg/eye.svg'
                alt='Logo'
                width={20}
                height={20}
                className='cursor-pointer'
              />
            </button>
          </div>
        </div>
        <Button className='mt-2 w-full bg-[#4E60FF] text-white hover:bg-[#4050eb] transition h-12 rounded-lg font-medium text-base'>
          Sign Up
        </Button>
      </div>
      <div className='mt-22 text-center text-sm leading-5 tracking-[0.1px] text-[#545563] pb-2'>
        Already have an account?{' '}
        <Link href='/login' className='text-[#4E60FF] font-medium hover:underline'>
          Login here
        </Link>
      </div>
    </div>
  )
}
