import { StrictMode } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Home from './Pages/Home.jsx';
import Service from './Pages/Service.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header/>
       <Routes>
        
           <Route path={'/'} element={<Home/>} />
           <Route path={'/aboutus'} element={<About/>} />
           <Route path={'/contactus'} element={<Contact/>} />
           <Route path={'/service'} element={<Service/>} />
           
       </Routes>
       <Footer/>
    
    </Router>
  </StrictMode>,
)
