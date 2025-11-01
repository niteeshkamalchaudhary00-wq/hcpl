import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Banner slides
  const slides = [
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519124.jpg',
      title: 'Water Treatment Plant',
      subtitle: 'Premium Quality Water Solutions',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519125.jpg',
      title: 'Mineral Water Plant',
      subtitle: 'Complete Turnkey Projects',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519126.jpg',
      title: 'Labelling Machine',
      subtitle: 'Automated Packaging Solutions',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519127.jpg',
      title: 'Carbonated Soft Drink Plant',
      subtitle: 'Advanced Beverage Manufacturing',
      link: '/products'
    }
  ]

  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'FRP Commercial Reverse Osmosis Plant',
      category: 'RO Systems',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/100-500-lph-ro-plant-1709365032-7319454.jpeg',
      link: '/products'
    },
    {
      id: 2,
      name: 'FRP Semi-Automatic Reverse Osmosis Plant',
      category: 'RO Systems',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/500-1000-lph-ro-plant-1709365182-7319463.jpeg',
      link: '/products'
    },
    {
      id: 3,
      name: 'Commercial Reverse Osmosis Plant',
      category: 'RO Systems',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/1000-5000-lph-ro-plant-1709365463-7319484.jpeg',
      link: '/products/commercial-reverse-osmosis-plant'
    },
    {
      id: 4,
      name: 'FRP Automatic Reverse Osmosis Plant',
      category: 'RO Systems',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/5000-10000-lph-ro-plant-1709365704-7319498.jpeg',
      link: '/products'
    },
    {
      id: 5,
      name: 'Effluent Water Treatment Plant',
      category: 'Treatment Plants',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/5/9525058/effluent-water-treatment-plant-1715872023-7432336.jpeg',
      link: '/products'
    },
    {
      id: 6,
      name: 'STP Plant',
      category: 'Treatment Plants',
      image: 'https://2.wlimg.com/product_images/bc-small/2025/1/9525058/fabricated-sewage-treatment-plant-30-kld-1737093753-7432338.jpeg',
      link: '/products'
    }
  ]

  const moreProducts = [
    { name: 'Fully Automatic Mineral Water Plant', image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-mineral-water-plant-1707480582-7286826.jpeg', link: '/products' },
    { name: 'Sewage Treatment Plant', image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/sewage-treatment-plant-1707479381-6074532.jpeg', link: '/products' },
    { name: 'Effluent Treatment Plant', image: 'https://2.wlimg.com/product_images/bc-small/2021/11/9525058/effluent-treatment-plant-1636696248-6074573.jpeg', link: '/products' },
    { name: 'Water Softening Plant', image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/water-softening-plant-1707479579-6074634.jpeg', link: '/products' },
    { name: 'Demineralization Water Plant', image: 'https://2.wlimg.com/product_images/bc-small/2022/7/9525058/demineralization-dm-water-treatment-plants-1657191245-6434861.jpeg', link: '/products' },
    { name: 'Water Chiller Machine', image: 'https://2.wlimg.com/product_images/bc-small/2022/5/9525058/drinking-water-chiller-machine-2-ton-10-ton-1652954327-6232748.jpeg', link: '/products' },
    { name: 'Carbonated Soft Drink Filling Plant', image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/carbonated-soft-drink-filling-plant-1707548204-6095773.jpeg', link: '/products' },
    { name: 'Automatic Pet Bottle Filling Machine', image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/packaged-drinking-water-filling-machine-1707540344-6074581.jpeg', link: '/products' }
  ]

  const videos = [
    { id: 'G-t5GsSiKho', title: 'Water Chiller Machine', link: '/products' },
    { id: 'BJI7BlLr2v4', title: 'Carbonated Soft Drink Filling Plant', link: '/products' },
    { id: 'mB_qG8Eqq4M', title: 'Water Softening Plant', link: '/products' },
    { id: 'zyHmifiHzrU', title: 'Industrial Reverse Osmosis Plant', link: '/products' }
  ]

  const features = [
    {
      icon: 'fa-certificate',
      title: 'Certified Quality',
      description: 'ISO certified manufacturing processes and quality standards'
    },
    {
      icon: 'fa-wrench',
      title: 'Expert Installation',
      description: 'Professional installation and commissioning services'
    },
    {
      icon: 'fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock customer support and maintenance'
    },
    {
      icon: 'fa-globe',
      title: 'Worldwide Export',
      description: 'Exporting to countries across the globe'
    }
  ]

  const stats = [
    { icon: 'fa-trophy', value: '500+', label: 'Projects Completed' },
    { icon: 'fa-users', value: '300+', label: 'Happy Clients' },
    { icon: 'fa-star', value: '15+', label: 'Years Experience' },
    { icon: 'fa-globe-asia', value: '25+', label: 'Countries Served' }
  ]

  // Auto-advance banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Slider */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                  <div className="max-w-4xl mx-auto text-white text-center">
                    <div className="mb-6 inline-block">
                      <span className="bg-[#d19336] px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide">
                        Premium Quality
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto">
                      {slide.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Link
                        to={slide.link}
                        className="bg-[#d19336] hover:bg-[#b8822a] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
                      >
                        <span>Explore Products</span>
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                      <Link
                        to="/contact"
                        className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 inline-flex items-center gap-2"
                      >
                        <span>Get Quote</span>
                        <i className="fas fa-envelope"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-10 group"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left text-xl group-hover:scale-110 transition-transform"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-4 rounded-full transition-all duration-300 z-10 group"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right text-xl group-hover:scale-110 transition-transform"></i>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide 
                  ? 'bg-[#d19336] w-12 h-3' 
                  : 'bg-white/50 hover:bg-white/70 w-3 h-3'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-[#231f20] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-[#d19336]/10 text-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#231f20]">Reverse Osmosis </span>
              <span className="text-[#d19336]">Plants</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              High-quality water treatment solutions for commercial and industrial applications
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#d19336]"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#d19336] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#231f20] mb-4 group-hover:text-[#d19336] transition-colors line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                  <Link
                    to={product.link}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <span>View Details</span>
                    <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-br from-[#231f20] to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d19336] rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${stat.icon} text-3xl text-white`}></i>
                </div>
                <div className="text-4xl md:text-5xl font-bold text-[#d19336] mb-2">{stat.value}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission, Who We Are */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d19336] group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-eye text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#231f20] mb-4 text-center">Our Vision</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To revolutionize water treatment by creating cutting-edge solutions that prioritize sustainability, efficiency, and environmental stewardship for a cleaner tomorrow.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d19336] group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-bullseye text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#231f20] mb-4 text-center">Our Mission</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To pioneer innovative water treatment solutions, ensuring access to clean and sustainable water worldwide. Committed to excellence and customer satisfaction.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#d19336] group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <i className="fas fa-building text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#231f20] mb-4 text-center">Who We Are</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Haley Cibus Pvt. Ltd. is a leading water treatment plant manufacturing company dedicated to delivering innovative and sustainable solutions worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-[#d19336]/10 text-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Explore More
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#231f20]">Our Complete </span>
              <span className="text-[#d19336]">Product Range</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {moreProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d19336]"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#231f20] group-hover:text-[#d19336] transition-colors line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Products</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23ffffff\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get the Best Water Treatment Solutions?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            We'll send you the best price possible. Get your instant quote now!
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#d19336] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <i className="fas fa-envelope"></i>
            <span>Get Instant Quote</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="bg-[#d19336]/10 text-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Watch & Learn
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#231f20]">
              Product <span className="text-[#d19336]">Videos</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <a
                key={index}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-900">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <i className="fas fa-play text-white text-xl ml-1"></i>
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[#231f20] group-hover:text-[#d19336] transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/videos"
              className="inline-flex items-center gap-3 bg-[#d19336] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8822a] transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Videos</span>
              <i className="fas fa-video"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d19336]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d19336]/20 rounded-full blur-3xl"></div>
              <img
                src="https://catalog.wlimg.com/about-image/about-04.jpg"
                alt="About HALEY CIBUS PVT. LTD."
                className="w-full rounded-2xl shadow-2xl relative z-10"
                loading="lazy"
              />
            </div>

            <div>
              <span className="bg-[#d19336]/10 text-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#231f20] mb-6">
                Welcome to <span className="text-[#d19336]">Haley Cibus</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Haley Cibus Private Limited is a distinguished manufacturer and exporter specializing in turnkey solutions for beverage and liquid processing industries.
                </p>
                <p>
                  With a focus on excellence and innovation, we provide cutting-edge technology and machinery including Mineral Water Bottling Plants, Water Filling Plant Turnkey Projects, Automatic Water Filling Machines, and Fully Automatic Soft Drink Plants.
                </p>
                <p>
                  We are committed to ensuring water purity through advanced R.O. Water Treatment Plants, addressing environmental concerns with Waste Water Treatment Plants, and maintaining sanitation standards with Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP).
                </p>
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-3 mt-8 bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More About Us</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#231f20]">Company </span>
              <span className="text-[#d19336]">Highlights</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-industry text-3xl text-white"></i>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Nature of Business</div>
              <div className="font-bold text-[#231f20] text-lg">Manufacturer, Exporter & Supplier</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-users text-3xl text-white"></i>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Team Members</div>
              <div className="font-bold text-[#d19336] text-4xl">17+</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-calendar text-3xl text-white"></i>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Established</div>
              <div className="font-bold text-[#d19336] text-4xl">2021</div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-globe text-3xl text-white"></i>
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-wide mb-2">Market Coverage</div>
              <div className="font-bold text-[#231f20] text-lg">Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home
