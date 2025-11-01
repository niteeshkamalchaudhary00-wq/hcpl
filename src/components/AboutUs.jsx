import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const AboutUs = () => {
  const companyInfo = {
    natureOfBusiness: 'Manufacturer, Exporter & Supplier',
    employees: '17',
    yearEstablished: '2021',
    marketCovered: 'Worldwide',
    founders: 'Mr. Rajat Watts & Mrs. Surekha Sachdeva',
    gstDelhi: '07AAFCH6762C1ZN',
    gstSriganganagar: '08AAFCH6762C1ZL'
  }

  const products = [
    {
      name: 'Cartridge Filters',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/cartridge-filters-1707549663-7287892.jpeg',
      link: '/products/cartridge-filters'
    },
    {
      name: 'Packaged Drinking Water Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/packaged-drinking-water-plant-1707538746-7287370.jpeg',
      link: '/products/packaged-drinking-water-plant'
    },
    {
      name: 'Water Softening Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/water-softening-plant-1707479579-6074634.jpeg',
      link: '/products/water-softening-plant'
    },
    {
      name: '2400 BPH Automatic Pet Stretch Blow Moulding Machine',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/2400-bph-automatic-pet-stretch-blow-moulding-1707545841-7287625.jpeg',
      link: '/products/2400-bph-automatic-pet-stretch-blow-moulding-machine'
    },
    {
      name: 'Seawater Desalination Plant',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/seawater-desalination-plant-1707478181-7286728.jpeg',
      link: '/products/seawater-desalination-plant'
    },
    {
      name: 'Sewage Treatment Equipment',
      image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/mbbr-sewage-treatment-plant-1709369143-7319604.jpeg',
      link: '/products/sewage-treatment-equipment'
    }
  ]

  const services = [
    { icon: 'fa-water', title: 'Mineral Water Bottling Plant', description: 'State-of-the-art facilities for efficient and hygienic mineral water production.' },
    { icon: 'fa-industry', title: 'Water Filling Plant Turnkey Project', description: 'End-to-end project management for comprehensive water filling plant setups.' },
    { icon: 'fa-cog', title: 'Automatic Water Filling Machine', description: 'Advanced technology ensuring precision and speed in water filling operations.' },
    { icon: 'fa-bottle-water', title: 'Water Bottling Machine', description: 'Customizable solutions for diverse water bottling requirements.' },
    { icon: 'fa-glass-whiskey', title: 'Fully Automatic Soft Drink Plant', description: 'Turnkey solutions for soft drink production with fully automated processes.' },
    { icon: 'fa-blender', title: 'Juice Filling Plant', description: 'Specialized plants for the efficient and sanitary filling of various juice products.' },
    { icon: 'fa-tag', title: 'Labeling Machines', description: 'Cutting-edge labeling technology for accurate and appealing product labeling.' },
    { icon: 'fa-box', title: 'Packaging Machines', description: 'Comprehensive packaging solutions for various product types and sizes.' },
    { icon: 'fa-filter', title: 'R.O. Water Treatment Plants', description: 'Advanced reverse osmosis technology for superior water purification.' },
    { icon: 'fa-recycle', title: 'Waste Water Treatment Plants', description: 'Sustainable and efficient systems for treating industrial wastewater.' },
    { icon: 'fa-tint', title: 'Sewage & Effluent Treatment Plants', description: 'Tailored solutions for effective sewage and effluent treatment.' },
    { icon: 'fa-spray-can', title: 'Dairy Plant Fogger System', description: 'Innovative fogging systems for optimized dairy plant environments.' },
    { icon: 'fa-faucet', title: 'Automatic Water Troughs', description: 'Automated water dispensing solutions for livestock and agricultural applications.' }
  ]

  const values = [
    { icon: 'fa-award', title: 'Quality Excellence', description: 'ISO certified processes ensuring the highest quality standards in every product.' },
    { icon: 'fa-lightbulb', title: 'Innovation', description: 'Cutting-edge technology and continuous improvement in our solutions.' },
    { icon: 'fa-handshake', title: 'Customer Trust', description: 'Building long-term relationships through reliability and transparency.' },
    { icon: 'fa-leaf', title: 'Sustainability', description: 'Eco-friendly solutions that prioritize environmental conservation.' }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#231f20] via-gray-900 to-[#231f20] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <nav className="text-sm text-gray-300 mb-8">
            <Link to="/" className="hover:text-[#d19336] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">About Us</span>
          </nav>
          <div className="max-w-3xl">
            <span className="bg-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-[#d19336]">Haley Cibus</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Leading manufacturer and exporter specializing in turnkey solutions for beverage and liquid processing industries since 2021.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Company Overview */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#d19336]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d19336]/20 rounded-full blur-3xl"></div>
              <img
                src="https://catalog.wlimg.com/about-image/about-04.jpg"
                alt="Haley Cibus Manufacturing"
                className="w-full rounded-2xl shadow-2xl relative z-10"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-[#231f20] mb-6">
                Excellence in <span className="text-[#d19336]">Manufacturing</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Haley Cibus Private Limited is a distinguished name in the manufacturing and export industry, specializing in cutting-edge solutions for the beverage and liquid packaging sector.
                </p>
                <p>
                  With a focus on quality, innovation, and turnkey project excellence, we have established ourselves as a reliable partner for businesses seeking top-notch solutions.
                </p>
                <p>
                  Our team of experts ensures that our clients receive state-of-the-art technology, personalized solutions, and unparalleled support. We strive to be the preferred choice for companies seeking cutting-edge solutions in the beverage and liquid packaging industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#231f20]">Our </span>
              <span className="text-[#d19336]">Core Values</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#d19336] to-[#b8822a] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${value.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#231f20] mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#231f20]">Product & Service </span>
              <span className="text-[#d19336]">Portfolio</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Comprehensive solutions for beverage and liquid processing industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group hover:border-[#d19336]"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#d19336]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#d19336] transition-colors duration-300">
                    <i className={`fas ${service.icon} text-lg text-[#d19336] group-hover:text-white transition-colors duration-300`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-[#231f20] mb-2 group-hover:text-[#d19336] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Information */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-[#231f20]">Company </span>
              <span className="text-[#d19336]">Information</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {[
                { label: 'Nature of Business', value: companyInfo.natureOfBusiness },
                { label: 'Number of Employees', value: companyInfo.employees },
                { label: 'Year of Establishment', value: companyInfo.yearEstablished },
                { label: 'Market Covered', value: companyInfo.marketCovered },
                { label: 'Company Founders', value: companyInfo.founders },
                { label: 'GST No (Delhi Office)', value: companyInfo.gstDelhi },
                { label: 'GST No (Sriganganagar)', value: companyInfo.gstSriganganagar },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`p-6 border-b border-gray-100 ${index % 2 === 0 ? 'md:border-r' : ''} ${index >= 5 ? 'border-b-0' : ''}`}
                >
                  <div className="text-sm text-gray-500 uppercase tracking-wide mb-2 font-semibold">
                    {item.label}
                  </div>
                  <div className="text-lg font-bold text-[#231f20]">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Showcase */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-2">
                <span className="text-[#231f20]">Explore Our </span>
                <span className="text-[#d19336]">Products</span>
              </h2>
              <p className="text-gray-600">Discover our range of high-quality solutions</p>
            </div>
            <Link 
              to="/products" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <span>View All Products</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d19336]"
              >
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#231f20] group-hover:text-[#d19336] transition-colors text-center line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}

export default AboutUs
