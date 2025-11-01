import { useState, useRef, useEffect } from 'react'

const SendSMSModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    productService: '',
    productSlno: '',
    quantity: '',
    unit: '',
    details: 'I am interested. Kindly send the quotation for the same.',
    name: '',
    email: '',
    country: 'IN^91',
    phoneIsd: '91',
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

  // Product/Service list - same as SendEmail
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
    'piece', 'pc', 'pieces', 'pcs', 'Kilogram', 'kg', 'Kilograms', 'kgs', 'Bag', 'Bags',
    'Unit', 'Units', 'Pair', 'Pairs', 'Set', 'Sets', 'Meter', 'm', 'Ton', 'Tn', 'Tons',
    'Metric Ton', 'MT', 'Metric Tons', 'Box', 'Boxes', 'Square Feet', 'Sq. Ft.', 'Roll',
    'Rolls', 'Bottle', 'Bottles', 'Litre', 'Ltr', 'Litres', 'Ltrs', 'Packet', 'Pkt',
    'Packets', 'Pkts', 'Sheet', 'Sheets', 'Dozen', 'Doz', 'Dozens', 'Carton', 'CTN',
    'Cartons', 'Container', 'CNT', 'Containers', 'Pack', 'Packs', 'Ream', 'Reams', 'Gram',
    'gm', 'Grams', 'gms', 'Ounce', 'oz', 'Pound', 'lb', 'Pounds', 'lbs', 'Gallon', 'gal',
    'Gallons', 'Machine', 'Plant', 'Litre', 'Ltrs'
  ]

  const countries = [
    { value: "AF^93", label: "Afghanistan + 93" },
    { value: "AL^335", label: "Albania + 335" },
    { value: "DZ^213", label: "Algeria + 213" },
    { value: "IN^91", label: "India + 91", selected: true },
    { value: "US^1", label: "United States + 1" },
    { value: "UK^44", label: "United Kingdom + 44" },
  ]

  useEffect(() => {
    if (!isOpen) {
      setFormData({
        productService: '',
        productSlno: '',
        quantity: '',
        unit: '',
        details: 'I am interested. Kindly send the quotation for the same.',
        name: '',
        email: '',
        country: 'IN^91',
        phoneIsd: '91',
        phone: ''
      })
      setShowQuantity(false)
      setSubmitSuccess(false)
      setIsUnitReadOnly(true)
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

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

  const handleCountryChange = (e) => {
    const value = e.target.value
    const isdCode = value.split('^')[1] || '91'
    setFormData(prev => ({
      ...prev,
      country: value,
      phoneIsd: isdCode
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setTimeout(() => {
        onClose()
      }, 3000)
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto relative" 
        onClick={(e) => e.stopPropagation()}
        style={{ maxWidth: '340px' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close"
        >
          <i className="fas fa-times text-xl"></i>
        </button>

        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-semibold text-center mb-4 text-black">Send SMS Enquiry</h2>

          {submitSuccess ? (
            <div className="text-center py-8">
              <p className="text-xl font-semibold text-green-600 mb-2">Thank you</p>
              <p>Your Enquiry has been sent successfully.</p>
            </div>
          ) : (
            <>
              {/* Product/Service */}
              <div className="mb-3 relative" ref={autocompleteRef}>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.productService}
                    onChange={handleProductChange}
                    placeholder="Product / Service Looking for"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] pr-10"
                  />
                  <i className="fas fa-file-text absolute right-3 top-3 text-gray-400"></i>
                </div>
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {filteredSuggestions.slice(0, 10).map((product, index) => (
                      <div
                        key={index}
                        onClick={() => selectProduct(product)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {product.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Quantity and Unit */}
              {showQuantity && (
                <div className="mb-3">
                  <div className="flex gap-2">
                    <div className="flex-1 relative">
                      <input
                        type="number"
                        min="0"
                        value={formData.quantity}
                        onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                        placeholder="Quantity"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                      />
                      <i className="fas fa-cubes absolute right-3 top-3 text-gray-400"></i>
                    </div>
                    <div className="w-32 relative" ref={unitRef}>
                      <input
                        type="text"
                        value={formData.unit}
                        onChange={handleUnitChange}
                        placeholder="Unit Type"
                        readOnly={isUnitReadOnly}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] bg-gray-50 pr-8"
                      />
                      <i className="fas fa-sitemap absolute right-2 top-3 text-gray-400"></i>
                      {!isUnitReadOnly && showUnitSuggestions && unitSuggestions.length > 0 && (
                        <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-40 overflow-y-auto">
                          {unitSuggestions.slice(0, 8).map((unit, index) => (
                            <div
                              key={index}
                              onClick={() => {
                                setFormData(prev => ({ ...prev, unit }))
                                setShowUnitSuggestions(false)
                              }}
                              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                              {unit}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  {isUnitReadOnly && (
                    <button
                      type="button"
                      onClick={() => setIsUnitReadOnly(false)}
                      className="text-sm text-[#d19336] underline mt-1 flex items-center gap-1"
                    >
                      <i className="fas fa-pencil-square-o"></i> Edit
                    </button>
                  )}
                </div>
              )}

              {/* Details */}
              <div className="mb-3 relative">
                <textarea
                  rows="5"
                  value={formData.details}
                  onChange={(e) => setFormData(prev => ({ ...prev, details: e.target.value }))}
                  placeholder="Describe your requirement in detail. We will get back soon."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                />
                <i className="fas fa-pencil absolute right-3 top-3 text-gray-400"></i>
              </div>

              {/* Name */}
              <div className="mb-3 relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Enter Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] pr-10"
                  required
                />
                <i className="fas fa-user absolute right-3 top-3 text-gray-400"></i>
              </div>

              {/* Email */}
              <div className="mb-3 relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] pr-10"
                  required
                />
                <i className="fas fa-envelope absolute right-3 top-3 text-gray-400"></i>
              </div>

              {/* Phone */}
              <div className="mb-4">
                <div className="flex gap-2">
                  <div className="w-20 flex items-center justify-center border border-gray-300 rounded-md bg-gray-50 px-2">
                    <span className="text-sm">+{formData.phoneIsd}</span>
                  </div>
                  <select
                    value={formData.country}
                    onChange={handleCountryChange}
                    className="w-40 px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336] text-sm"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country.value}>
                        {country.label.split(' + ')[0]}
                      </option>
                    ))}
                  </select>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                    placeholder="Mobile No"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#d19336]"
                    required
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#d19336] text-white px-6 py-3 rounded-md hover:bg-[#b8822a] transition-colors font-semibold disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <i className="fas fa-paper-plane mr-2"></i>
                    Send SMS
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  )
}

export default SendSMSModal

