import { useState, useRef, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  const [formData, setFormData] = useState({
    productService: '',
    quantity: '',
    unit: '',
    name: '',
    email: '',
    country: 'IN^91',
    phone: '',
    details: ''
  })

  const [isUnitReadOnly, setIsUnitReadOnly] = useState(true)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const autocompleteRef = useRef(null)

  // Product/Service list
  const products = [
    '1000-2000 LPH Water Softener Plant',
    '2000-5000 LPH Water Softener Plant',
    '2400 BPH Automatic Pet Stretch Blow Moulding Machine',
    'Alkaline Mineral Water Plant',
    'Automatic BOPP Hot Glue Labelling Machine',
    'Automatic Drinking Water Filling Machine',
    'Automatic Mineral Water Plant',
    'Automatic Pet Bottle Rinser Filler Capper Machine',
    'Automatic RO Plant',
    'Automatic Shrink Wrapping Machine',
    'Automatic Sleeve Applicator',
    'Automatic Sticker Labelling Machine',
    'Bag Filters',
    'Beverage Manufacturing Plant',
    'Carbonated Beverage Manufacturing Plant',
    'Carbonated Soft Drink Filling Plant',
    'Carbonated Soft Drinks Filling Machine',
    'Cartridge Filters',
    'Commercial Alkaline Ionizer',
    'Commercial Reverse Osmosis Plant',
    'Commercial Reverse Osmosis System',
    'Common Effluent Treatment Plant',
    'Demineralization Water Plant',
    'Dialysis Ro Plant',
    'DM Plant',
    'Drinking Water Plant',
    'Effluent Treatment Plant',
    'effluent water treatment plant',
    'FRP Automatic Reverse Osmosis Plant',
    'FRP Commercial Reverse Osmosis Plant',
    'FRP Semi-Automatic Reverse Osmosis Plant',
    'Fully Automatic 20 Liter Jar Rinsing Filling Capping Machine',
    'Fully Automatic Mineral Water Plant',
    'Fully Automatic Pet Stretch Blow Moulding Machine',
    'Fully Automatic Soda Soft Drink Plant',
    'Industrial Effluent Treatment Plant',
    'Industrial Reverse Osmosis Plant',
    'Industrial RO Plant',
    'Iron Removal Filters',
    'ISI Mineral Water Plant',
    'Jar Washing And Cleaning Machine',
    'Juice Bottle Filling Machine',
    'Mineral Water Bottling Plant',
    'Mineral Water Filling Machine',
    'Non ISI Mineral Water Plant',
    'Packaged Drinking Water Filling Machine',
    'Packaged Drinking Water Plant',
    'Portable Effluent Treatment Plant',
    'RO Antiscalant Chemical',
    'RO Membranes',
    'Seawater Desalination Plant',
    'Semi Automatic Pet Stretch Blow Moulding Machine',
    'Semi Automatic Shrink Wrapping Machine',
    'Sewage Treatment Plant',
    'Soft Drink Making Machinery',
    'Soft Drink Manufacturing Plant',
    'Stainless Steel RO Plant',
    'Stp Plant',
    'Turnkey Mineral Water Project',
    'Uf Filter',
    'Ultra Filtration Plant',
    'Water Bottle Filling Machine',
    'Water Chiller Machine',
    'Water Filtration System',
    'Water Plant Machinery',
    'Water Softener',
    'Water Softening Plant',
    'Water Softening System',
    'Sewage Treatment Equipment',
    'MBR Sewage Treatment Plant',
    'SBR Sewage Treatment Plant',
    'Stp Plant Project Work'
  ]

  const units = [
    'Unit', 'Units', 'Piece', 'Pieces', 'pc', 'pcs', 'Kilogram', 'kg', 'Kilograms', 'kgs',
    'Bag', 'Bags', 'Pair', 'Pairs', 'Set', 'Sets', 'Meter', 'm', 'Ton', 'Tn', 'Tons',
    'Metric Ton', 'MT', 'Metric Tons', 'Box', 'Boxes', 'Square Feet', 'Sq. Ft.', 'Roll', 'Rolls',
    'Bottle', 'Bottles', 'Litre', 'Ltr', 'Litres', 'Ltrs', 'Packet', 'Pkt', 'Packets', 'Pkts',
    'Sheet', 'Sheets', 'Dozen', 'Doz', 'Dozens', 'Carton', 'CTN', 'Cartons', 'Container', 'CNT',
    'Containers', 'Pack', 'Packs', 'Plant', 'Plants', 'Machine', 'Machines'
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProductChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, productService: value }))
    
    if (value.length > 0) {
      const filtered = products.filter(product =>
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
    // Auto-set unit based on product type
    if (suggestion.toLowerCase().includes('plant')) {
      setFormData(prev => ({ ...prev, unit: 'Plant' }))
    } else if (suggestion.toLowerCase().includes('machine')) {
      setFormData(prev => ({ ...prev, unit: 'Machine' }))
    }
  }

  const handleUnitChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, unit: value }))
    
    if (value.length > 0) {
      const filtered = units.filter(unit =>
        unit.toLowerCase().includes(value.toLowerCase())
      )
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
  }

  const contactInfo = [
    {
      icon: 'fas fa-user',
      label: 'Contact Person',
      value: 'Mr. Rajat Watts'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Corporate Office Address',
      value: 'A-37, Sector 5, DSIIDC, Industrial Complex, New Delhi - 110039, India'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Reg. Address',
      value: 'B-369, First Floor, Sudershan Park, Moti Nagar, Delhi - 110015, India'
    },
    {
      icon: 'fas fa-mobile-alt',
      label: 'Mobile',
      value: '+91-7230092401, +91-7230092406'
    },
    {
      icon: 'fas fa-phone',
      label: 'Toll Free No.',
      value: '18001202633'
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email ID',
      value: 'hcplbharat@gmail.com',
      isEmail: true
    },
    {
      icon: 'fas fa-envelope-o',
      label: 'Alternate Email ID',
      value: 'info@hcplbharat.com',
      isEmail: true
    },
    {
      icon: 'fas fa-globe',
      label: 'Web Page',
      value: 'https://www.exportersindia.com/haley-cibus/',
      isLink: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-2">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            <a href="/" className="hover:text-[#d19336]">Home</a> <span className="mx-2">›</span> Contact Us
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="bg-[#f1f1f1] rounded-lg p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-[#231f20] mb-2">HALEY CIBUS PVT. LTD.</h1>
              <div className="w-20 h-1 bg-[#d19336]"></div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index}>
                  {index > 0 && <div className="border-t border-dashed border-gray-300 my-4"></div>}
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d19336] text-white w-12 h-12 rounded flex items-center justify-center flex-shrink-0">
                      <i className={info.icon}></i>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-800 mb-1">{info.label}</p>
                      {info.isEmail ? (
                        <a href={`mailto:${info.value}`} className="text-gray-600 hover:text-[#d19336]">
                          {info.value}
                        </a>
                      ) : info.isLink ? (
                        <a href={info.value} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#d19336]">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-[#fcfcfc] rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#231f20] mb-6">Send Your Enquiry</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product/Service */}
              <div className="relative" ref={autocompleteRef}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Product / Service Looking for <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="productService"
                  value={formData.productService}
                  onChange={handleProductChange}
                  onFocus={() => {
                    if (formData.productService.length > 0) {
                      setShowSuggestions(true)
                    }
                  }}
                  placeholder="Product / Service Looking for"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  required
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

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                <div className="flex gap-2 items-start">
                  <input
                    type="number"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    placeholder="Estimated Quantity"
                    min="0"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  />
                  <div className="relative flex-1">
                    <input
                      type="text"
                      name="unit"
                      value={formData.unit}
                      onChange={handleUnitChange}
                      onFocus={() => {
                        if (!isUnitReadOnly && formData.unit.length > 0) {
                          const filtered = units.filter(unit =>
                            unit.toLowerCase().includes(formData.unit.toLowerCase())
                          )
                          setSuggestions(filtered)
                        }
                      }}
                      placeholder="Unit Type"
                      readOnly={isUnitReadOnly}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] bg-gray-50"
                    />
                    {!isUnitReadOnly && suggestions.length > 0 && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                        {suggestions.slice(0, 8).map((unit, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setFormData(prev => ({ ...prev, unit }))
                              setSuggestions([])
                            }}
                            className="px-4 py-2 hover:bg-[#d19336] hover:text-white cursor-pointer transition-colors"
                          >
                            {unit}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  {isUnitReadOnly && (
                    <button
                      type="button"
                      onClick={() => setIsUnitReadOnly(false)}
                      className="text-sm text-[#d19336] hover:underline px-2 whitespace-nowrap mt-2"
                    >
                      Edit
                    </button>
                  )}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                  required
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center px-3 border border-gray-300 rounded-md bg-gray-50">
                    <span className="text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                    required
                  />
                </div>
              </div>

              {/* Enquiry Details */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enquiry Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Your Requirement"
                  rows="5"
                  maxLength="1000"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-[#231f20] text-white px-6 py-3 rounded-md hover:bg-[#d19336] transition-colors font-medium"
                >
                  Submit
                </button>
                <button
                  type="reset"
                  onClick={() => {
                    setFormData({
                      productService: '',
                      quantity: '',
                      unit: '',
                      name: '',
                      email: '',
                      country: 'IN^91',
                      phone: '',
                      details: ''
                    })
                    setIsUnitReadOnly(true)
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors font-medium"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13839.111662134841!2d73.9373756!3d29.870678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x915d389763a25066!2sHALEY%20CIBUS%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1656659107707!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
          ></iframe>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact

