import { Link } from "react-router-dom"; // Import React Router components


function Error() {
  return (
    <div>     
    <h1 className="err">404</h1> 
    <h3> Oups! La page que vous demandez nexiste pas.</h3>
    <li><Link to="/">retourner sur la page d&apos;accueil</Link></li>
    </div>



  );
}

export default Error;