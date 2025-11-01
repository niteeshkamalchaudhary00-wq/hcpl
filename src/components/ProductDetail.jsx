import { useState, useRef, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ProductDetail = () => {
  const { slug } = useParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: '',
    unit: 'Unit',
    purpose: '',
    details: 'I am interested. Kindly send the quotation for the same.'
  })
  const [showUnitSuggestions, setShowUnitSuggestions] = useState(false)
  const [unitSuggestions, setUnitSuggestions] = useState([])
  const [isUnitReadOnly, setIsUnitReadOnly] = useState(true)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [linkCopied, setLinkCopied] = useState(false)
  const shareMenuRef = useRef(null)

  // Close share menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shareMenuRef.current && !shareMenuRef.current.contains(event.target)) {
        setShowShareMenu(false)
      }
    }

    if (showShareMenu) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showShareMenu])

  // Product data - In a real app, this would come from an API based on the slug
  const product = {
    name: 'Commercial Reverse Osmosis Plant',
    image: 'https://2.wlimg.com/product_images/bc-full/2024/3/9525058/1000-5000-lph-ro-plant-1709365463-7319484.jpeg',
    price: '₹1.50 Lac - 7.50 Lac',
    priceUnit: 'Piece',
    businessType: 'Manufacturer, Exporter, Supplier',
    countryOfOrigin: 'India',
    weight: '50-100gm',
    type: 'Ro Plant Filter',
    specifications: {
      'Capacity': '1000-5000 (Liter/hour)',
      'Application': 'Filter Use,Commercial',
      'Color': 'White',
      'Material': 'FRP',
      'Shape': 'Round',
      'Length': '60inch',
      'Outside Diameter': '44-46mm',
      'Automation': 'Automatic',
      'Purification Type': 'RO',
      'Auto Start': 'Yes',
      'Number Of Membranes In Ro': '2',
      'Port': 'Delhi',
      'Payment Terms': 'L/C, D/A, D/P, T/T, Western Union, Other',
      'Delivery Time': '1 Week'
    }
  }

  const relatedProducts = [
    {
      name: 'Sewage Treatment Equipment',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/mbbr-sewage-treatment-plant-1709369143-7319604.jpeg',
      link: '/products/sewage-treatment-equipment'
    },
    {
      name: 'Packaged Drinking Water Filling Machine',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/packaged-drinking-water-filling-machine-1707540344-6074581.jpeg',
      link: '/products/packaged-drinking-water-filling-machine'
    },
    {
      name: 'Common Effluent Treatment Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/common-effluent-treatment-plant-1709370204-7319667.jpeg',
      link: '/products/common-effluent-treatment-plant'
    },
    {
      name: 'Portable Effluent Treatment Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/portable-effluent-treatment-plant-1709370531-7319688.jpeg',
      link: '/products/portable-effluent-treatment-plant'
    },
    {
      name: 'FRP Automatic Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/5000-10000-lph-ro-plant-1709365704-7319498.jpeg',
      link: '/products/frp-automatic-reverse-osmosis-plant'
    },
    {
      name: '1000-2000 LPH Water Softener Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/1000-2000-lph-water-softener-plant-1709366030-7319520.jpeg',
      link: '/products/1000-2000-lph-water-softener-plant'
    },
    {
      name: 'Fully Automatic Mineral Water Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-mineral-water-plant-1707480582-7286826.jpeg',
      link: '/products/fully-automatic-mineral-water-plant'
    },
    {
      name: 'Turnkey Mineral Water Project',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/turnkey-mineral-water-project-1707539039-7287382.jpeg',
      link: '/products/turnkey-mineral-water-project'
    },
    {
      name: 'Industrial Reverse Osmosis Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2021/11/9525058/plastic-water-purifier-ro-plant-1636697866-6074656.jpeg',
      link: '/products/industrial-reverse-osmosis-plant'
    },
    {
      name: 'Stainless Steel RO Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/ss-ro-plant-1707478888-7286759.jpeg',
      link: '/products/ss-ro-plant'
    },
    {
      name: 'Automatic Sleeve Applicator',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-sleeve-applicator-1707546502-7287652.jpeg',
      link: '/products/automatic-sleeve-applicator'
    },
    {
      name: 'Carbonated Beverage Manufacturing Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/carbonated-beverage-manufacturing-plant-1707548119-7287797.jpeg',
      link: '/products/carbonated-beverage-manufacturing-plant'
    }
  ]

  const blogs = [
    {
      title: 'BIS Water RO Plant',
      image: 'https://catalog.wlimg.com/blog_images/blog_post-12843-9525058-ei.jpeg',
      link: '/blog/bis-water-ro-plant'
    },
    {
      title: 'Admirable Benefits of SS RO Plants for Daily Life',
      image: 'https://catalog.wlimg.com/blog_images/blog_post-12550-9525058-ei.jpeg',
      link: '/blog/admirable-benefits-of-ss-ro-plants'
    }
  ]

  const units = [
    'Unit', 'Units', 'Piece', 'Pieces', 'Plant', 'Plants', 'Machine', 'Machines',
    'Set', 'Sets', 'Container', 'Containers', 'Litre', 'Litres', 'Kilogram', 'kg',
    'Ton', 'Tn', 'Metric Ton', 'MT', 'Box', 'Square Feet', 'Roll', 'Bottle', 'Packet',
    'Sheet', 'Dozen', 'Carton', 'Pack', 'Gram', 'Ounce', 'Pound', 'Gallon', 'Meter',
    'Foot', 'Yard', 'Milliliter', 'Millimeter', 'Centimeter'
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % relatedProducts.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [relatedProducts.length])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleUnitChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, unit: value }))
    
    if (value.length > 0) {
      const filtered = units.filter(unit =>
        unit.toLowerCase().includes(value.toLowerCase())
      )
      setUnitSuggestions(filtered)
      setShowUnitSuggestions(true)
    } else {
      setShowUnitSuggestions(false)
    }
  }

  const handleUnitSuggestionClick = (unit) => {
    setFormData(prev => ({ ...prev, unit }))
    setShowUnitSuggestions(false)
    setIsUnitReadOnly(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add form submission logic here
  }

  const scrollToSpecs = () => {
    document.getElementById('specs').scrollIntoView({ behavior: 'smooth' })
  }

  const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    })
    setShowShareMenu(false)
  }

  const shareOnSocial = (platform) => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent(product.name)
    let shareUrl = ''

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`
        break
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`
        break
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
        break
      case 'whatsapp':
        shareUrl = `https://wa.me/?text=${title} ${url}`
        break
      default:
        return
    }

    window.open(shareUrl, '_blank', 'width=600,height=400')
    setShowShareMenu(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#d19336]">Home</Link>
            <span className="mx-2">›</span>
            <Link to="/products" className="hover:text-[#d19336]">Products</Link>
            <span className="mx-2">›</span>
            <Link to="/products/reverse-osmosis-plant" className="hover:text-[#d19336]">Reverse Osmosis Plant</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Product Section */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div>
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-lg border border-gray-200"
                />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-4">
                <div className="flex items-start justify-between mb-4">
                  <h1 className="text-3xl font-bold text-[#231f20] flex-1">{product.name}</h1>
                  <div className="relative" ref={shareMenuRef}>
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="ml-4 p-2 text-gray-600 hover:text-[#d19336] transition-colors"
                      title="Share"
                    >
                      <i className="fas fa-share-alt text-xl"></i>
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[180px]">
                        <div className="p-2">
                          <button
                            onClick={() => shareOnSocial('facebook')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                          >
                            <i className="fab fa-facebook text-blue-600"></i>
                            <span>Facebook</span>
                          </button>
                          <button
                            onClick={() => shareOnSocial('twitter')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                          >
                            <i className="fab fa-twitter text-blue-400"></i>
                            <span>Twitter</span>
                          </button>
                          <button
                            onClick={() => shareOnSocial('linkedin')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                          >
                            <i className="fab fa-linkedin text-blue-700"></i>
                            <span>LinkedIn</span>
                          </button>
                          <button
                            onClick={() => shareOnSocial('whatsapp')}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                          >
                            <i className="fab fa-whatsapp text-green-500"></i>
                            <span>WhatsApp</span>
                          </button>
                          <button
                            onClick={copyLink}
                            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2"
                          >
                            <i className="fas fa-link"></i>
                            <span>{linkCopied ? 'Copied!' : 'Copy Link'}</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-2xl font-bold text-[#d19336]">
                    {product.price}
                  </div>
                  <span className="text-gray-600">/ {product.priceUnit}</span>
                </div>
              </div>

              {/* Quick Info Table */}
              <div className="border border-gray-200 rounded-lg mb-6">
                <table className="w-full">
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 text-gray-600">Business Type</td>
                      <td className="p-3 font-semibold">{product.businessType}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 text-gray-600">Country of Origin</td>
                      <td className="p-3 font-semibold">{product.countryOfOrigin}</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 text-gray-600">Weight</td>
                      <td className="p-3 font-semibold">{product.weight}</td>
                    </tr>
                    <tr>
                      <td className="p-3 text-gray-600">Type</td>
                      <td className="p-3 font-semibold">{product.type}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="p-3 border-t border-gray-200">
                  <button
                    onClick={scrollToSpecs}
                    className="text-[#d19336] hover:underline text-sm font-semibold"
                  >
                    Click to view more
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-[#d19336] text-white px-6 py-3 rounded-md hover:bg-[#231f20] transition-colors font-semibold">
                  <i className="fas fa-phone mr-2"></i> Request to Call
                </button>
                <button className="w-full border-2 border-[#d19336] text-[#d19336] px-6 py-3 rounded-md hover:bg-[#d19336] hover:text-white transition-colors font-semibold">
                  <i className="fas fa-envelope mr-2"></i> Send Enquiry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Product Specifications */}
        <section id="specs" className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#231f20] mb-6">Product Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-3">
                <div className="flex">
                  <div className="w-2/5 text-gray-600">{key}</div>
                  <div className="w-3/5 font-semibold">{value}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-[#d19336] text-white px-8 py-3 rounded-md hover:bg-[#231f20] transition-colors font-semibold">
              Yes! I am interested
            </button>
          </div>
        </section>

        {/* Inquiry Form */}
        <section className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-[#231f20]">
              Looking for "<span className="text-[#d19336]">{product.name}</span>"?
            </h2>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mobile No.</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    name="unit"
                    value={formData.unit}
                    onChange={handleUnitChange}
                    readOnly={isUnitReadOnly}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] bg-gray-50"
                  />
                  <button
                    type="button"
                    onClick={() => setIsUnitReadOnly(false)}
                    className="text-[#d19336] hover:underline text-sm px-2 py-2"
                  >
                    <i className="fas fa-pencil mr-1"></i>Edit
                  </button>
                </div>
                {showUnitSuggestions && unitSuggestions.length > 0 && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                    {unitSuggestions.slice(0, 8).map((unit, index) => (
                      <div
                        key={index}
                        onClick={() => handleUnitSuggestionClick(unit)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {unit}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purpose of Requirement</label>
              <div className="flex gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="purpose"
                    value="Reselling"
                    checked={formData.purpose === 'Reselling'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Reselling
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="purpose"
                    value="End Use"
                    checked={formData.purpose === 'End Use'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  End Use
                </label>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Requirement Details</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-[#d19336] text-white px-8 py-3 rounded-md hover:bg-[#231f20] transition-colors font-semibold"
              >
                Send Enquiry
              </button>
            </div>
          </form>
        </section>

        {/* Related Products */}
        <section className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-[#231f20] mb-6 text-center">Explore More Products</h2>
          <div className="relative overflow-hidden">
            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {relatedProducts.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-[#231f20] mb-3 line-clamp-2">
                      {item.name}
                    </h3>
                    <Link
                      to={item.link}
                      className="inline-block w-full text-center bg-[#d19336] text-white px-4 py-2 rounded-md hover:bg-[#231f20] transition-colors text-sm"
                    >
                      Get Best Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="bg-white border border-gray-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-[#231f20] mb-6 text-center">Our Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#231f20] mb-3">
                    {blog.title}
                  </h3>
                  <Link
                    to={blog.link}
                    className="text-[#d19336] hover:underline font-semibold"
                  >
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default ProductDetail

