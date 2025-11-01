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
      
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3">
        <div className="container mx-auto px-4">
          <nav className="text-sm text-gray-600">
            <Link to="/" className="hover:text-[#d19336]">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-gray-800">Our Clients</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#231f20] mb-4">Our Clients</h1>
        </div>

        {/* Client Gallery */}
        <section className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group relative"
                onClick={() => openImageModal(client)}
              >
                <div className="aspect-square flex items-center justify-center bg-gray-50 p-4">
                  <img
                    src={client.thumbnail}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <i className="fas fa-search-plus text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeImageModal}
                className="absolute -top-10 right-0 text-white hover:text-[#d19336] text-3xl font-bold transition-colors z-10"
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <img
                src={selectedImage.fullSize}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default OurClients



