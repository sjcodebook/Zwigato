'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { loginSchema, LoginFormData } from '@/lib/form-schemas'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'

export default function LoginForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const result = await signIn('credentials', {
        redirect: false,
        email: data.email,
        password: data.password,
      })

      if (result?.error) {
        try {
          const errorJson = JSON.parse(result.error)
          toast.error(errorJson.message || 'Invalid credentials or user not found')
        } catch {
          toast.error(result.error || 'Invalid credentials or user not found')
        }
        setIsLoading(false)
      } else if (result?.ok) {
        toast.success('Logged in successfully!')
        router.push('/')
      } else {
        toast.error('Login failed. Please try again.')
        setIsLoading(false)
      }
    } catch (error) {
      console.error('Login error:', error)
      toast.error('An unexpected error occurred. Please try again.')
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
        Login
      </h1>
      <p className='text-[14px] leading-[20px] tracking-[0.1px] text-[#545563] mb-6 md:mb-8'>
        Sign in with your data that you entered during your registration.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
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
        <div className='flex items-center space-x-2'>
          <Checkbox id='remember' className='h-5 w-5 border-gray-300 rounded' />
          <Label htmlFor='remember' className='text-sm text-gray-700'>
            Keep me logged in
          </Label>
        </div>
        <Button
          type='submit'
          className='mt-2 w-full bg-[#4E60FF] text-white hover:bg-[#4050eb] transition h-12 rounded-lg font-medium text-base'
          disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </Button>
        <div className='text-center pt-1'>
          <Link href='#' className='text-sm leading-5 text-[#4E60FF] font-bold hover:underline'>
            Forgot password
          </Link>
        </div>
      </form>
      <div className='mt-22 text-center text-sm leading-5 tracking-[0.1px] text-[#545563] pb-2'>
        Don&apos;t have an account?{' '}
        <Link href='/register' className='text-[#4E60FF] font-medium hover:underline'>
          Sign up
        </Link>
      </div>
    </div>
  )
}
