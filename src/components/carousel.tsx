'use client'

import { useState, useEffect } from 'react'

import { cn } from '@/lib/utils'

interface CarouselSlide {
  id: number
  title: string
  description: string
  content: React.ReactNode
}

const Carousel = ({ carouselSlides }: { carouselSlides: CarouselSlide[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [slideDirection, setSlideDirection] = useState('left')

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimating(true)
      setSlideDirection('left')
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
        setTimeout(() => {
          setAnimating(false)
        }, 50)
      }, 300)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [carouselSlides])

  const handleDotClick = (index: number) => {
    if (index === currentSlide) return

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

  const getTransformValue = () => {
    if (!animating) return 'translateX(0)'
    return slideDirection === 'left' ? 'translateX(-40px)' : 'translateX(40px)'
  }

  return (
    <div className='h-full flex flex-col'>
      <div className='flex flex-col flex-grow w-full max-w-xl mx-auto overflow-hidden'>
        <div className='flex-grow flex flex-col justify-center items-center overflow-hidden'>
          <div
            className='transition-all duration-500 ease-in-out py-4 w-full'
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? getTransformValue() : 'translateX(0)',
            }}>
            {carouselSlides[currentSlide].content}
          </div>
        </div>
        <div>
          <div
            className='transition-all duration-500 ease-in-out text-center py-10'
            style={{
              opacity: animating ? 0 : 1,
              transform: animating ? getTransformValue() : 'translateX(0)',
            }}>
            <h2 className='text-[32px] leading-[42px] tracking-[0.1px] font-bold mb-4'>
              {carouselSlides[currentSlide].title}
            </h2>
            <p className='text-[14px] leading-[20px] tracking-[0.1px] text-white'>
              {carouselSlides[currentSlide].description}
            </p>
          </div>
        </div>
      </div>
      <div className='absolute bottom-12 left-1/2 -translate-x-1/2 flex space-x-3'>
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300 hover:bg-white/80 cursor-pointer',
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/60'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
