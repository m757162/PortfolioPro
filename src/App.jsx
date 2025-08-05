import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homePage/HomePage'
import PortfolioGallery from './pages/portfolio'
import MainLayout from './components/layout';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import InsightsPage from './pages/insights';
import ServicesPage from './pages/services';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HomePage /> */}
      {/* <PortfolioGallery /> */}
    
        <Routes>

         
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioGallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
          </Route>

         
        
        </Routes>
    
    </>
  )
}

export default App
