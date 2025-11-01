import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import ProductDetail from './components/ProductDetail'
import AboutUs from './components/AboutUs'
import OurClients from './components/OurClients'
import ProductVideos from './components/ProductVideos'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/clients" element={<OurClients />} />
        <Route path="/videos" element={<ProductVideos />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetail />} />
      </Routes>
    </Router>
  )
}

export default App
