import Logo from "../img/Icon1.png";
import Admin from "../img/admin.png";
import "./style/Navbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { BiBookAdd } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
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
            <Dropdown.Item className="dropdown-admin" href="#/action-1">
              <div className="icon-admin">
                <BiBookAdd />
              </div>
              Add Book
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item className="dropdown-admin" href="#/action-2">
              <div className="icon-admin">
                <HiOutlineLogout />
              </div>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
export default NavbarPage;
