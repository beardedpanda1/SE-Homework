//import browser router component(maybe layout) 
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav><center>
        <ul className="nav-links">
            <Link to="home">Home</Link>
            <Link to="recipes">Search by Letter</Link>
            <Link to="randomRecipes">Recipes</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact Us</Link>
        </ul>
        </center></nav>
  )
}

export default Nav;
