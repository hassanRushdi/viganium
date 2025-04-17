import Image from 'next/image';
import HeroImage from '@/public/assets/images/hero-image.png';

const AboutHeaderSection = () => {
  return (
    <section className="w-full bg-white py-12 md:py-5 px-4 sm:px-6 lg:px-8">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-7">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-normal md:leading-[1.3] - mt-8">
              Great Products Are Built By <span className="text-brand-900">Great Teams</span>
            </h2>
            <p className="text-lg sm:text-2xl text-[#616161] leading-normal md:leading-[2] ">
              Over the past decade, we've redefined the union of digital design and personalised experiences. 
              Our team is dedicated to helping innovators & organisations of all sizes convert their ideas to reality.
            </p>
          </div>

          {/* Image - No Container */}
          <div className="lg:w-1/2">
            <Image
              src={HeroImage}
              alt="Team working together"
              width={600}
              height={400}
              className="w-full h-auto "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeaderSection;