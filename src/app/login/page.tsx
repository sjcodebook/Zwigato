'use client'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

// Carousel slide data
const carouselSlides = [
  {
    id: 1,
    title: 'Leave reviews for all meals',
    description:
      'Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus molestiae, eirmod assentior eum ne, et omnis antiopam mel.',
    content: (
      <div className='flex gap-x-6 text-gray-900 w-full'>
        {/* Left Column */}
        <div className='w-0 flex-grow-[7] space-y-4'>
          {' '}
          {/* Approx 7/12 width */}
          {/* Overall Rating */}
          <div className='bg-white rounded-lg p-4 shadow-sm'>
            <div className='flex justify-between items-start'>
              <div>
                <p className='text-xs text-gray-500'>Overall rating</p>
                <div className='flex items-center gap-1 mt-1'>
                  <p className='text-2xl font-bold text-gray-900'>4.2</p>
                  <div className='flex items-center'>
                    {[...Array(3)].map((_, i) => (
                      <svg
                        key={`filled-${i}`}
                        className='w-4 h-4 text-yellow-400'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <svg
                        key={`empty-${i}`}
                        className='w-4 h-4 text-gray-300'
                        fill='currentColor'
                        viewBox='0 0 20 20'>
                        <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                      </svg>
                    ))}
                  </div>
                  <p className='text-xs text-gray-500 ml-1.5'>3 votes</p>
                </div>
              </div>
              <button className='text-xs text-[#5061FC] border border-[#5061FC] rounded-md px-3 py-1.5 font-medium hover:bg-[#E9EFFF] whitespace-nowrap'>
                Leave review
              </button>
            </div>
          </div>
          {/* Sort By */}
          <div className='bg-white rounded-lg p-3 shadow-sm flex justify-between items-center'>
            <span className='text-sm text-gray-500'>
              Sort by: <span className='text-gray-900 font-medium'>Newest first</span>
            </span>
            <svg
              className='w-4 h-4 text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </div>
          {/* Review 1 (Savannah) */}
          <div className='bg-white rounded-lg p-3 shadow-sm'>
            <div className='flex items-start gap-3 mb-2'>
              <div className='h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0'>
                <Image
                  src='/placeholder-user.jpg'
                  alt='User'
                  width={32}
                  height={32}
                  className='object-cover'
                />
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-900 font-medium text-sm'>Savannah Miles</p>
                  <span className='text-gray-500 text-xs'>30 days ago</span>
                </div>
                <div className='flex mt-0.5'>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-3 h-3 text-yellow-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className='text-gray-700 text-sm mb-3 leading-relaxed'>
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata
              est.
            </p>
            <div className='flex items-center gap-4 text-xs text-gray-500'>
              <button className='flex items-center gap-1 hover:text-[#5061FC]'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M6.633 10.5c.806 0 1.533-.424 2.033-1.097 0 .552.596 1.097 1.333 1.097h1.334c.737 0 1.333-.545 1.333-1.097V6.75c0-.825-.672-1.5-1.5-1.5h-1.5c-.825 0-1.5.675-1.5 1.5v1.518c0 .552-.596 1.097-1.333 1.097H6.633Z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5a3 3 0 0 0-3-3M15.75 10.5a3 3 0 0 1-3 3M15.75 10.5V18m-4.5-.75H9.75a.75.75 0 0 1-.75-.75V13.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-.75.75Z'></path>
                </svg>
                14
              </button>
              <button className='flex items-center gap-1 hover:text-red-500'>
                <svg
                  className='w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M7.498 15c.806 0 1.533.424 2.033 1.097C9.53 15.545 10.127 15 10.865 15h1.334c.737 0 1.333.545 1.333 1.097v2.153c0 .825-.672 1.5-1.5 1.5h-1.5c-.825 0-1.5-.675-1.5-1.5v-1.518c0-.552-.596-1.097-1.333-1.097H7.498Z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'></path>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 13.5a3 3 0 0 1-3 3m0 0a3 3 0 0 0-3-3m3 3V6M11.25 17.25H9.75a.75.75 0 0 1-.75-.75V12.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-.75.75Z'></path>
                </svg>
                4
              </button>
            </div>
          </div>
          {/* Review 2 (Jacob) */}
          <div className='bg-white rounded-lg p-3 shadow-sm'>
            <div className='flex items-start gap-3 mb-2'>
              <div className='h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex-shrink-0'>
                <Image
                  src='/placeholder-user.jpg'
                  alt='User'
                  width={32}
                  height={32}
                  className='object-cover'
                />
              </div>
              <div className='flex-grow'>
                <div className='flex justify-between items-center'>
                  <p className='text-gray-900 font-medium text-sm'>Jacob Jones</p>
                  <span className='text-gray-500 text-xs'>3 days ago</span>
                </div>
                <div className='flex mt-0.5'>
                  {[...Array(4)].map((_, i) => (
                    <svg
                      key={i}
                      className='w-3 h-3 text-yellow-400'
                      fill='currentColor'
                      viewBox='0 0 20 20'>
                      <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                    </svg>
                  ))}
                  <svg className='w-3 h-3 text-gray-300' fill='currentColor' viewBox='0 0 20 20'>
                    <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z'></path>
                  </svg>
                </div>
              </div>
            </div>
            <p className='text-gray-700 text-sm leading-relaxed'>
              Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata
              est.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className='w-0 flex-grow-[5]'>
          {' '}
          {/* Approx 5/12 width */}
          <div className='bg-white rounded-xl overflow-hidden shadow-sm h-full flex flex-col'>
            <div className='relative h-40 w-full'>
              <Image src='/sushi.jpg' alt='Roll set' layout='fill' className='object-cover' />
            </div>
            <div className='p-4 flex flex-col flex-grow'>
              <p className='font-semibold text-gray-900 text-lg'>Roll set</p>
              <p className='text-xs text-gray-500 my-1 flex-grow leading-relaxed'>
                Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
                corpora, et saepe.
              </p>
              <div className='flex justify-between items-center mt-2'>
                <p className='text-xl font-bold text-gray-900'>$ 22.56</p>
                <button className='bg-[#E9EFFF] text-[#5061FC] rounded-full p-0 w-8 h-8 flex items-center justify-center hover:bg-[#dbe2fc] flex-shrink-0'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <line x1='12' y1='5' x2='12' y2='19'></line>
                    <line x1='5' y1='12' x2='19' y2='12'></line>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Order your favorite dishes',
    description:
      'Browse through our extensive menu of delicious dishes from various cuisines and order your favorites with just a few clicks.',
    content: (
      <div className='w-full flex flex-col items-center'>
        <div className='bg-white rounded-xl overflow-hidden shadow-sm mb-4 w-full max-w-md'>
          <div className='relative h-48 w-full'>
            <Image
              src='/sushi.jpg'
              alt='Roll set'
              width={400}
              height={200}
              className='object-cover w-full h-full'
            />
          </div>
          <div className='p-4'>
            <p className='font-medium text-gray-900'>Roll set</p>
            <p className='text-sm text-gray-500 mb-2'>
              Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
              corpora, et saepe.
            </p>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-semibold'>$22.56</p>
              <button className='text-[#5061FC]'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <line x1='12' y1='5' x2='12' y2='19'></line>
                  <line x1='5' y1='12' x2='19' y2='12'></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Fast delivery to your door',
    description:
      'Get your food delivered quickly to your doorstep by our reliable delivery partners, ensuring your meal arrives fresh and hot.',
    content: (
      <div className='w-full flex flex-col items-center'>
        <div className='bg-white rounded-xl overflow-hidden shadow-sm w-full max-w-md'>
          <div className='flex p-4'>
            <div className='w-1/3'>
              <div className='h-24 w-full bg-gray-200 rounded-lg overflow-hidden'>
                <Image
                  src='/nigiri.jpg'
                  alt='Nigiri set'
                  width={120}
                  height={120}
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
            <div className='w-2/3 pl-4'>
              <p className='font-medium text-gray-900'>Nigiri set</p>
              <p className='text-xs text-gray-500'>
                Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod
                corpora, et saepe.
              </p>
              <div className='flex justify-between items-center mt-2'>
                <p className='text-lg font-semibold'>$16.80</p>
                <div className='flex items-center space-x-2'>
                  <span className='text-sm'>1</span>
                  <button className='text-[#5061FC]'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'>
                      <line x1='12' y1='5' x2='12' y2='19'></line>
                      <line x1='5' y1='12' x2='19' y2='12'></line>
                    </svg>
                  </button>
                </div>
              </div>
              <button className='text-xs text-[#5061FC] mt-2 flex items-center'>
                Add to cart
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='12'
                  height='12'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='ml-1'>
                  <path d='M5 12h14M12 5l7 7-7 7'></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Track your order in real-time',
    description:
      'Monitor your order status and track delivery progress in real-time so you know exactly when your meal will arrive.',
    content: (
      <div className='w-full flex justify-center'>
        <div className='bg-white rounded-xl p-4 shadow-sm w-full max-w-md'>
          <div className='flex items-center justify-between mb-4'>
            <div>
              <p className='font-medium text-gray-900'>Order #23589</p>
              <p className='text-sm text-gray-500'>Estimated delivery: 25 min</p>
            </div>
            <div className='bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded'>
              On the way
            </div>
          </div>
          <div className='relative pt-1'>
            <div className='flex mb-2 items-center justify-between'>
              <div>
                <span className='text-xs font-semibold inline-block text-[#5061FC]'>75%</span>
              </div>
            </div>
            <div className='overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200'>
              <div
                style={{ width: '75%' }}
                className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-[#5061FC]'></div>
            </div>
            <div className='flex justify-between text-xs text-gray-600'>
              <span>Order placed</span>
              <span>Preparing</span>
              <span className='text-[#5061FC] font-medium'>On the way</span>
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
]

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('left')

  // Handle auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setSlideDirection('left') // Always move left for auto-rotation

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        setTimeout(() => {
          setAnimating(false)
        }, 50)
      }, 300)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (index === currentSlide) return

    // Determine direction based on index
    const direction = index > currentSlide ? 'left' : 'right'
    setSlideDirection(direction)

    setAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => {
        setAnimating(false)
      }, 50)
    }, 300)
  }

  // Compute transform values based on animation state and direction
  const getTransformValue = () => {
    if (!animating) return 'translateX(0)'
    return slideDirection === 'left' ? 'translateX(-40px)' : 'translateX(40px)'
  }

  const getEntryTransform = () => {
    return slideDirection === 'left' ? 'translateX(40px)' : 'translateX(-40px)'
  }

  return (
    <div className='h-screen w-screen flex bg-white overflow-hidden'>
      <div className='flex w-full h-full'>
        {/* Left Section - Login Form */}
        <div className='w-full md:w-[45%] px-6 py-8 md:px-28 lg:px-32 md:py-12 flex flex-col'>
          {/* Logo */}
          <div className='mb-10 md:mb-28'>
            <p className='text-lg text-[#5061FC] font-medium'>
              <span className='font-bold'>Food</span>
              <span> delivery</span>
            </p>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold mb-2 text-[#333647]'>Login</h1>
          <p className='text-gray-600 mb-6 md:mb-8'>
            Sign in with your data that you entered during your registration.
          </p>

          <div className='space-y-5 md:space-y-6'>
            {/* Email Field */}
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-gray-700 font-medium'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='name@example.com'
                className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
              />
            </div>

            {/* Password Field */}
            <div className='space-y-2'>
              <Label htmlFor='password' className='text-gray-700 font-medium'>
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
                  <svg
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M12 5.25C4.5 5.25 1.5 12 1.5 12C1.5 12 4.5 18.75 12 18.75C19.5 18.75 22.5 12 22.5 12C22.5 12 19.5 5.25 12 5.25Z'
                      stroke='#AAAAAA'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z'
                      stroke='#AAAAAA'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Checkbox */}
            <div className='flex items-center space-x-2'>
              <Checkbox id='remember' className='h-5 w-5 border-gray-300 rounded' />
              <Label htmlFor='remember' className='text-sm text-gray-700'>
                Keep me logged in
              </Label>
            </div>

            {/* Login Button */}
            <Button className='w-full bg-[#5061FC] text-white hover:bg-[#4050eb] transition h-12 rounded-lg font-medium text-base'>
              Login
            </Button>

            {/* Forgot Password */}
            <div className='text-center pt-1'>
              <Link href='#' className='text-sm text-[#5061FC] hover:underline'>
                Forgot password
              </Link>
            </div>
          </div>

          {/* Sign Up Prompt */}
          <div className='mt-auto pt-8 text-center text-sm text-gray-600 pb-4'>
            Don't have an account?{' '}
            <Link href='#' className='text-[#5061FC] font-medium hover:underline'>
              Sign up
            </Link>
          </div>
        </div>

        {/* Right Section - Hidden on Mobile */}
        <div className='hidden md:flex md:w-[55%] bg-[#5061FC] items-center justify-center p-12 text-white relative overflow-hidden'>
          <div className='flex flex-col justify-center w-full max-w-xl mx-auto'>
            <div
              className='mb-8 transition-all duration-500 ease-in-out'
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? getTransformValue() : 'translateX(0)',
                ...(animating ? {} : { transform: 'translateX(0)' }),
              }}>
              <h2 className='text-2xl font-semibold mb-4'>{carouselSlides[currentSlide].title}</h2>
              <p className='text-white/80 text-base'>{carouselSlides[currentSlide].description}</p>
            </div>

            {/* Carousel Content */}
            <div
              className='transition-all duration-500 ease-in-out'
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? getTransformValue() : 'translateX(0)',
                ...(animating ? {} : { transform: 'translateX(0)' }),
              }}>
              {carouselSlides[currentSlide].content}
            </div>

            {/* Dots */}
            <div className='absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3'>
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? 'bg-white scale-125' : 'bg-white/60'
                  } 
                    transition-all duration-300 hover:bg-white/80`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
