import Logo from "../assets/img/Icon1.png";
import Admin from "../assets/img/admin.png";
import "./style/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import { Link } from "react-router-dom";
const NavbarPage = () => {
  return (
    <div className="navbar-box">
      <div className="logo">
        <img src={Logo} style={{ marginTop: "45px" }} alt="" />
      </div>
      <div className="admin-photo">
        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic" className="drop-toggle">
            <img src={Admin} alt="" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="dropdown-menu">
            <Dropdown.Item className="dropdown-admin" href="/Add">
              <div className="icon-admin">
                <BiBookAdd />
              </div>
              Add Book
            </Dropdown.Item>
            <Dropdown.Divider />
            <Link to="/">
              <Dropdown.Item className="dropdown-admin" href="/">
                <div className="icon-admin">
                  <HiOutlineLogout />
                </div>
                Log Out
              </Dropdown.Item>
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default NavbarPage;
