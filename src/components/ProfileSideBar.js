// Import Style
import "./style/ProfileSideBar.css";
// Import Photo
import UserPhoto from "../img/User.svg";
import Logo from "../img/Icon1.png";
import profileIcon from "../img/profile.svg";
import subscribeIcon from "../img/Subscribe.svg";
import logoutIcon from "../img/Logout.svg";
import { Link } from "react-router-dom";
const ProfileSide = () => {
  return (
    <div className="leftbar-profile">
      <div className="leftbar-top">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="photo-profile">
          <img src={UserPhoto} alt="" />
        </div>
        <div className="username">Egi Ganteng</div>
        <div className="subscribe-status">Not Subscribed Yet</div>
      </div>
      <div className="profile-nav">
        <img src={profileIcon} alt="" />
        Profile
      </div>
      <div className="subscribe-nav">
        <Link to="/Subscribe">
          <img src={subscribeIcon} alt="" />
          Subscribe
        </Link>
      </div>
      <div className="logout">
        <img src={logoutIcon} alt="" />
        Logout
      </div>
    </div>
  );
};

export default ProfileSide;
