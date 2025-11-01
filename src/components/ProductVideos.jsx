import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const ProductVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const videos = [
    {
      id: 'G-t5GsSiKho',
      title: 'Water Chiller Machine',
      description: 'High-efficiency cooling systems for industrial water treatment',
      link: '/products/water-chiller-machine',
      thumbnail: 'https://img.youtube.com/vi/G-t5GsSiKho/maxresdefault.jpg'
    },
    {
      id: 'BJI7BlLr2v4',
      title: 'Carbonated Soft Drink Filling Plant',
      description: 'Automated filling solutions for carbonated beverages',
      link: '/products/carbonated-soft-drink-filling-plant',
      thumbnail: 'https://img.youtube.com/vi/BJI7BlLr2v4/maxresdefault.jpg'
    },
    {
      id: 'mB_qG8Eqq4M',
      title: 'Water Softening Plant',
      description: 'Advanced water softening technology for industrial use',
      link: '/products/water-softening-plant',
      thumbnail: 'https://img.youtube.com/vi/mB_qG8Eqq4M/maxresdefault.jpg'
    },
    {
      id: 'zyHmifiHzrU',
      title: 'Dialysis RO Plant',
      description: 'Medical-grade reverse osmosis systems',
      link: '/products/dialysis-ro-plant',
      thumbnail: 'https://img.youtube.com/vi/zyHmifiHzrU/maxresdefault.jpg'
    },
    {
      id: 'zyHmifiHzrU2',
      title: 'Industrial Reverse Osmosis Plant',
      description: 'Large-scale water purification solutions',
      link: '/products/industrial-reverse-osmosis-plant',
      thumbnail: 'https://img.youtube.com/vi/zyHmifiHzrU/maxresdefault.jpg'
    }
  ]

  const openVideo = (videoId) => {
    setSelectedVideo(videoId)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
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
            <span className="text-white">Product Videos</span>
          </nav>
          <div className="max-w-3xl">
            <span className="bg-[#d19336] px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide inline-block mb-4">
              Watch & Learn
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Product <span className="text-[#d19336]">Demonstrations</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              See our products in action and discover their features
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#231f20]">Featured </span>
            <span className="text-[#d19336]">Videos</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive video library showcasing product features and installations
          </p>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#d19336] transform hover:-translate-y-2"
            >
              {/* Video Thumbnail */}
              <div
                className="relative aspect-video bg-gray-900 cursor-pointer overflow-hidden"
                onClick={() => openVideo(video.id)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/30 transition-all">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <i className="fas fa-play text-white text-2xl ml-1"></i>
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                  <i className="fas fa-video mr-1"></i> Video
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#231f20] group-hover:text-[#d19336] transition-colors mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                <Link
                  to={video.link}
                  className="inline-flex items-center gap-2 text-[#d19336] hover:text-[#b8822a] font-semibold transition-colors group/link"
                >
                  <span>Learn More</span>
                  <i className="fas fa-arrow-right text-sm group-hover/link:translate-x-1 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#d19336] to-[#b8822a] text-white rounded-2xl p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <i className="fas fa-video text-5xl mb-6"></i>
            <h3 className="text-3xl font-bold mb-4">Want to See More?</h3>
            <p className="text-xl mb-8 text-white/90">
              Contact us for product demonstrations and detailed presentations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-white text-[#d19336] px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                <i className="fas fa-envelope"></i>
                <span>Request Demo</span>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                <span>Browse Products</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeVideo}
        >
          <div
            className="relative bg-black rounded-2xl overflow-hidden max-w-6xl w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center transition-all group"
              aria-label="Close video"
            >
              <i className="fas fa-times text-white text-xl group-hover:rotate-90 transition-transform duration-300"></i>
            </button>

            {/* YouTube Embed */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&rel=0`}
                title="Product Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default ProductVideos
