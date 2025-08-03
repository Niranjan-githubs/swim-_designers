import React, { useEffect, useState, useRef } from 'react';

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

const ExpandingGallery: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  // Pool project gallery images
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      image: "/gallery/compressed/ocean-travel-modern-nobody-infinity.jpg",
      title: "Ocean Infinity Pool",
      category: "Resort"
    },
    {
      id: 2,
      image: "/gallery/compressed/outdoor-swimming-pool-hotel-resort-summer-vacation.jpg",
      title: "Outdoor Hotel Pool",
      category: "Vacation"
    },
    {
      id: 3,
      image: "/gallery/compressed/relaxation-pool-umbrella-lounge-sky.jpg",
      title: "Relaxation Pool",
      category: "Lounge"
    },
    {
      id: 4,
      image: "/gallery/compressed/umbrella-chair.jpg",
      title: "Umbrella Chair Pool",
      category: "Modern"
    },
    {
      id: 5,
      image: "/gallery/compressed/white-swimming-water-background-beauty.jpg",
      title: "White Swimming Water",
      category: "Beauty"
    },
    {
      id: 6,
      image: "/gallery/compressed/hammocks-umbrellas-seen-from-pool.jpg",
      title: "Hammocks Umbrellas Pool",
      category: "Luxury"
    },
    {
      id: 7,
      image: "/gallery/compressed/Picture3.jpg",
      title: "Picture 3 Pool",
      category: "Special"
    }
  ];

  useEffect(() => {
    let ticking = false;
    const heroSection = document.getElementById('home');

    const handleScroll = () => {
      if (!ticking && heroSection) {
        requestAnimationFrame(() => {
          const heroRect = heroSection.getBoundingClientRect();
          const heroHeight = heroSection.offsetHeight;
          const windowHeight = window.innerHeight;
          
          const scrollStart = -heroRect.top;
          const scrollEnd = heroHeight - windowHeight;
          const progress = Math.max(0, Math.min(1, scrollStart / scrollEnd));
          
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const isExpanded = scrollProgress > 0.95;

  return (
    <div 
      ref={sectionRef}
      className="relative w-full -mt-24"
      style={{
        '--scroll-progress': scrollProgress,
      } as React.CSSProperties}
    >
      {/* Gallery cards container */}
      <div
        className={`w-full py-2 flex items-center justify-center ${
          isExpanded ? 'min-w-[1200px] sm:min-w-[1400px] md:min-w-[1600px] lg:min-w-[1800px] gap-4 sm:gap-6 md:gap-8 lg:gap-10' : 'relative min-w-[1200px] sm:min-w-[1400px] md:min-w-[1600px] lg:min-w-[1800px]'
        }`}
        style={{ height: '40rem' }}
      >
        {galleryItems.map((item, index) => {
          // Pre-calculate values once
          const stackOffset = index * 12; // Reduced from 16 to 12 for tighter stacking
          // Center the middle images: offset by 3 to center the 4th image (index 3)
          const expandedX = (index - 3) * 320; // Reduced from 450 to 320 for smaller gaps
          
          // Initial centered position (when scrollProgress = 0)
          // Center the stack horizontally by offsetting by half the total width
          const totalStackWidth = (galleryItems.length - 1) * 12; // Total width of stacked cards
          const initialX = -totalStackWidth / 2; // Center the stack
          const initialY = stackOffset; // Stack vertically with offset
          
          // Interpolate between initial centered position and expanded position
          const currentX = initialX + (scrollProgress * expandedX);
          const currentY = initialY - (scrollProgress * stackOffset); // Move to center vertically when expanded
          const rotation = (1 - scrollProgress) * (index % 2 === 0 ? -2 : 2);
          const scale = 0.8 + (scrollProgress * 0.2);

          return (
            <div
              key={item.id}
              className={`${
                isExpanded ? '' : 'absolute'
              }`}
              style={{
                transform: isExpanded 
                  ? `scale(${scale})`
                  : `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg) scale(${scale})`,
                zIndex: galleryItems.length - index,
                position: isExpanded ? 'static' : 'absolute',
                minWidth: isExpanded ? '20rem sm:22rem md:24rem lg:27rem' : undefined,
                willChange: 'transform',
                transition: isExpanded ? 'none' : 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              <div className="w-[18rem] sm:w-[20rem] md:w-[22rem] lg:w-[24rem] h-[18rem] sm:h-[20rem] md:h-[22rem] lg:h-[24rem] bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 shadow-2xl group hover:scale-105 transition-transform duration-300">
                {/* Image with optimized loading */}
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpandingGallery;