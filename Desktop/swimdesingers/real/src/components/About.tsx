import React from 'react';
import { HoverExpand } from '../ui/hover-expand';

const About = () => {
  const reviews = [
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      text: "Good services and good technical support. Overall a good experience"
    },
    {
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
      text: "I like your pool, your work was completely finishable and awesome sites..."
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      text: "Veni Ent designed, They are very good in quality, sticking to design, timely delivery, and prompt after sales service support."
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
      text: "Excellent pool design and construction. The team was professional and delivered exactly what we envisioned."
    },
    {
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=face",
      text: "Amazing work quality and attention to detail. Our pool turned out better than expected!"
    },
    {
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face",
      text: "Outstanding service from start to finish. Highly recommend for anyone looking for a quality pool."
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      text: "Professional team with excellent craftsmanship. Our pool is the highlight of our backyard."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-sky-100 text-sky-700 rounded-full px-6 py-2 mb-4">
            <span className="text-sm font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what our satisfied customers have to say about their pool experience. 
            Hover over the images to explore and click to read the full reviews.
          </p>
        </div>

        {/* HoverExpand Component */}
        <HoverExpand
          reviews={reviews}
          initialSelectedIndex={0}
          thumbnailHeight={300}
          modalImageSize={500}
          maxThumbnails={7}
        />
      </div>
    </section>
  );
};

export default About;