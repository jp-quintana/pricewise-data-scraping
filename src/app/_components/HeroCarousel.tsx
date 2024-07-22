import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

const heroImages = [
  {
    src: '/assets/images/hero-1.svg',
    alt: 'smartwatch',
  },
  {
    src: '/assets/images/hero-2.svg',
    alt: 'bag',
  },
  {
    src: '/assets/images/hero-3.svg',
    alt: 'lamp',
  },
  {
    src: '/assets/images/hero-4.svg',
    alt: 'air fryer',
  },
  {
    src: '/assets/images/hero-5.svg',
    alt: 'chair',
  },
];

const HeroCarousel = () => {
  return (
    <div>
      <Carousel>
        {heroImages.map((image) => (
          <Image src={image.src} alt={image.alt} width={484} height={484} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
