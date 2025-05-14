import Image from 'next/image'

interface FoodBannerProps {
  imageSrc: string
  heading: string
  subheading: string
  category: string
  cardBgColor?: string
  headingColor?: string
  subheadingColor?: string
  categoryColor?: string
}

export default function FoodBanner({
  imageSrc = '',
  heading = '',
  subheading = '',
  category = '',
  cardBgColor = '#F3F4FF',
  headingColor = '#2B2B43',
  subheadingColor = '#4E60FF',
  categoryColor = '#83859C',
}: FoodBannerProps) {
  return (
    <div
      className='flex flex-col md:flex-row items-center justify-start gap-0 md:gap-8 rounded-xl px-5 pt-2 overflow-hidden'
      style={{ backgroundColor: cardBgColor }}>
      <Image src={imageSrc} alt={heading} width={450} height={450} className='hidden md:block' />
      <div className='flex flex-row md:flex-col items-start justify-between h-full w-full py-2 md:py-5'>
        <div className='flex flex-col items-start gap-2'>
          <h3 className='text-xl tracking-[0.1px] font-semibold' style={{ color: headingColor }}>
            {heading}
          </h3>
          <p
            className='text-[40px] leading-[56px] tracking-[0.1px] font-extrabold'
            style={{ color: subheadingColor }}>
            {subheading}
          </p>
        </div>
        <p className='text-sm tracking-[0.1px] mt-1' style={{ color: categoryColor }}>
          {category}
        </p>
      </div>
      <Image src={imageSrc} alt={heading} width={300} height={300} className='block md:hidden' />
    </div>
  )
}
