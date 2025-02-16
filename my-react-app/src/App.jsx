import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from "react-router-dom"; // Import React Router components
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import * as Components from '/assets/component'
import About from './About.jsx' 
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Header from './component/Header.jsx';
import Footer from './component/footer.jsx';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    
    <BrowserRouter>
    <Header/> 
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} /> {/* Catch-all for 404 */}
        </Routes>
      </div>
    </BrowserRouter>


     <Footer/>
    </>
    

    
  )
}

export default App
