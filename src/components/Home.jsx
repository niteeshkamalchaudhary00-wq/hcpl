import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    productService: '',
    quantity: '',
    unit: '',
    name: '',
    email: '',
    country: 'IN^91',
    phone: '',
    phoneIsd: '+91',
    details: ''
  })
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const autocompleteRef = useRef(null)

  // Banner slides
  const slides = [
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519124.jpg',
      title: 'Water Treatment Plant',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519125.jpg',
      title: 'Mineral Water Plant',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519126.jpg',
      title: 'Labelling Machine',
      link: '/products'
    },
    {
      image: 'https://catalog.wlimg.com/1/9525058/other-images/519127.jpg',
      title: 'Carbonated Soft Drink Plant',
      link: '/products'
    }
  ]

  // Products data
  const products = [
    {
      id: 1,
      name: 'FRP Commercial Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/100-500-lph-ro-plant-1709365032-7319454.jpeg',
      link: '/products'
    },
    {
      id: 2,
      name: 'FRP Semi-Automatic Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/500-1000-lph-ro-plant-1709365182-7319463.jpeg',
      link: '/products'
    },
    {
      id: 3,
      name: 'Commercial Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/1000-5000-lph-ro-plant-1709365463-7319484.jpeg',
      link: '/products/commercial-reverse-osmosis-plant'
    },
    {
      id: 4,
      name: 'FRP Automatic Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/5000-10000-lph-ro-plant-1709365704-7319498.jpeg',
      link: '/products'
    },
    {
      id: 5,
      name: 'effluent water treatment plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/5/9525058/effluent-water-treatment-plant-1715872023-7432336.jpeg',
      link: '/products'
    },
    {
      id: 6,
      name: 'Stp Plant',
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
    {
      id: 'G-t5GsSiKho',
      title: 'Water Chiller Machine',
      link: '/products'
    },
    {
      id: 'BJI7BlLr2v4',
      title: 'Carbonated Soft Drink Filling Plant',
      link: '/products'
    },
    {
      id: 'mB_qG8Eqq4M',
      title: 'Water Softening Plant',
      link: '/products'
    },
    {
      id: 'zyHmifiHzrU',
      title: 'Industrial Reverse Osmosis Plant',
      link: '/products'
    }
  ]

  const productSuggestions = [
    '1000-2000 LPH Water Softener Plant',
    '2000-5000 LPH Water Softener Plant',
    'Alkaline Mineral Water Plant',
    'Automatic RO Plant',
    'Commercial Reverse Osmosis Plant',
    'Effluent Treatment Plant',
    'Sewage Treatment Plant',
    'Mineral Water Plant',
    'Water Softening Plant',
    'Dialysis Ro Plant'
  ]

  const units = [
    'Unit', 'Units', 'Piece', 'Pieces', 'Plant', 'Plants', 'Machine', 'Machines',
    'Set', 'Sets', 'Container', 'Containers', 'Litre', 'Litres'
  ]

  // Auto-advance banner
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [slides.length])

  const handleProductChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, productService: value }))
    
    if (value.length > 0) {
      const filtered = productSuggestions.filter(product =>
        product.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setFormData(prev => ({ ...prev, productService: suggestion }))
    setShowSuggestions(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCountryChange = (e) => {
    const value = e.target.value
    const isdCode = '+' + value.split('^')[1]
    setFormData(prev => ({ ...prev, country: value, phoneIsd: isdCode }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Slider */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-black bg-opacity-60 px-6 py-3 inline-block">
                    {slide.title}
                  </h2>
                  <Link
                    to={slide.link}
                    className="mt-4 inline-block bg-[#d19336] text-white px-8 py-3 rounded-md hover:bg-[#231f20] transition-colors font-semibold"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* Banner Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#d19336] w-8' : 'bg-white bg-opacity-50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Reverse Osmosis Plants Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-[#231f20]">Reverse </span>
              <span className="text-[#d19336]">Osmosis Plants</span>
            </h2>
            <div className="w-24 h-1 bg-[#d19336] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#d19336]">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#231f20] mb-4 hover:text-[#d19336] transition-colors">
                    <Link to={product.link}>{product.name}</Link>
                  </h3>
                  <Link
                    to={product.link}
                    className="inline-block bg-[#d19336] text-white px-4 py-2 rounded-md hover:bg-[#231f20] transition-colors text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision/Mission/Who We Are Section */}
      <section className="py-12 bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#f1f1f1] rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-[#d19336] rounded-full flex items-center justify-center mx-auto text-4xl">
                  👁️
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#d19336] mb-4">Our Vision</h3>
              <p className="text-gray-700">
                Our vision is to revolutionised water treatment by creating cutting-edge solutions that prioritise sustainability, efficiency, and environmental stewardship...
              </p>
            </div>
            <div className="bg-[#f1f1f1] rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-[#d19336] rounded-full flex items-center justify-center mx-auto text-4xl">
                  🎯
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#d19336] mb-4">Our Mission</h3>
              <p className="text-gray-700">
                Our mission is to pioneer innovative water treatment solutions, ensuring access to clean and sustainable water worldwide. Committed to environmental sustainability...
              </p>
            </div>
            <div className="bg-[#f1f1f1] rounded-lg p-8 text-center">
              <div className="mb-4">
                <div className="w-20 h-20 bg-[#d19336] rounded-full flex items-center justify-center mx-auto text-4xl">
                  🏢
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#d19336] mb-4">Who We Are</h3>
              <p className="text-gray-700">
                Haley Cibus Pvt. Ltd. is a leading water treatment plant manufacturing company dedicated to delivering innovative and sustainable solutions...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More Products Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-[#231f20]">More </span>
              <span className="text-[#d19336]">Products</span>
            </h2>
            <div className="w-24 h-1 bg-[#d19336] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {moreProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border-2 border-transparent hover:border-[#d19336]">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-[#231f20] mb-3 hover:text-[#d19336] transition-colors line-clamp-2">
                    <Link to={product.link}>{product.name}</Link>
                  </h3>
                  <div className="flex gap-2">
                    <Link
                      to={product.link}
                      className="flex-1 bg-[#d19336] text-white px-3 py-2 rounded text-center text-xs hover:bg-[#231f20] transition-colors"
                    >
                      Enquiry Now
                    </Link>
                    <Link
                      to={product.link}
                      className="flex-1 bg-gray-200 text-gray-700 px-3 py-2 rounded text-center text-xs hover:bg-gray-300 transition-colors"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-block bg-[#d19336] text-white px-8 py-3 rounded-md hover:bg-[#231f20] transition-colors font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Get Instant Quote Section */}
      <section className="py-12 bg-[#f3f3f3]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl mb-4">
            We will send you the <span className="font-bold">Best Price Possible</span>
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#d19336] text-white px-8 py-4 rounded-md hover:bg-[#231f20] transition-colors font-semibold text-lg"
          >
            <i className="fa fa-share mr-2"></i>Get Instant Quote
          </Link>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#231f20]">Videos</h2>
            <div className="w-24 h-1 bg-[#d19336] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="relative aspect-video">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative w-full h-full"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-[#d19336] rounded-full p-4">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-[#231f20] hover:text-[#d19336] transition-colors">
                    <Link to={video.link}>{video.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/videos"
              className="inline-block bg-[#d19336] text-white px-6 py-2 rounded-md hover:bg-[#231f20] transition-colors"
            >
              View All Videos
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome/About Section */}
      <section className="py-12 bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="hidden lg:block">
              <img
                src="https://catalog.wlimg.com/about-image/about-04.jpg"
                alt="About HALEY CIBUS PVT. LTD."
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-[#231f20] mb-6">Welcome to our Website</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Haley Cibus Private Limited is a distinguished manufacturer and exporter specializing in turnkey solutions for beverage and liquid processing industries. With a focus on excellence and innovation, we provide cutting-edge technology and machinery to meet the diverse needs of our clients.
                </p>
                <p>
                  Our expertise encompasses a wide range of products and services, including the design and implementation of Mineral Water Bottling Plants, Water Filling Plant Turnkey Projects, Automatic Water Filling Machines, Water Bottling Machines, and Fully Automatic Soft Drink Plants.
                </p>
                <p>
                  At Haley Cibus, we are committed to ensuring the purity of water through advanced R.O. Water Treatment Plants, addressing environmental concerns with our Waste Water Treatment Plants, and maintaining sanitation standards with Sewage Treatment Plants (STP) and Effluent Treatment Plants (ETP).
                </p>
              </div>
              <Link
                to="/about"
                className="inline-block mt-6 bg-[#d19336] text-white px-8 py-3 rounded-full hover:bg-[#231f20] transition-colors font-semibold"
              >
                About More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-[#231f20]">Glimpse </span>
              <span className="text-[#d19336]">of Our Company</span>
            </h2>
            <div className="w-24 h-1 bg-[#d19336] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-[#f1f1f1] rounded-lg">
              <div className="w-16 h-16 bg-[#d19336] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🏭
              </div>
              <div className="text-sm text-gray-600 mb-2">Nature of Business</div>
              <div className="font-semibold text-[#231f20]">Manufacturer, Exporter & Supplier</div>
            </div>
            <div className="text-center p-6 bg-[#f1f1f1] rounded-lg">
              <div className="w-16 h-16 bg-[#d19336] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                👥
              </div>
              <div className="text-sm text-gray-600 mb-2">Number of Employees</div>
              <div className="font-semibold text-[#231f20] text-2xl">17</div>
            </div>
            <div className="text-center p-6 bg-[#f1f1f1] rounded-lg">
              <div className="w-16 h-16 bg-[#d19336] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                📅
              </div>
              <div className="text-sm text-gray-600 mb-2">Year of Establishment</div>
              <div className="font-semibold text-[#231f20] text-2xl">2021</div>
            </div>
            <div className="text-center p-6 bg-[#f1f1f1] rounded-lg">
              <div className="w-16 h-16 bg-[#d19336] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                🌍
              </div>
              <div className="text-sm text-gray-600 mb-2">Market Covered</div>
              <div className="font-semibold text-[#231f20]">Worldwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Enquiry Section */}
      <section className="py-12 bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="hidden lg:block">
              <img
                src="https://catalog.wlimg.com/templates-images/12577/12581/contact01.jpg"
                alt="Contact"
                className="w-full rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6">
                <span className="text-[#231f20]">Quick </span>
                <span className="text-[#d19336]">Enquiry</span>
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative" ref={autocompleteRef}>
                  <input
                    type="text"
                    name="productService"
                    value={formData.productService}
                    onChange={handleProductChange}
                    placeholder="Product / Service Looking for"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  />
                  {showSuggestions && filteredSuggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      {filteredSuggestions.slice(0, 10).map((suggestion, index) => (
                        <div
                          key={index}
                          onClick={() => handleSuggestionClick(suggestion)}
                          className="px-4 py-2 hover:bg-[#d19336] hover:text-white cursor-pointer transition-colors"
                        >
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    min="0"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  />
                  <input
                    type="text"
                    name="unit"
                    value={formData.unit}
                    onChange={handleChange}
                    placeholder="Unit Type"
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  >
                    <option value="IN^91">India + 91</option>
                    <option value="US^1">United States + 1</option>
                    <option value="UK^44">United Kingdom + 44</option>
                  </select>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={formData.phoneIsd}
                      readOnly
                      className="w-20 px-2 py-2 border border-gray-300 rounded-md bg-gray-100"
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone / Mobile"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                    />
                  </div>
                </div>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Leave a Message for us"
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#231f20] text-white px-6 py-3 rounded-md hover:bg-[#d19336] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Happy Clients Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-8 bg-[#f1f1f1] rounded-lg">
              <div className="text-5xl font-bold text-[#d19336] mb-2">100,000+</div>
              <div className="text-lg text-gray-700">Happy Customers</div>
            </div>
            <div className="p-8 bg-[#f1f1f1] rounded-lg">
              <div className="text-5xl font-bold text-[#d19336] mb-2">20+</div>
              <div className="text-lg text-gray-700">Products</div>
            </div>
            <div className="p-8 bg-[#f1f1f1] rounded-lg">
              <div className="text-5xl font-bold text-[#d19336] mb-2">500+</div>
              <div className="text-lg text-gray-700">World Wide Client</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
      <section className="py-12 bg-[#f3f3f3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="text-[#231f20]">Our </span>
              <span className="text-[#d19336]">Clients</span>
            </h2>
            <div className="w-24 h-1 bg-[#d19336] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="aspect-square bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Client {i}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Home

