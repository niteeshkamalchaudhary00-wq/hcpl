import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const OurClients = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const clients = [
    {
      id: '38178',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38178_20211112121404-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38178_20211112121404.jpg',
      alt: 'Client Logo 1'
    },
    {
      id: '38180',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38180_20211112121413-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38180_20211112121413.jpg',
      alt: 'Client Logo 2'
    },
    {
      id: '38181',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38181_20211112121418-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38181_20211112121418.jpg',
      alt: 'Client Logo 3'
    },
    {
      id: '38182',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38182_20211112121422-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38182_20211112121422.jpg',
      alt: 'Client Logo 4'
    },
    {
      id: '38186',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38186_20211112121444-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38186_20211112121444.jpg',
      alt: 'Client Logo 5'
    },
    {
      id: '38188',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38188_20211112121454-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38188_20211112121454.jpg',
      alt: 'Client Logo 6'
    },
    {
      id: '38190',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38190_20211112121506-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38190_20211112121506.jpg',
      alt: 'Client Logo 7'
    },
    {
      id: '38194',
      thumbnail: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38194_20211112121540-small.jpg',
      fullSize: 'https://dyimg77.exportersindia.com/catalog-gallery/gallery_38194_20211112121540.jpg',
      alt: 'Client Logo 8'
    }
  ]

  const openImageModal = (client) => {
    setSelectedImage(client)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

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
            <span className="text-white">Our Clients</span>
          </nav>
          <div className="max-w-3xl">
            <span className="bg-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Client Portfolio
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-[#d19336]">Trusted Clients</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Building strong partnerships with industry leaders worldwide
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#d19336] mb-2">300+</div>
            <div className="text-gray-600 font-medium">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#d19336] mb-2">500+</div>
            <div className="text-gray-600 font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#d19336] mb-2">25+</div>
            <div className="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-[#d19336] mb-2">98%</div>
            <div className="text-gray-600 font-medium">Satisfaction Rate</div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#231f20]">Client </span>
            <span className="text-[#d19336]">Showcase</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're proud to work with leading companies across various industries
          </p>
        </div>

        {/* Client Gallery */}
        <section className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-[#d19336] transform hover:-translate-y-2"
                onClick={() => openImageModal(client)}
              >
                <div className="aspect-square flex items-center justify-center bg-gradient-to-br from-gray-50 to-white p-6 relative overflow-hidden">
                  <img
                    src={client.thumbnail}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#d19336]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-[#d19336] rounded-full flex items-center justify-center shadow-xl">
                      <i className="fas fa-search-plus text-white text-lg"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white rounded-2xl p-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">Want to Join Our Clients?</h3>
          <p className="text-xl mb-8 text-white/90">
            Experience the quality and service that our clients trust
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-[#d19336] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <i className="fas fa-envelope"></i>
            <span>Get in Touch</span>
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeImageModal}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full">
            <button
              onClick={closeImageModal}
              className="absolute -top-14 right-0 text-white hover:text-[#d19336] transition-colors z-10 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
              aria-label="Close"
            >
              <i className="fas fa-times text-2xl"></i>
            </button>
            <img
              src={selectedImage.fullSize}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default OurClients
