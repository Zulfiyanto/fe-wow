import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Logo from "../img/Icon1.png";
import "./Dashboard.css";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
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
            onClick={handleShow}
          >
            Sign Up
          </button>
          <button style={{ backgroundColor: "#CDCDCDB2", color: "black" }}>
            Sign In
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
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
              onClick={handleClose}
            >
              Sign Up
            </Button>
            <div className="already-account">
              Already have an account ? Klik <a href="#">Here</a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Dashboard;
