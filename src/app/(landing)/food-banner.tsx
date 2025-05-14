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
      className='flex items-center justify-start gap-8 rounded-xl px-5 pt-1 overflow-hidden'
      style={{ backgroundColor: cardBgColor }}>
      <Image src={imageSrc} alt={heading} width={290} height={188} />
      <div className='flex flex-col items-start justify-between h-full py-5'>
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
    </div>
  )
}
