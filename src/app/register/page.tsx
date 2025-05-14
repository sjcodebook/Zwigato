import FeaturesCarousel from '@/components/features-carousel'

import RegisterForm from './register-form'

export default function LoginPage() {
  return (
    <div className='h-screen w-screen flex bg-white overflow-hidden'>
      <div className='flex w-full h-full'>
        <RegisterForm />
        <div className='hidden xl:flex xl:w-[55%] bg-[#697BFF] items-center justify-center p-12 text-white relative overflow-hidden'>
          <FeaturesCarousel />
        </div>
      </div>
    </div>
  )
}
