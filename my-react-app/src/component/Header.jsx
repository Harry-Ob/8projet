
import { Link } from "react-router-dom"; // Import React Router components
import logo from "../assets/img/LOGO-header-kai.png";
import "../assets/styles/header.scss"

function Header() {
  return (
    <header>
      <nav>
        <div className="nav">
          <img src={logo} alt="header-logo" />
          <div className="nav_link">
            <Link to="/" >Accueil</Link>
            <Link to="/about"> A propos</Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
