// Import Library
import { useState } from "react";
import { useHistory } from "react-router";
// Import Component
import { user } from "../database/data";
import { ModalLogin, ModalRegist } from "../components/ModalComponent";
// Import Style
import "./Dashboard.css";
// Import Photo
import Logo from "../assets/img/Icon1.png";

const Dashboard = () => {
  // State
  const [Data, setData] = useState({ email: "", name: "", password: "", isLogin: false });
  const [admin, setAdmin] = useState(false);
  // modal state
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  // Modal handler
  const handleShowRegist = () => setShowRegister(true);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);
  const handleCloseRegister = () => setShowRegister(false);

  const { name, email, password, isLogin } = Data;
  let history = useHistory();

  // Function
  const OnChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    user.push(Data); 
  };

  const LoginSubmit = (e) => {
    e.preventDefault();
    const emails = document.getElementById("email").value;
    const password = document.getElementById("pass").value;
    for (let i = 0; i < user.length; i++) {
      if (
        user[i].email === emails &&
        user[i].password === password &&
        !user[i].email.includes("admin")
      ) {
        setData({ isLogin: true });
      } else if (user[i].email === emails) {
        setAdmin(true);
      }
    }
  };

  const handlePushHome = () => {
    history.push("/Home");
  };
  const handlePushAdmin = () => {
    history.push("/Transaction");
  };
  console.log(admin);
  return (
    <>
      {admin && handlePushAdmin()}
      {isLogin && handlePushHome()}
      <div className="section">
        <div className="icon">
          <img src={Logo} alt="" />
        </div>
        <div className="description-dash">
          Sign-up now and subscribe to enjoy all the cool and latest books - The best book rental
          service provider in Indonesia
        </div>
        <div className="btn-home">
          <button style={{ backgroundColor: "#D60000", color: "white" }} onClick={handleShowRegist}>
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
      <ModalRegist
        name={name}
        email={email}
        pass={password}
        submit={OnSubmit}
        change={OnChange}
        showLogin={handleShowLogin}
        showRegist={showRegister}
        showRegister={handleShowRegist}
        hideRegist={handleCloseRegister}
      />

      <ModalLogin
        showLogin={showLogin}
        submit={LoginSubmit}
        hideLogin={handleCloseLogin}
        showRegist={handleShowRegist}
      />
    </>
  );
};

export default Dashboard;
