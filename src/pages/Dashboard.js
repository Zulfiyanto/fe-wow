import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Logo from "../img/Icon1.png";
import "./Dashboard.css";

const Dashboard = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const handleShowRegist = () => setShowRegister(true);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);
  return (
    <>
      <div className="section">
        <div className="icon">
          <img src={Logo} alt="" />
        </div>
        <div className="description">
          Sign-up now and subscribe to enjoy all the cool and latest books - The
          best book rental service provider in Indonesia
        </div>
        <div className="btn-home">
          <button
            style={{ backgroundColor: "#D60000", color: "white" }}
            onClick={handleShowRegist}
          >
            Sign Up
          </button>
          <button
            style={{ backgroundColor: "#CDCDCDB2", color: "black" }}
            onClick={handleShowLogin}
          >
            Sign In
          </button>
        </div>
      </div>
      <Modal show={showRegister} onHide={handleCloseRegister}>
        <Modal.Title className="modal-signup">Sign Up</Modal.Title>
        <Modal.Body>
          <div className="input-box">
            <div className="input-email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-password">
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
              />
            </div>
            <div className="input-fullname">
              <input type="text" placeholder="Full Name" />
            </div>
            <Button
              className="modal-button"
              variant="primary"
              type="submit"
              onClick={handleCloseRegister}
            >
              Sign Up
            </Button>
            <div className="already-account">
              Already have an account ? Klik <a href="#">Here</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Title className="modal-signup">Sign In</Modal.Title>
        <Modal.Body>
          <div className="input-box">
            <div className="input-email">
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-password">
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
              />
            </div>
            <Button
              className="modal-button"
              variant="primary"
              type="submit"
              onClick={handleCloseLogin}
            >
              Sign Up
            </Button>
            <div className="already-account">
              Don't have an account ? Klik <a href="#">Here</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
