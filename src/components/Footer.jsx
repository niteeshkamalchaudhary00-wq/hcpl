import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [formData, setFormData] = useState({
    productService: '',
    productSlno: '',
    quantity: '',
    unit: '',
    details: '',
    name: '',
    email: '',
    country: 'IN^91',
    phoneIsd: '+91',
    phone: ''
  })

  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [showUnitSuggestions, setShowUnitSuggestions] = useState(false)
  const [unitSuggestions, setUnitSuggestions] = useState([])
  const [isUnitReadOnly, setIsUnitReadOnly] = useState(true)
  const [showQuantity, setShowQuantity] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const autocompleteRef = useRef(null)
  const unitRef = useRef(null)

  // Product/Service list
  const products = [
    { label: "1000-2000 LPH Water Softener Plant", id: 7319520, unit: "Unit", type: "0" },
    { label: "2000-5000 LPH Water Softener Plant", id: 7319524, unit: "Unit", type: "0" },
    { label: "2400 BPH Automatic Pet Stretch Blow Moulding Machine", id: 7287625, unit: "Machine", type: "0" },
    { label: "Alkaline Mineral Water Plant", id: 7286830, unit: "Plant", type: "0" },
    { label: "Automatic BOPP Hot Glue Labelling Machine", id: 7287658, unit: "Machine", type: "0" },
    { label: "Automatic Drinking Water Filling Machine", id: 7287431, unit: "Plant", type: "0" },
    { label: "Automatic Mineral Water Plant", id: 7286861, unit: "Plant", type: "0" },
    { label: "Automatic Pet Bottle Rinser Filler Capper Machine", id: 7287418, unit: "Plant", type: "0" },
    { label: "Automatic RO Plant", id: 7286744, unit: "piece", type: "0" },
    { label: "Automatic Shrink Wrapping Machine", id: 7287482, unit: "Machine", type: "0" },
    { label: "Automatic Sleeve Applicator", id: 7287652, unit: "Piece", type: "0" },
    { label: "Automatic Sticker Labelling Machine", id: 7287649, unit: "Machine", type: "0" },
    { label: "Bag Filters", id: 7287898, unit: "Piece", type: "0" },
    { label: "Beverage Manufacturing Plant", id: 7287780, unit: "Plant", type: "0" },
    { label: "Carbonated Beverage Manufacturing Plant", id: 7287797, unit: "Plant", type: "0" },
    { label: "Carbonated Soft Drink Filling Plant", id: 6095773, unit: "Piece", type: "0" },
    { label: "Carbonated Soft Drinks Filling Machine", id: 7287435, unit: "Machine", type: "0" },
    { label: "Cartridge Filters", id: 7287892, unit: "Piece", type: "0" },
    { label: "Commercial Alkaline Ionizer", id: 7287706, unit: "Machine", type: "0" },
    { label: "Commercial Reverse Osmosis Plant", id: 7319484, unit: "Unit", type: "0" },
    { label: "Commercial Reverse Osmosis System", id: 7206907, unit: "piece", type: "0" },
    { label: "Common Effluent Treatment Plant", id: 7319667, unit: "Unit", type: "0" },
    { label: "Demineralization Water Plant", id: 6434861, unit: "Piece", type: "0" },
    { label: "Dialysis Ro Plant", id: 6074670, unit: "Plant", type: "0" },
    { label: "DM Plant", id: 7319700, unit: "Unit", type: "0" },
    { label: "Drinking Water Plant", id: 7287397, unit: "Plant", type: "0" },
    { label: "Effluent Treatment Plant", id: 6074573, unit: "Container", type: "0" },
    { label: "effluent water treatment plant", id: 7432336, unit: "Set", type: "0" },
    { label: "FRP Automatic Reverse Osmosis Plant", id: 7319498, unit: "Unit", type: "0" },
    { label: "FRP Commercial Reverse Osmosis Plant", id: 7319454, unit: "Unit", type: "0" },
    { label: "FRP Semi-Automatic Reverse Osmosis Plant", id: 7319463, unit: "Unit", type: "0" },
    { label: "Fully Automatic 20 Liter Jar Rinsing Filling Capping Machine", id: 7287448, unit: "Machine", type: "0" },
    { label: "Fully Automatic Mineral Water Plant", id: 7286826, unit: "Pack", type: "0" },
    { label: "Fully Automatic Pet Stretch Blow Moulding Machine", id: 7287632, unit: "Machine", type: "0" },
    { label: "Fully Automatic Soda Soft Drink Plant", id: 7287839, unit: "Plant", type: "0" },
    { label: "Industrial Effluent Treatment Plant", id: 7319679, unit: "Unit", type: "0" },
    { label: "Industrial Reverse Osmosis Plant", id: 6074656, unit: "Plant", type: "0" },
    { label: "Industrial RO Plant", id: 7286722, unit: "Plant", type: "0" },
    { label: "Iron Removal Filters", id: 6074542, unit: "Plant", type: "0" },
    { label: "ISI Mineral Water Plant", id: 7287389, unit: "Pack", type: "0" },
    { label: "Jar Washing And Cleaning Machine", id: 7287460, unit: "Machine", type: "0" },
    { label: "Juice Bottle Filling Machine", id: 7287443, unit: "Machine", type: "0" },
    { label: "Mineral Water Bottling Plant", id: 7286869, unit: "Plant", type: "0" },
    { label: "Mineral Water Filling Machine", id: 7287404, unit: "Machine", type: "0" },
    { label: "Non ISI Mineral Water Plant", id: 7287691, unit: "Plant", type: "0" },
    { label: "Packaged Drinking Water Filling Machine", id: 6074581, unit: "Plant", type: "0" },
    { label: "Packaged Drinking Water Plant", id: 7287370, unit: "Plant", type: "0" },
    { label: "Portable Effluent Treatment Plant", id: 7319688, unit: "Unit", type: "0" },
    { label: "RO Antiscalant Chemical", id: 7287880, unit: "Litre", type: "0" },
    { label: "RO Membranes", id: 7287863, unit: "Piece", type: "0" },
    { label: "Seawater Desalination Plant", id: 7286728, unit: "Plant", type: "0" },
    { label: "Semi Automatic Pet Stretch Blow Moulding Machine", id: 7287615, unit: "Machine", type: "0" },
    { label: "Semi Automatic Shrink Wrapping Machine", id: 7287465, unit: "Machine", type: "0" },
    { label: "Sewage Treatment Plant", id: 6074532, unit: "Plant", type: "0" },
    { label: "Soft Drink Making Machinery", id: 7287825, unit: "Plant", type: "0" },
    { label: "Soft Drink Manufacturing Plant", id: 7287815, unit: "Plant", type: "0" },
    { label: "Stainless Steel RO Plant", id: 7286759, unit: "Piece", type: "0" },
    { label: "Stp Plant", id: 7432338, unit: "piece", type: "0" },
    { label: "Turnkey Mineral Water Project", id: 7287382, unit: "Plant", type: "0" },
    { label: "Uf Filter", id: 7319721, unit: "Unit", type: "0" },
    { label: "Ultra Filtration Plant", id: 7286774, unit: "Plant", type: "0" },
    { label: "Water Bottle Filling Machine", id: 7287412, unit: "Plant", type: "0" },
    { label: "Water Chiller Machine", id: 6232748, unit: "Piece", type: "0" },
    { label: "Water Filtration System", id: 7286797, unit: "Piece", type: "0" },
    { label: "Water Plant Machinery", id: 7287393, unit: "Plant", type: "0" },
    { label: "Water Softener", id: 7319577, unit: "Unit", type: "0" },
    { label: "Water Softening Plant", id: 6074634, unit: "Plant", type: "0" },
    { label: "Water Softening System", id: 7319530, unit: "Unit", type: "0" },
    { label: "Sewage Treatment Equipment", id: 7319604, unit: "Unit", type: "0" },
    { label: "MBR Sewage Treatment Plant", id: 7319591, unit: "Unit", type: "0" },
    { label: "SBR Sewage Treatment Plant", id: 7319600, unit: "Unit", type: "0" },
    { label: "Stp Plant Project Work", id: 7319625, unit: "Unit", type: "0" }
  ]

  const units = [
    "piece", "pc", "pieces", "pcs", "Kilogram", "kg", "Kilograms", "kgs", "Bag", "Bags", "Unit", "Units", "Pair", "Pairs", "Set", "Sets", "Meter", "m", "Ton", "Tn", "Tons", "Metric Ton", "MT", "Metric Tons", "Box", "Boxes", "Square Feet", "Sq. Ft.", "Roll", "Rolls", "Bottle", "Bottles", "Litre", "Ltr", "Litres", "Ltrs", "Packet", "Pkt", "Packets", "Pkts", "Sheet", "Sheets", "Dozen", "Doz", "Dozens", "Carton", "CTN", "Cartons", "Container", "CNT", "Containers", "Pack", "Packs"
  ]

  const countries = [
    { value: "AF^93", label: "Afghanistan" },
    { value: "AL^335", label: "Albania" },
    { value: "DZ^213", label: "Algeria" },
    { value: "AU^61", label: "Australia" },
    { value: "AT^43", label: "Austria" },
    { value: "BD^880", label: "Bangladesh" },
    { value: "BE^32", label: "Belgium" },
    { value: "BR^55", label: "Brazil" },
    { value: "CA^1", label: "Canada" },
    { value: "CN^86", label: "China" },
    { value: "DK^45", label: "Denmark" },
    { value: "EG^20", label: "Egypt" },
    { value: "FR^33", label: "France" },
    { value: "DE^49", label: "Germany" },
    { value: "HK^852", label: "Hong Kong" },
    { value: "IN^91", label: "India", selected: true },
    { value: "ID^62", label: "Indonesia" },
    { value: "IT^39", label: "Italy" },
    { value: "JP^81", label: "Japan" },
    { value: "MY^60", label: "Malaysia" },
    { value: "MX^52", label: "Mexico" },
    { value: "NL^31", label: "Netherlands" },
    { value: "NZ^64", label: "New Zealand" },
    { value: "PK^92", label: "Pakistan" },
    { value: "PH^63", label: "Philippines" },
    { value: "RU^7", label: "Russian Federation" },
    { value: "SA^966", label: "Saudi Arabia" },
    { value: "SG^65", label: "Singapore" },
    { value: "ZA^27", label: "South Africa" },
    { value: "KR^82", label: "South Korea" },
    { value: "ES^34", label: "Spain" },
    { value: "LK^94", label: "Sri Lanka" },
    { value: "SE^46", label: "Sweden" },
    { value: "CH^41", label: "Switzerland" },
    { value: "TH^66", label: "Thailand" },
    { value: "TR^90", label: "Turkey" },
    { value: "AE^971", label: "United Arab Emirates" },
    { value: "UK^44", label: "United Kingdom" },
    { value: "US^1", label: "United States" }
  ]

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
        setShowSuggestions(false)
      }
      if (unitRef.current && !unitRef.current.contains(event.target)) {
        setShowUnitSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleProductChange = (e) => {
    const value = e.target.value
    setFormData(prev => ({ ...prev, productService: value }))
    
    if (value.length > 0) {
      const filtered = products.filter(p => 
        p.label.toLowerCase().includes(value.toLowerCase())
      )
      setFilteredSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }

  const selectProduct = (product) => {
    setFormData(prev => ({
      ...prev,
      productService: product.label,
      productSlno: product.id,
      unit: product.unit || '',
      quantity: '1'
    }))
    setShowSuggestions(false)
    setShowQuantity(true)
    setIsUnitReadOnly(true)
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

  const handleCountryChange = (e) => {
    const value = e.target.value
    if (value) {
      const isdCode = value.split('^')[1] || '91'
      setFormData(prev => ({
        ...prev,
        country: value,
        phoneIsd: `+${isdCode}`
      }))
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      
      setTimeout(() => {
        setFormData({
          productService: '',
          productSlno: '',
          quantity: '',
          unit: '',
          details: '',
          name: '',
          email: '',
          country: 'IN^91',
          phoneIsd: '+91',
          phone: ''
        })
        setShowQuantity(false)
        setSubmitSuccess(false)
        setIsUnitReadOnly(true)
      }, 3000)
    }, 1000)
  }

  return (
    <footer className="bg-gradient-to-br from-[#231f20] via-gray-900 to-[#231f20] text-white mt-auto">
      {/* Quick Enquiry Section */}
      <div className="bg-gradient-to-r from-[#d19336] to-[#b8822a] py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Get a Quick Quote
              </h3>
              <p className="text-white/90">Tell us what you're looking for and we'll get back to you</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl">
              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                    <i className="fas fa-check text-3xl text-white"></i>
                  </div>
                  <h4 className="text-2xl font-bold mb-2">Thank You!</h4>
                  <p className="text-white/90">Your enquiry has been sent successfully.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Product/Service */}
                  <div className="relative" ref={autocompleteRef}>
                    <input
                      type="text"
                      value={formData.productService}
                      onChange={handleProductChange}
                      placeholder="Search for a product or service..."
                      className="w-full px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 placeholder-gray-500 transition-all duration-300 shadow-lg"
                      required
                    />
                    {showSuggestions && filteredSuggestions.length > 0 && (
                      <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-64 overflow-y-auto">
                        {filteredSuggestions.slice(0, 10).map((product, index) => (
                          <div
                            key={index}
                            onClick={() => selectProduct(product)}
                            className="px-5 py-3 hover:bg-[#d19336] hover:text-white cursor-pointer text-gray-800 transition-colors border-b border-gray-100 last:border-b-0"
                          >
                            {product.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Quantity and Unit */}
                  {showQuantity && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <input
                        type="number"
                        min="0"
                        max="9999999"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                        placeholder="Quantity"
                        className="px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 shadow-lg"
                      />
                      <div className="relative" ref={unitRef}>
                        <input
                          type="text"
                          value={formData.unit}
                          onChange={handleUnitChange}
                          placeholder="Unit"
                          readOnly={isUnitReadOnly}
                          className="w-full px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/90 focus:bg-white focus:border-white focus:outline-none text-gray-800 shadow-lg"
                        />
                        {!isUnitReadOnly && showUnitSuggestions && unitSuggestions.length > 0 && (
                          <div className="absolute z-20 w-full mt-2 bg-white border border-gray-200 rounded-xl shadow-2xl max-h-48 overflow-y-auto">
                            {unitSuggestions.slice(0, 8).map((unit, index) => (
                              <div
                                key={index}
                                onClick={() => handleUnitSuggestionClick(unit)}
                                className="px-5 py-2.5 hover:bg-[#d19336] hover:text-white cursor-pointer text-gray-800 transition-colors"
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
                          className="px-5 py-3.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <i className="fas fa-edit"></i> Edit Unit
                        </button>
                      )}
                    </div>
                  )}

                  {/* Details */}
                  <textarea
                    rows="3"
                    value={formData.details}
                    onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                    placeholder="Describe your requirement..."
                    className="w-full px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 placeholder-gray-500 resize-none shadow-lg"
                  />

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 placeholder-gray-500 shadow-lg"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 placeholder-gray-500 shadow-lg"
                      required
                    />
                  </div>

                  {/* Country and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleCountryChange}
                      className="px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 shadow-lg"
                      required
                    >
                      <option value="">Select Country *</option>
                      {countries.map((country, index) => (
                        <option key={index} value={country.value}>
                          {country.label}
                        </option>
                      ))}
                    </select>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="phone_isd"
                        value={formData.phoneIsd}
                        readOnly
                        className="w-20 px-3 py-3.5 rounded-xl border-2 border-white/20 bg-white/70 text-gray-800 text-center font-semibold shadow-lg"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Mobile Number *"
                        className="flex-1 px-5 py-3.5 rounded-xl border-2 border-white/20 bg-white/95 focus:bg-white focus:border-white focus:outline-none text-gray-800 placeholder-gray-500 shadow-lg"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="text-center pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-[#231f20] hover:bg-black text-white px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 shadow-2xl transform hover:scale-105 disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <i className="fas fa-spinner fa-spin"></i>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <i className="fas fa-paper-plane"></i>
                          Send Enquiry
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              HALEY CIBUS <span className="text-[#d19336]">PVT. LTD.</span>
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              Leading manufacturer and exporter of water treatment plants, RO systems, and beverage manufacturing equipment.
            </p>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Haleypremiumwater" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#d19336] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/HaleyWaterIndia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#d19336] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com/haleywaterindia" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#d19336] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-[#d19336] rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#d19336] mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Products
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Our Clients
                </Link>
              </li>
              <li>
                <Link to="/videos" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Videos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Products */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#d19336] mr-2"></span>
              Popular Products
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  RO Water Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Mineral Water Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Sewage Treatment Plants
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Water Softeners
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-[#d19336] transition-colors duration-300 text-sm flex items-center gap-2 group">
                  <i className="fas fa-angle-right text-[#d19336] text-xs group-hover:translate-x-1 transition-transform"></i>
                  Filling Machines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center">
              <span className="w-1 h-6 bg-[#d19336] mr-2"></span>
              Contact Info
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-map-marker-alt text-[#d19336] mt-1 text-sm"></i>
                <span className="text-sm">Moti Nagar, Delhi, India</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-[#d19336] mt-1 text-sm"></i>
                <a href="tel:+917230092401" className="text-gray-400 hover:text-[#d19336] transition-colors text-sm">
                  +91-7230092401
                </a>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-[#d19336] mt-1 text-sm"></i>
                <a href="mailto:hcplbharat@gmail.com" className="text-gray-400 hover:text-[#d19336] transition-colors text-sm break-all">
                  hcplbharat@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <i className="fas fa-clock text-[#d19336] mt-1 text-sm"></i>
                <span className="text-sm">Mon - Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p className="text-center md:text-left">
              &copy; 2024 <span className="font-semibold text-white">HALEY CIBUS PVT. LTD.</span> All Rights Reserved.
            </p>
            <p className="text-center md:text-right">
              Developed & Managed By{' '}
              <a
                href="https://www.weblink.in"
                rel="nofollow"
                target="_blank"
                className="text-[#d19336] hover:text-white transition-colors font-medium"
              >
                Weblink.In Pvt. Ltd.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
