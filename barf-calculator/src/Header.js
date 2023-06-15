import './Header.css'
import Nav from "./Nav";
import { FaDog } from "react-icons/fa";

const Header = () => {
  return (
    <div className="Header">
      <FaDog />
      <Nav />
    </div>
  );
};

export default Header;
