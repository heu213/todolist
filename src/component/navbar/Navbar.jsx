import "./navbar.css";
import {Link} from "react-router-dom"
function Navbar() {
  return( 
  <nav className="Navbar">
     <Link to="/">HOME</Link>
     <Link to="/content">CONTENT</Link>
  </nav>
  )
}
export default Navbar;
