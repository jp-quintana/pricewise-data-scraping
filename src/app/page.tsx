import HeroCarousel from '@/components/hero-carousel';
import Searchbar from '@/components/searchbar';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <section className="px-6 border-2 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <p className="small-text">
              Smart Shopping Starts Here:
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={16}
                height={16}
              />
            </p>
            <h1 className="head-text">
              Unleash the Power of{' '}
              <span className="text-primary"> Pricewise</span>
            </h1>
            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you
              convert, engage and relate more
            </p>
            <Searchbar />
          </div>
          <HeroCarousel />
        </div>
        page
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>
        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {[...Array(4)].map((_, index) => (
            <div key={index}>product</div>
          ))}
        </div>
      </section>
    </>
  );
};

export default page;