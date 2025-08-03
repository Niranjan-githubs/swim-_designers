import React from 'react';
import { Star, ExternalLink, ShoppingCart } from 'lucide-react';
import { AnimatedTestimonials } from '../ui/animated-testimonials';

const Products = () => {
  const products = [
    {
      quote: "Premium Swimming Pool Design Package - Complete luxury pool construction with modern amenities, LED lighting, and automated cleaning system. Perfect for residential properties seeking the ultimate outdoor experience.",
      name: "Luxury Pool Package",
      designation: "Complete Design & Construction",
      price: "₹25,00,000",
      src: "/products/1.png"
    },
    {
      quote: "Infinity Edge Pool System - Stunning vanishing edge design with glass tile finish and panoramic views. Includes water features, temperature control, and smart automation for the perfect resort-like experience.",
      name: "Infinity Edge Pool",
      designation: "Premium Design Package",
      price: "₹18,50,000",
      src: "/products/3.png"
    },
    {
      quote: "Natural Rock Pool Collection - Organic-shaped pools with natural stone finishes, waterfalls, and tropical landscaping. Features integrated spa, heating system, and eco-friendly filtration technology.",
      name: "Natural Rock Pool",
      designation: "Eco-Friendly Design",
      price: "₹22,00,000",
      src: "/products/7.png"
    },
    {
      quote: "Modern Geometric Pool Suite - Contemporary design with clean lines, minimalist aesthetics, and smart technology integration. Includes automated covers, energy-efficient systems, and mobile app control.",
      name: "Modern Geometric Pool",
      designation: "Smart Technology Package",
      price: "₹20,00,000",
      src: "/products/18.png"
    },
    {
      quote: "Family Entertainment Pool - Multi-functional pool with slides, diving board, and shallow areas. Perfect for families with children, includes safety features, entertainment systems, and maintenance package.",
      name: "Family Entertainment Pool",
      designation: "Complete Family Package",
      price: "₹16,50,000",
      src: "/products/1.png"
    }
  ];

  return (
    <section id="products" className="min-h-screen bg-white relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Section Header */}
        <div className="text-center py-20 px-4">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full px-6 py-2 mb-6">
            <Star className="mr-2" size={16} />
            <span className="text-sm font-semibold">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 mb-6">
            Premium Pool Solutions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
            Discover our exclusive collection of premium pool designs and packages 
            tailored to transform your outdoor space into a luxurious aquatic paradise.
          </p>
        </div>

        {/* Animated Products - Direct without background card */}
        <div className="w-full mb-20">
          <AnimatedTestimonials testimonials={products} autoplay={true} />
        </div>

        {/* CTA Section */}
        <div className="text-center py-16 px-4">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto border border-gray-100">
            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              Ready to Transform Your Space?
            </h3>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Choose from our premium pool packages and start your journey to creating the perfect outdoor oasis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-blue-700 hover:via-sky-600 hover:to-cyan-600 transition-all duration-300 flex items-center group shadow-xl">
                <ShoppingCart className="mr-2" size={20} />
                Get Quote Now
                <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transition-all duration-300 border border-gray-200 shadow-lg">
                View All Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;