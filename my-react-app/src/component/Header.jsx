
import { Link } from "react-router-dom"; // Import React Router components
import logo from "../assets/img/LOGO-header-kai.png";
import '../assets/styles/header.sass'

function Header() {
  return (
    <header>
      <nav>
        <div className="nav">
          <img src={logo} alt="header-logo" />
          <div className="nav_link">
            <li><Link to="/about" >Accueil</Link></li> 
            <li><Link to="/contact"> A propos</Link> </li> 
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
