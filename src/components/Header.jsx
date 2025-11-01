import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SendEmailModal from './SendEmailModal'
import SendSMSModal from './SendSMSModal'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [showSMSModal, setShowSMSModal] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-[#231f20] to-gray-800 text-white">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm gap-2">
              <div className="flex items-center gap-4">
                <a href="mailto:info@haleycibus.com" className="flex items-center gap-2 hover:text-[#d19336] transition-colors">
                  <i className="fas fa-envelope"></i>
                  <span className="hidden sm:inline">info@haleycibus.com</span>
                </a>
                <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-[#d19336] transition-colors">
                  <i className="fas fa-phone"></i>
                  <span className="hidden sm:inline">+91 123 456 7890</span>
                </a>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowEmailModal(true)}
                  className="bg-[#d19336] hover:bg-[#b8822a] px-3 py-1 rounded-full transition-all duration-300 text-xs font-semibold flex items-center gap-1 shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-envelope text-xs"></i>
                  <span>Send Email</span>
                </button>
                <button
                  onClick={() => setShowSMSModal(true)}
                  className="bg-white text-[#231f20] hover:bg-gray-100 px-3 py-1 rounded-full transition-all duration-300 text-xs font-semibold flex items-center gap-1 shadow-md hover:shadow-lg"
                >
                  <i className="fas fa-mobile-alt text-xs"></i>
                  <span>Send SMS</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#231f20] tracking-tight">
                  HALEY CIBUS
                </h1>
                <p className="text-xs md:text-sm text-[#d19336] font-semibold tracking-wide">
                  PVT. LTD.
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive('/')
                    ? 'text-[#d19336]'
                    : 'text-gray-700 hover:text-[#d19336]'
                }`}
              >
                Home
                {isActive('/') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d19336]"></span>
                )}
              </Link>
              <Link
                to="/about"
                className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive('/about')
                    ? 'text-[#d19336]'
                    : 'text-gray-700 hover:text-[#d19336]'
                }`}
              >
                About Us
                {isActive('/about') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d19336]"></span>
                )}
              </Link>
              <Link
                to="/products"
                className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive('/products')
                    ? 'text-[#d19336]'
                    : 'text-gray-700 hover:text-[#d19336]'
                }`}
              >
                Products
                {isActive('/products') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d19336]"></span>
                )}
              </Link>
              <Link
                to="/clients"
                className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive('/clients')
                    ? 'text-[#d19336]'
                    : 'text-gray-700 hover:text-[#d19336]'
                }`}
              >
                Our Clients
                {isActive('/clients') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d19336]"></span>
                )}
              </Link>
              <Link
                to="/videos"
                className={`relative py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive('/videos')
                    ? 'text-[#d19336]'
                    : 'text-gray-700 hover:text-[#d19336]'
                }`}
              >
                Videos
                {isActive('/videos') && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d19336]"></span>
                )}
              </Link>
              <Link
                to="/contact"
                className="bg-[#d19336] text-white px-6 py-2.5 rounded-lg hover:bg-[#b8822a] transition-all duration-300 text-sm font-bold shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 hover:text-[#d19336] p-2 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white shadow-lg">
            <nav className="container mx-auto px-4 py-6 space-y-1">
              <Link
                to="/"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-home w-5 mr-3"></i>
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/about')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-info-circle w-5 mr-3"></i>
                About Us
              </Link>
              <Link
                to="/products"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/products')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-box w-5 mr-3"></i>
                Products
              </Link>
              <Link
                to="/clients"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/clients')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-users w-5 mr-3"></i>
                Our Clients
              </Link>
              <Link
                to="/videos"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/videos')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-video w-5 mr-3"></i>
                Videos
              </Link>
              <Link
                to="/contact"
                className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive('/contact')
                    ? 'bg-[#d19336] text-white font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <i className="fas fa-envelope w-5 mr-3"></i>
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Modals */}
      <SendEmailModal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)} />
      <SendSMSModal isOpen={showSMSModal} onClose={() => setShowSMSModal(false)} />
    </>
  )
}

export default Header
