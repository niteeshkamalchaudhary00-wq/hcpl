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
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-[#231f20]">HALEY CIBUS PVT. LTD.</h1>
          </Link>
          <div className="flex items-center gap-4">
            {/* Send Email and Send SMS Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={() => setShowEmailModal(true)}
                className="bg-[#d19336] text-white px-4 py-2 rounded-md hover:bg-[#b8822a] transition-colors text-sm font-semibold flex items-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                <span>Send Email</span>
              </button>
              <button
                onClick={() => setShowSMSModal(true)}
                className="bg-[#231f20] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-semibold flex items-center gap-2"
              >
                <i className="fas fa-mobile-alt"></i>
                <span>Send SMS</span>
              </button>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className={`${isActive('/') ? 'text-[#d19336] font-semibold' : 'text-gray-700 hover:text-[#d19336]'} transition-colors`}>
                Home
              </Link>
              <Link to="/about" className={`${isActive('/about') ? 'text-[#d19336] font-semibold' : 'text-gray-700 hover:text-[#d19336]'} transition-colors`}>
                About Us
              </Link>
              <Link to="/products" className={`${isActive('/products') ? 'text-[#d19336] font-semibold' : 'text-gray-700 hover:text-[#d19336]'} transition-colors`}>
                Products
              </Link>
              <Link to="/videos" className={`${isActive('/videos') ? 'text-[#d19336] font-semibold' : 'text-gray-700 hover:text-[#d19336]'} transition-colors`}>
                Videos
              </Link>
              <Link to="/contact" className={`${isActive('/contact') ? 'text-[#d19336] font-semibold' : 'text-gray-700 hover:text-[#d19336]'} transition-colors`}>
                Contact Us
              </Link>
            </nav>
          </div>
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-2">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => {
                  setShowEmailModal(true)
                  setMobileMenuOpen(false)
                }}
                className="flex-1 bg-[#d19336] text-white px-4 py-2 rounded-md hover:bg-[#b8822a] transition-colors text-sm font-semibold flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                <span>Send Email</span>
              </button>
              <button
                onClick={() => {
                  setShowSMSModal(true)
                  setMobileMenuOpen(false)
                }}
                className="flex-1 bg-[#231f20] text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
              >
                <i className="fas fa-mobile-alt"></i>
                <span>Send SMS</span>
              </button>
            </div>
            <Link to="/" className={`block py-2 ${isActive('/') ? 'text-[#d19336] font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className={`block py-2 ${isActive('/about') ? 'text-[#d19336] font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
            <Link to="/products" className={`block py-2 ${isActive('/products') ? 'text-[#d19336] font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>Products</Link>
            <Link to="/videos" className={`block py-2 ${isActive('/videos') ? 'text-[#d19336] font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>Videos</Link>
            <Link to="/contact" className={`block py-2 ${isActive('/contact') ? 'text-[#d19336] font-semibold' : 'text-gray-700'}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
          </nav>
        )}
      </div>

      {/* Modals */}
      <SendEmailModal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)} />
      <SendSMSModal isOpen={showSMSModal} onClose={() => setShowSMSModal(false)} />
    </header>
  )
}

export default Header

