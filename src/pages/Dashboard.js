import Logo from "../img/Icon1.png";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="section">
      <div className="icon">
        <img src={Logo} alt="" />
      </div>
      <div className="description">
        Sign-up now and subscribe to enjoy all the cool and latest books - The
        best book rental service provider in Indonesia
      </div>
      <div className="btn-home">
        <button style={{ backgroundColor: "#D60000", color: "white" }}>
          Sign Up
        </button>
        <button style={{ backgroundColor: "#CDCDCDB2", color: "black" }}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
