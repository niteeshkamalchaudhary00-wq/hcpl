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
    {
      title: 'Mineral Water Bottling Plant',
      description: 'State-of-the-art facilities for efficient and hygienic mineral water production.'
    },
    {
      title: 'Water Filling Plant Turnkey Project',
      description: 'End-to-end project management for comprehensive water filling plant setups.'
    },
    {
      title: 'Automatic Water Filling Machine',
      description: 'Advanced technology ensuring precision and speed in water filling operations.'
    },
    {
      title: 'Water Bottling Machine',
      description: 'Customizable solutions for diverse water bottling requirements.'
    },
    {
      title: 'Fully Automatic Soft Drink Plant',
      description: 'Turnkey solutions for soft drink production with fully automated processes.'
    },
    {
      title: 'Juice Filling Plant',
      description: 'Specialized plants for the efficient and sanitary filling of various juice products.'
    },
    {
      title: 'Labeling Machines',
      description: 'Cutting-edge labeling technology for accurate and appealing product labeling.'
    },
    {
      title: 'Packaging Machines',
      description: 'Comprehensive packaging solutions for various product types and sizes.'
    },
    {
      title: 'R.O. Water Treatment Plants',
      description: 'Advanced reverse osmosis technology for superior water purification.'
    },
    {
      title: 'Waste Water Treatment Plants',
      description: 'Sustainable and efficient systems for treating industrial wastewater.'
    },
    {
      title: 'Sewage Treatment Plants (STP) & Effluent Treatment Plants (ETP)',
      description: 'Tailored solutions for effective sewage and effluent treatment.'
    },
    {
      title: 'Dairy Plant Solutions like Fogger System',
      description: 'Innovative fogging systems for optimized dairy plant environments.'
    },
    {
      title: 'Automatic Water Troughs',
      description: 'Automated water dispensing solutions for livestock and agricultural applications.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#d19336]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">About Us</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-[#231f20] mb-4">About Us</h1>
        </div>

        {/* Company Brief Section */}
        <section className="bg-white rounded-lg mb-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-[#231f20] mb-4">
              <strong>Company Brief: Haley Cibus Private Limited</strong>
            </h2>

            <div className="space-y-6 text-lg text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-3">Overview:</h3>
                <p>
                  Haley Cibus Private Limited is a distinguished name in the manufacturing and export industry, 
                  specializing in cutting-edge solutions for the beverage and liquid packaging sector. With a focus 
                  on quality, innovation, and turnkey project excellence, we have established ourselves as a reliable 
                  partner for businesses seeking top-notch solutions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-3">Product and Service Portfolio:</h3>
                <div className="space-y-4 mt-4">
                  {services.map((service, index) => (
                    <div key={index}>
                      <h4 className="text-lg font-bold text-[#231f20] mb-2">
                        {index + 1}. {service.title}:
                      </h4>
                      <p className="ml-6">- {service.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#231f20] mb-3">Our Commitment:</h3>
                <p>
                  At Haley Cibus Private Limited, we are committed to delivering excellence in every project. 
                  Our team of experts ensures that our clients receive state-of-the-art technology, personalized 
                  solutions, and unparalleled support. With a focus on quality, reliability, and sustainability, 
                  we strive to be the preferred choice for companies seeking cutting-edge solutions in the beverage 
                  and liquid packaging industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information Table */}
        <section className="bg-white border border-gray-200 rounded-lg mb-8 overflow-hidden">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="w-2/5 p-4 font-bold text-gray-700">Nature of Business</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.natureOfBusiness}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">Number of Employees</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.employees}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">Year of Establishment</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.yearEstablished}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">Market Covered</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.marketCovered}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">Name Of Company Founder</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.founders}</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">GST No (Delhi Office)</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.gstDelhi}</td>
              </tr>
              <tr>
                <td className="w-2/5 p-4 font-bold text-gray-700 bg-gray-50">GST (Sriganganagar Office)</td>
                <td className="w-3/5 p-4 bg-white">{companyInfo.gstSriganganagar}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Explore Our Range Section */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-[#d19336]">Explore Our Range</h2>
            <Link 
              to="/products" 
              className="text-lg font-semibold text-[#d19336] hover:underline flex items-center gap-2"
            >
              View All <i className="fas fa-angle-right"></i>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer block"
              >
                <div className="h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#231f20] hover:text-[#d19336] transition-colors text-center">
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

