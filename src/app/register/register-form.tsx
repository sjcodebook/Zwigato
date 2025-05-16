'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { registerSchema, RegisterFormData } from '@/lib/form-schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function RegisterForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const responseData = await response.json()

      if (response.ok) {
        toast.success(responseData.message || 'Registration successful! Please log in.')
        router.push('/login')
      } else {
        toast.error(responseData.message || 'Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Registration error:', error)
      toast.error('An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

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
        Create your account to get started.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
        <div className='space-y-2'>
          <Label htmlFor='name' className='text-xs leading-4 text-[#545563] font-semibold'>
            Full Name
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='John Doe'
            className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
            {...register('name')}
            disabled={isLoading}
          />
          {errors.name && <p className='text-xs text-red-500'>{errors.name.message}</p>}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='email' className='text-xs leading-4 text-[#545563] font-semibold'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='name@example.com'
            className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
            {...register('email')}
            disabled={isLoading}
          />
          {errors.email && <p className='text-xs text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='space-y-2'>
          <Label htmlFor='password' className='text-xs leading-4 text-[#545563] font-semibold'>
            Password
          </Label>
          <div className='relative'>
            <Input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='min. 8 characters'
              className='h-12 rounded-lg border-gray-200 focus:border-[#5061FC] focus:ring-1 focus:ring-[#5061FC]'
              {...register('password')}
              disabled={isLoading}
            />
            {/* TODO: Implement password visibility toggle */}
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute right-3 top-1/2 -translate-y-1/2'>
              <Image
                src={showPassword ? '/assets/svg/eye-off.svg' : '/assets/svg/eye.svg'}
                alt='Toggle password visibility'
                width={20}
                height={20}
                className='cursor-pointer'
              />
            </button>
          </div>
          {errors.password && <p className='text-xs text-red-500'>{errors.password.message}</p>}
        </div>

        <Button
          type='submit'
          className='mt-2 w-full bg-[#4E60FF] text-white hover:bg-[#4050eb] transition h-12 rounded-lg font-medium text-base'
          disabled={isLoading}>
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>
      <div className='mt-22 text-center text-sm leading-5 tracking-[0.1px] text-[#545563] pb-2'>
        Already have an account?{' '}
        <Link href='/login' className='text-[#4E60FF] font-medium hover:underline'>
          Log In
        </Link>
      </div>
    </div>
  )
}
