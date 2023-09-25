import "../Styles/Navbar.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

// import "./Styles/Navbar.css";
function Navbar() {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <h1>gaurav-shop</h1>
          </Link>
        </div>
        <div className="manu">
          <ul>
            <li>
              <HashLink to={"/#home"} className="links">
                Home
              </HashLink>
            </li>
            <li>
              <Link to={"/books"}>Books</Link>
            </li>
            <li>
              <Link to="/notes">Notes</Link>
            </li>
            <li>
              <Link to="/stationery">Stationery</Link>
            </li>
          </ul>
        </div>
        <div className="icons">
          <BiSolidUser />
          <AiOutlineHeart />
          <BsHandbag />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
