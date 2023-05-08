import { Link,useLocation } from 'react-router-dom'
import './style.css';
import Logo from '../logo'
 
function Header() {
     const location = useLocation();
    return (
        <header>
             <Logo/>
     

        <nav>
        <Link to='/' className={location.pathname === "/" ? "active" : ""}>
            Accueil
          </Link> 
            <Link to="/about" className={location.pathname === "/about" ? "active" : ""} >A Propos</Link>
        </nav>
        </header>
    )
}

export default Header