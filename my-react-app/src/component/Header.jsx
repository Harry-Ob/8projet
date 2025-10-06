import  { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import React Router components
import logo from "../assets/img/LOGO-header-kai.png";
// import "../assets/styles/header.scss"


function Header() {
  const navigate = useNavigate(); 
  return (
    <header className="max-w mx-auto px-4 py-10">
      <nav>
        <div className="flex items-center justify-between">
          <img src={logo} alt="header-logo" className="h-12 w-auto" onClick={() => navigate("/")}/>
          <div className="flex gap-6 sm:flex-row sm:gap-4 nav_link">
            <Link to="/" >Accueil</Link>
            <Link to="/about"> A propos</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
