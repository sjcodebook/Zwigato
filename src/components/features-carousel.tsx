import Image from 'next/image'

import Carousel from '@/components/carousel'

const carouselSlides = [
  {
    id: 1,
    title: 'Leave reviews for all meals',
    description:
      'Share your thoughts and experiences with our meals by leaving reviews and ratings, helping others make informed choices.',
    content: (
      <div>
        <Image
          src='/assets/images/reviews.png'
          alt='Roll set'
          width={313}
          height={436}
          className='absolute top-[-162px] left-0'
        />
        <Image
          src='/assets/images/item.png'
          alt='Roll set'
          width={618}
          height={132}
          className='absolute top-16 left-[-25px]'
        />
        <Image
          src='/assets/images/item-squared.png'
          alt='Roll set'
          width={294}
          height={278}
          className='absolute top-[-100px] left-52'
        />
      </div>
    ),
  },
  {
    id: 2,
    title: 'Order your favorite dishes',
    description:
      'Browse through our extensive menu of delicious dishes from various cuisines and order your favorites with just a few clicks.',
    content: (
      <div>
        <Image
          src='/assets/images/reviews.png'
          alt='Roll set'
          width={313}
          height={436}
          className='absolute top-[-162px] left-0'
        />
        <Image
          src='/assets/images/item.png'
          alt='Roll set'
          width={618}
          height={132}
          className='absolute top-16 left-[-25px]'
        />
        <Image
          src='/assets/images/item-squared.png'
          alt='Roll set'
          width={294}
          height={278}
          className='absolute top-[-100px] left-52'
        />
      </div>
    ),
  },
  {
    id: 3,
    title: 'Fast delivery to your door',
    description:
      'Get your food delivered quickly to your doorstep by our reliable delivery partners, ensuring your meal arrives fresh and hot.',
    content: (
      <div>
        <Image
          src='/assets/images/reviews.png'
          alt='Roll set'
          width={313}
          height={436}
          className='absolute top-[-162px] left-0'
        />
        <Image
          src='/assets/images/item.png'
          alt='Roll set'
          width={618}
          height={132}
          className='absolute top-16 left-[-25px]'
        />
        <Image
          src='/assets/images/item-squared.png'
          alt='Roll set'
          width={294}
          height={278}
          className='absolute top-[-100px] left-52'
        />
      </div>
    ),
  },
  {
    id: 4,
    title: 'Track your order in real-time',
    description:
      'Monitor your order status and track delivery progress in real-time so you know exactly when your meal will arrive.',
    content: (
      <div>
        <Image
          src='/assets/images/reviews.png'
          alt='Roll set'
          width={313}
          height={436}
          className='absolute top-[-162px] left-0'
        />
        <Image
          src='/assets/images/item.png'
          alt='Roll set'
          width={618}
          height={132}
          className='absolute top-16 left-[-25px]'
        />
        <Image
          src='/assets/images/item-squared.png'
          alt='Roll set'
          width={294}
          height={278}
          className='absolute top-[-100px] left-52'
        />
      </div>
    ),
  },
]

const FeaturesCarousel = () => {
  return <Carousel carouselSlides={carouselSlides} />
}

export default FeaturesCarousel
