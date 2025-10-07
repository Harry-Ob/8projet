import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import React Router components
import "./App.css";
import About from "./About.jsx";
// import Contact from "./Contact.jsx";
import Home from "./Home.jsx";
import Error from "./Error.jsx";
import Header from "./component/Header.jsx";
import Footer from "./component/footer.jsx";
import "./assets/styles/main.scss";
import Fiche_logement from "./Fiche_logement.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className=" mx-auto mt-6 px-8">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="*" element={<Error />} /> {/* Catch-all for 404 */}
            <Route path="/404" element={<Error />} />
            <Route path="/logement/:id" element={<Fiche_logement />} />
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
