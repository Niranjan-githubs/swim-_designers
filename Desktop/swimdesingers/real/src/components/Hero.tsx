import React from 'react';
import { ArrowRight, Star, Award, Users, Phone } from 'lucide-react';
import Aurora from './Aurora';
import ExpandingGallery from './ExpandingGallery';
import BlurText from './BlurText';
import RotatingText from './RotatingText';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative min-h-[150vh] overflow-hidden bg-white">
        
        {/* Hero Content - Top Section */}
        <div className="relative z-12 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center pt-32 sm:pt-36 md:pt-40">
          {/* Main Headline - Centered Style like the image */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <BlurText
              text="Providing Top Notch"
              delay={150}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900 tracking-tight font-display whitespace-nowrap"
              animateBy="words"
              direction="top"
              threshold={0.1}
              stepDuration={0.4}
            />
            <div className="mt-2 sm:mt-3 md:mt-4 flex justify-center items-center flex-wrap">
              <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight flex items-center flex-wrap justify-center">
                <span className="text-gray-900 mr-3 sm:mr-4 md:mr-6 font-display">Pool</span>
                <RotatingText
                  texts={[
                    "Solutions",
                    "Design",
                    "Products", 
                    "Consultants",
                    "Construction",
                    "Maintenance"
                  ]}
                  mainClassName="font-display"
                  staggerFrom="last"
                  initial={{ y: '100%', filter: 'blur(10px)', opacity: 0 }}
                  animate={{ y: 0, filter: 'blur(0px)', opacity: 1 }}
                  exit={{ y: '-120%', filter: 'blur(10px)', opacity: 0 }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                  gradient={true}
                  gradientColors="from-blue-600 via-sky-500 to-cyan-500"
                  loop={true}
                  auto={true}
                />
              </div>
            </div>
          </div>

          {/* Subheadline */}
          <BlurText
            text="We transform your vision into reality through innovative technology and proficient construction management."
            delay={100}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 sm:mb-10 md:mb-12 text-gray-600 max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto leading-relaxed px-4 font-light font-sans"
            animateBy="words"
            direction="top"
            threshold={0.1}
            stepDuration={0.3}
          />

          {/* Single CTA Button */}
          <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 px-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 border-0 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-base sm:text-lg md:text-xl hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center group shadow-xl hover:shadow-2xl hover:scale-105 font-sans"
            >
              Inquire Now
              <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>

        {/* Gallery Section - Half visible in hero */}
        <div className="relative z-10 w-full flex items-center justify-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
          <div className="transform translate-x-2 sm:translate-x-4 md:translate-x-6 lg:translate-x-8">
            <ExpandingGallery />
          </div>
        </div>

        {/* Contact widget - positioned like in reference */}
        
      </section>
    </>
  );
};

export default Hero;