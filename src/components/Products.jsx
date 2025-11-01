import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Products = () => {
  const productCategories = [
    {
      id: 'reverse-osmosis',
      title: 'Reverse Osmosis Plant',
      link: '/products/reverse-osmosis-plant',
      products: [
        {
          name: 'Commercial Reverse Osmosis Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/1000-5000-lph-ro-plant-1709365463-7319484.jpeg',
          link: '/products/commercial-reverse-osmosis-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'FRP Automatic Reverse Osmosis Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/5000-10000-lph-ro-plant-1709365704-7319498.jpeg',
          link: '/products/frp-automatic-reverse-osmosis-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'FRP Commercial Reverse Osmosis Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/100-500-lph-ro-plant-1709365032-7319454.jpeg',
          link: '/products/frp-commercial-reverse-osmosis-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'FRP Semi-Automatic Reverse Osmosis Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/500-1000-lph-ro-plant-1709365182-7319463.jpeg',
          link: '/products/frp-semi-automatic-reverse-osmosis-plant',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'water-softener',
      title: 'Water Softener Plant',
      link: '/products/water-softener-plant',
      products: [
        {
          name: '1000-2000 LPH Water Softener Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/1000-2000-lph-water-softener-plant-1709366030-7319520.jpeg',
          link: '/products/1000-2000-lph-water-softener-plant',
          enquiryLink: '/contact'
        },
        {
          name: '2000-5000 LPH Water Softener Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/2000-5000-lph-water-softener-plant-1709366173-7319524.jpeg',
          link: '/products/2000-5000-lph-water-softener-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Water Softener',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/10000-50000-lph-water-softener-plant-1709368553-7319577.jpeg',
          link: '/products/10000-50000-lph-water-softener-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Water Softening System',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/5000-10000-lph-water-softener-plant-1709366295-7319530.jpeg',
          link: '/products/5000-10000-lph-water-softener-plant',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'effluent-treatment',
      title: 'Effluent Treatment Plants',
      link: '/products/effluent-treatment-plants',
      products: [
        {
          name: 'Common Effluent Treatment Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/common-effluent-treatment-plant-1709370204-7319667.jpeg',
          link: '/products/common-effluent-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'effluent water treatment plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/5/9525058/effluent-water-treatment-plant-1715872023-7432336.jpeg',
          link: '/products/effluent-water-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Industrial Effluent Treatment Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/industrial-effluent-treatment-plant-1709370383-7319679.jpeg',
          link: '/products/industrial-effluent-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Portable Effluent Treatment Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/portable-effluent-treatment-plant-1709370531-7319688.jpeg',
          link: '/products/portable-effluent-treatment-plant',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'sewage-treatment',
      title: 'Sewage Treatment Plants',
      link: '/products/sewage-treatment-plants',
      products: [
        {
          name: 'Stp Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2025/1/9525058/fabricated-sewage-treatment-plant-30-kld-1737093753-7432338.jpeg',
          link: '/products/fabricated-sewage-treatment-plant-30-kld',
          enquiryLink: '/contact'
        },
        {
          name: 'Sewage Treatment Equipment',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/mbbr-sewage-treatment-plant-1709369143-7319604.jpeg',
          link: '/products/mbbr-sewage-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'MBR Sewage Treatment Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/mbr-sewage-treatment-plant-1709368856-7319591.jpeg',
          link: '/products/mbr-sewage-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'SBR Sewage Treatment Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/sbr-sewage-treatment-plant-1709368991-7319600.jpeg',
          link: '/products/sbr-sewage-treatment-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Stp Plant Project Work',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/industrial-wastewater-stp-with-ea-technology-1709369357-7319625.jpeg',
          link: '/products/industrial-wastewater-stp-with-ea-technology',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'mineral-water',
      title: 'Mineral Water Plant',
      link: '/products/mineral-water-plant',
      products: [
        {
          name: 'Alkaline Mineral Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/alkaline-mineral-water-plant-1707480740-7286830.jpeg',
          link: '/products/alkaline-mineral-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Automatic Mineral Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-mineral-water-plant-1707481457-7286861.jpeg',
          link: '/products/automatic-mineral-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Drinking Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/drinking-water-plant-1707539581-7287397.jpeg',
          link: '/products/drinking-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Fully Automatic Mineral Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-mineral-water-plant-1707480582-7286826.jpeg',
          link: '/products/fully-automatic-mineral-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'ISI Mineral Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/isi-mineral-water-plant-1707539232-7287389.jpeg',
          link: '/products/isi-mineral-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Mineral Water Bottling Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/mineral-water-bottling-plant-1707481595-7286869.jpeg',
          link: '/products/mineral-water-bottling-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Packaged Drinking Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/packaged-drinking-water-plant-1707538746-7287370.jpeg',
          link: '/products/packaged-drinking-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Turnkey Mineral Water Project',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/turnkey-mineral-water-project-1707539039-7287382.jpeg',
          link: '/products/turnkey-mineral-water-project',
          enquiryLink: '/contact'
        },
        {
          name: 'Water Plant Machinery',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/water-plant-machinery-1707539436-7287393.jpeg',
          link: '/products/water-plant-machinery',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'carbonated-soft-drink',
      title: 'Carbonated Soft Drink Plant',
      link: '/products/carbonated-soft-drink-plant',
      products: [
        {
          name: 'Beverage Manufacturing Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/beverage-manufacturing-plant-1707547947-7287780.jpeg',
          link: '/products/beverage-manufacturing-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Carbonated Beverage Manufacturing Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/carbonated-beverage-manufacturing-plant-1707548119-7287797.jpeg',
          link: '/products/carbonated-beverage-manufacturing-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Carbonated Soft Drink Filling Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/carbonated-soft-drink-filling-plant-1707548204-6095773.jpeg',
          link: '/products/carbonated-soft-drink-filling-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Fully Automatic Soda Soft Drink Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-soda-soft-drink-plant-1707548631-7287839.jpeg',
          link: '/products/fully-automatic-soda-soft-drink-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Soft Drink Making Machinery',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/soft-drink-making-machinery-1707548463-7287825.jpeg',
          link: '/products/soft-drink-making-machinery',
          enquiryLink: '/contact'
        },
        {
          name: 'Soft Drink Manufacturing Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/soft-drink-manufacturing-plant-1707548354-7287815.jpeg',
          link: '/products/soft-drink-manufacturing-plant',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'pet-bottle-filling',
      title: 'Automatic Pet Bottle Filling Machine',
      link: '/products/automatic-pet-bottle-filling-machine',
      products: [
        {
          name: 'Automatic Drinking Water Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-drinking-water-filling-machine-1707540975-7287431.jpeg',
          link: '/products/automatic-drinking-water-filling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Automatic Pet Bottle Rinser Filler Capper Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-pet-bottle-rinser-filler-capper-machine-1707547660-7287418.jpeg',
          link: '/products/automatic-pet-bottle-rinser-filler-capper-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Carbonated Soft Drinks Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/carbonated-soft-drinks-filling-machine-1707541173-7287435.jpeg',
          link: '/products/carbonated-soft-drinks-filling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Fully Automatic 20 Liter Jar Rinsing Filling Capping Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-20-liter-jar-rinsing-filling-1707541592-7287448.jpeg',
          link: '/products/fully-automatic-20-liter-jar-rinsing-filling-capping-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Juice Bottle Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/juice-bottle-filling-machine-1707541418-7287443.jpeg',
          link: '/products/juice-bottle-filling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Mineral Water Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/mineral-water-filling-machine-1707539976-7287404.jpeg',
          link: '/products/mineral-water-filling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Packaged Drinking Water Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/packaged-drinking-water-filling-machine-1707540344-6074581.jpeg',
          link: '/products/packaged-drinking-water-filling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Water Bottle Filling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/water-bottle-filling-machine-1707540489-7287412.jpeg',
          link: '/products/water-bottle-filling-machine',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'labelling-machine',
      title: 'Labelling Machine',
      link: '/products/labelling-machine',
      products: [
        {
          name: 'Automatic BOPP Hot Glue Labelling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-bopp-hot-glue-labelling-machine-1707546662-7287658.jpeg',
          link: '/products/automatic-bopp-hot-glue-labelling-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Automatic Sleeve Applicator',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-sleeve-applicator-1707546502-7287652.jpeg',
          link: '/products/automatic-sleeve-applicator',
          enquiryLink: '/contact'
        },
        {
          name: 'Automatic Sticker Labelling Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/automatic-sticker-labelling-machine-1707546391-7287649.jpeg',
          link: '/products/automatic-sticker-labelling-machine',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'pet-stretch-blow',
      title: 'Pet Stretch Blow Moulding Machine',
      link: '/products/pet-stretch-blow-moulding-machine',
      products: [
        {
          name: '2400 BPH Automatic Pet Stretch Blow Moulding Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/2400-bph-automatic-pet-stretch-blow-moulding-1707545841-7287625.jpeg',
          link: '/products/2400-bph-automatic-pet-stretch-blow-moulding-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Fully Automatic Pet Stretch Blow Moulding Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/fully-automatic-pet-stretch-blow-moulding-machine-1707546026-7287632.jpeg',
          link: '/products/fully-automatic-pet-stretch-blow-moulding-machine',
          enquiryLink: '/contact'
        },
        {
          name: 'Semi Automatic Pet Stretch Blow Moulding Machine',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/semi-automatic-pet-stretch-blow-moulding-machine-1707545563-7287615.jpeg',
          link: '/products/semi-automatic-pet-stretch-blow-moulding-machine',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'ro-spares',
      title: 'RO Spares',
      link: '/products/ro-spares',
      products: [
        {
          name: 'Bag Filters',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/bag-filters-1707549768-7287898.jpeg',
          link: '/products/bag-filters',
          enquiryLink: '/contact'
        },
        {
          name: 'Cartridge Filters',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/cartridge-filters-1707549663-7287892.jpeg',
          link: '/products/cartridge-filters',
          enquiryLink: '/contact'
        },
        {
          name: 'Iron Removal Filters',
          image: 'https://2.wlimg.com/product_images/bc-small/2021/11/9525058/iron-removal-plant-1636695784-6074542.jpeg',
          link: '/products/iron-removal-filters',
          enquiryLink: '/contact'
        },
        {
          name: 'RO Antiscalant Chemical',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/ro-antiscalant-chemical-1707549383-7287880.jpeg',
          link: '/products/ro-antiscalant-chemical',
          enquiryLink: '/contact'
        },
        {
          name: 'RO Membranes',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/2/9525058/ro-membranes-1707548899-7287863.jpeg',
          link: '/products/ro-membranes',
          enquiryLink: '/contact'
        }
      ]
    },
    {
      id: 'other-products',
      title: 'Other Products',
      link: '/products',
      products: [
        {
          name: 'Demineralization Water Plant',
          image: 'https://2.wlimg.com/product_images/bc-small/2022/7/9525058/demineralization-dm-water-treatment-plants-1657191245-6434861.jpeg',
          link: '/products/demineralization-water-plant',
          enquiryLink: '/contact'
        },
        {
          name: 'Uf Filter',
          image: 'https://2.wlimg.com/product_images/bc-small/2024/3/9525058/automatic-ultra-filtration-system-1709371192-7319721.jpeg',
          link: '/products/automatic-ultra-filtration-system',
          enquiryLink: '/contact'
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Page Header */}
      <section className="bg-[#f3f3f3] py-8 border-b-2 border-[#d19336]">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-[#231f20] mb-2">Products</h1>
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#d19336] transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-[#231f20]">Products</span>
          </nav>
        </div>
      </section>

      {/* Products by Category */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className={categoryIndex > 0 ? 'mt-16' : ''}>
              <div className="mb-6 pb-3 border-b-2 border-[#d19336]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#231f20]">
                  <Link to={category.link} className="hover:text-[#d19336] transition-colors">
                    {category.title}
                  </Link>
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {category.products.map((product, productIndex) => (
                  <div
                    key={productIndex}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#d19336] cursor-pointer"
                    onClick={() => window.location.href = product.link}
                  >
                    <div className="relative h-64 overflow-hidden bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-[#231f20] mb-4 min-h-[3rem] line-clamp-2 hover:text-[#d19336] transition-colors">
                        <Link to={product.link}>{product.name}</Link>
                      </h3>
                      <div className="flex gap-2">
                        <Link
                          to={product.enquiryLink}
                          className="flex-1 bg-[#d19336] text-white px-4 py-2 rounded text-center text-sm font-semibold hover:bg-[#231f20] transition-colors"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Enquiry Now
                        </Link>
                        <Link
                          to={product.link}
                          className="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded text-center text-sm font-semibold hover:bg-gray-300 transition-colors border border-[#d19336]"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Products

