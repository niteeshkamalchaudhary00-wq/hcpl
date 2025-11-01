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
      link: '/products/water-chiller-machine',
      thumbnail: 'https://img.youtube.com/vi/G-t5GsSiKho/hqdefault.jpg'
    },
    {
      id: 'BJI7BlLr2v4',
      title: 'Carbonated Soft Drink Filling Plant',
      link: '/products/carbonated-soft-drink-filling-plant',
      thumbnail: 'https://img.youtube.com/vi/BJI7BlLr2v4/hqdefault.jpg'
    },
    {
      id: 'mB_qG8Eqq4M',
      title: 'Water Softening Plant',
      link: '/products/water-softening-plant',
      thumbnail: 'https://img.youtube.com/vi/mB_qG8Eqq4M/hqdefault.jpg'
    },
    {
      id: 'zyHmifiHzrU',
      title: 'Dialysis Ro Plant',
      link: '/products/dialysis-ro-plant',
      thumbnail: 'https://img.youtube.com/vi/zyHmifiHzrU/hqdefault.jpg'
    },
    {
      id: 'zyHmifiHzrU2',
      title: 'Industrial Reverse Osmosis Plant',
      link: '/products/industrial-reverse-osmosis-plant',
      thumbnail: 'https://img.youtube.com/vi/zyHmifiHzrU/hqdefault.jpg'
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
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm">
          <Link to="/" className="text-gray-600 hover:text-[#d19336] transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">›</span>
          <span className="text-[#231f20]">Product Videos</span>
        </nav>

        {/* Page Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#231f20]">Product Videos</h1>
        </div>

        {/* Video Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videos.map((video, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-100 cursor-pointer group" onClick={() => openVideo(video.id)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                {/* YouTube Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                  <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                    <i className="fas fa-play text-white text-2xl ml-1"></i>
                  </div>
                </div>
              </div>
              
              {/* Video Title */}
              <div className="p-4">
                <Link
                  to={video.link}
                  className="text-lg font-semibold text-[#231f20] hover:text-[#d19336] transition-colors block text-center"
                >
                  {video.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={closeVideo}
        >
          <div
            className="relative bg-black rounded-lg overflow-hidden max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideo}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full w-10 h-10 flex items-center justify-center transition-all"
              aria-label="Close video"
            >
              <i className="fas fa-times text-white text-xl"></i>
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



