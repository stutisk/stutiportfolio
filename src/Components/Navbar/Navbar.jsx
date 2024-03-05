import "./Navbar.css";
import { Button } from "../index";
export const Navbar = () => {
  return (
    <nav className="navbar flex flex-space-between">
      <div>logo</div>

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
