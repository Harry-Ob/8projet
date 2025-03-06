
import { BrowserRouter,Route, Routes } from "react-router-dom"; // Import React Router components
// import useState from "react" ; 
// import useEffect from "react";
// import React from "react";


import './App.css'

import About from './About.jsx' 
import Contact from './Contact.jsx'
import Home from './Home.jsx'
import Error from './Error.jsx'
import Header from './component/header.jsx';
import Footer from './component/footer.jsx';
// import 'main.scss'
import './assets/styles/main.scss'



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
