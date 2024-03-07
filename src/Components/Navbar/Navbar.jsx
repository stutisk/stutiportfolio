import "./Navbar.css";
import { Button } from "../index";
import logo from "../../assests/logo.svg"
export const Navbar = () => {
  return (
    <nav className="navbar flex flex-space-between">
      <div>
      <figure>
        <img src={logo}  alt="logo" />
      </figure>
      </div>

      <div className="flex navbar-links flex-space-between">
       
        <div className="flex navbar-links-left ">
          <div>Crypto Taxes</div>
          <div>Free Tools</div>
          <div>Resource Center</div>
        </div>
      <Button/>
      
      </div>
    </nav>
  );
};
