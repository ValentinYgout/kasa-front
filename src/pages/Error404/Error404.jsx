
import "./Error404.css";
import { Link } from "react-router-dom";



const Error404 = () => {
 

  return (

   <div className="error-container">

  <span className="error" >404</span>
  <span className="oups">Oups!La page que vous demandez n'existe pas.</span>

  <Link to={`/`}>
  <span className="return">Retourner sur la page d'accueil</span>
  </Link>
  
   </div>
  );
};

export default Error404;