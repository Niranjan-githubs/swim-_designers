import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Star, ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// Import Swiper modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
} from 'swiper/modules';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Pool Party in Sunlight",
      category: "Entertainment",
      image: "/portff/compressed/vertical-high-angle-view-pool-party-sunlight-us.jpg",
      description: "Vibrant pool party setting with guests enjoying the sunshine and crystal clear waters in a perfect outdoor environment.",
      features: ["Party Atmosphere", "Sunlight Design", "Entertainment Space", "Social Gathering"],
      location: "Miami, FL",
      year: "2024"
    },
    {
      id: 2,
      title: "Orchid Nature Resort Pool",
      category: "Luxury Resort",
      image: "/portff/compressed/background-beauty-orchid-nature-resort.jpg",
      description: "Exquisite resort pool surrounded by beautiful orchids and natural landscaping, creating a serene tropical paradise.",
      features: ["Orchid Gardens", "Natural Landscaping", "Resort Luxury", "Tropical Design"],
      location: "Bali, Indonesia",
      year: "2024"
    },
    {
      id: 3,
      title: "Pure White Swimming Pool",
      category: "Luxury Design",
      image: "/portff/compressed/white-swimming-water-background-beauty.jpg",
      description: "Elegant white pool design with pristine water and sophisticated beauty for luxury living and relaxation.",
      features: ["White Design", "Pristine Water", "Luxury Finish", "Sophisticated Style"],
      location: "Beverly Hills, CA",
      year: "2024"
    },
    {
      id: 4,
      title: "Relaxation Pool with Umbrellas",
      category: "Residential",
      image: "/portff/compressed/relaxation-pool-umbrella-lounge-sky.jpg",
      description: "Peaceful pool setting with comfortable lounging areas and elegant umbrella arrangements under the open sky.",
      features: ["Lounge Areas", "Umbrella Shade", "Relaxation Zones", "Open Sky Views"],
      location: "Scottsdale, AZ",
      year: "2024"
    },
    {
      id: 5,
      title: "Modern Blue Swimming Pool",
      category: "Contemporary Design",
      image: "/portff/compressed/swimming-blue-healthy-wet-modern.jpg",
      description: "Contemporary blue pool design with modern amenities and healthy lifestyle features for active living.",
      features: ["Modern Design", "Health Features", "Blue Aesthetics", "Contemporary Style"],
      location: "Austin, TX",
      year: "2024"
    },
    {
      id: 6,
      title: "Luxury Pool with Palm Trees",
      category: "Tropical Luxury",
      image: "/portff/compressed/beautiful-luxury-swimming-pool-with-palm-tree.jpg",
      description: "Stunning luxury pool surrounded by majestic palm trees, creating the perfect tropical paradise experience.",
      features: ["Palm Trees", "Luxury Design", "Tropical Setting", "Paradise Experience"],
      location: "Maldives",
      year: "2024"
    },
    {
      id: 7,
      title: "Hurghada Hotel Pool",
      category: "Resort Design",
      image: "/portff/compressed/tourists-hurghada-hotel.jpg",
      description: "Luxurious hotel pool in Hurghada with tourists enjoying the beautiful Egyptian coastal resort experience.",
      features: ["Hotel Luxury", "Tourist Destination", "Coastal Resort", "International Appeal"],
      location: "Hurghada, Egypt",
      year: "2024"
    },
    {
      id: 8,
      title: "Pool with Lounge Chairs",
      category: "Residential Luxury",
      image: "/portff/compressed/chair-pool.jpg",
      description: "Elegant pool design with premium lounge chairs and sophisticated outdoor living space for ultimate relaxation.",
      features: ["Lounge Chairs", "Outdoor Living", "Premium Comfort", "Luxury Amenities"],
      location: "Palm Springs, CA",
      year: "2024"
    }
  ];

  const swiperStyles = `
    .swiper {
      width: 100%;
      padding-bottom: 50px;
      padding-top: 0px;
    }
    
    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 350px;
      height: 420px;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .swiper-slide img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 20px;
      transition: transform 0.3s ease;
    }
    
    .swiper-slide:hover img {
      transform: scale(1.05);
    }
    
    .swiper-3d .swiper-slide-shadow-left {
      background-image: none;
    }
    
    .swiper-3d .swiper-slide-shadow-right {
      background: none;
    }
    
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background: #cbd5e1;
      opacity: 0.5;
      transition: all 0.3s ease;
    }
    
    .swiper-pagination-bullet-active {
      background: linear-gradient(135deg, #3b82f6, #06b6d4);
      opacity: 1;
      transform: scale(1.2);
    }
    
    /* Responsive adjustments */
    @media (max-width: 480px) {
      .swiper-slide {
        width: 220px;
        height: 264px;
      }
    }
    
    @media (min-width: 481px) and (max-width: 768px) {
      .swiper-slide {
        width: 260px;
        height: 312px;
      }
    }
    
    @media (min-width: 769px) and (max-width: 1024px) {
      .swiper-slide {
        width: 300px;
        height: 360px;
      }
    }
    
    @media (min-width: 1025px) {
      .swiper-slide {
        width: 350px;
        height: 420px;
      }
    }
  `;

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="text-center py-8 px-4">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-6 py-2 mb-4">
            <Star className="mr-2" size={16} />
            <span className="text-sm font-semibold">Our Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6 font-serif">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Discover our most impressive pool designs that transform ordinary spaces into extraordinary aquatic experiences.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="w-full">
          <style>{swiperStyles}</style>
          <Swiper
            spaceBetween={50}
            autoplay={{
              delay: 800,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            modules={[EffectCoverflow, Autoplay, Pagination]}
            className="portfolio-swiper"
            speed={300}
            watchSlidesProgress={true}
            observer={true}
            observeParents={true}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
                autoplay: {
                  delay: 600,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 30,
                  modifier: 1.2,
                }
              },
              480: {
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: {
                  delay: 700,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 40,
                  modifier: 1.5,
                }
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                autoplay: {
                  delay: 800,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 60,
                  modifier: 1.8,
                }
              },
              1024: {
                slidesPerView: "auto",
                spaceBetween: 40,
                autoplay: {
                  delay: 800,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              },
              1440: {
                slidesPerView: "auto",
                spaceBetween: 50,
                autoplay: {
                  delay: 800,
                },
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 120,
                  modifier: 3,
                }
              }
            }}
          >
            {portfolioItems.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="size-full rounded-3xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full rounded-xl"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Section */}
        <div className="text-center py-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ready to Create Your Dream Pool?
            </h3>
            <p className="text-gray-600 mb-6">
              Let's transform your vision into reality with our expert design and construction services.
            </p>
            <button className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center mx-auto group shadow-xl">
              Start Your Project
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;