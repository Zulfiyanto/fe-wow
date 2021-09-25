import { Col, Row } from "react-bootstrap";
// Import Photo
import Email from "../assets/icon/MailIcon.svg";
import Gender from "../assets/icon/GenderIcon.svg";
import Telp from "../assets/icon/TelpIcon.svg";
import Point from "../assets/icon/PointIcon.svg";
import PhotoProfile from "../img/Photo-profile.jpg";
import book1 from "../img/Sample1.png";
// Import Style
import "./style/ProfileSection.css";

const ProfileSection = () => {
  return (
    <div className="right-section">
      <div className="profile">
        <div className="title">Profile</div>
        <div className="box-profile">
          <div className="list-bio">
            <div className="list-profile">
              <img src={Email} alt="" />
              <div className="text-profile">
                <div className="text-top">egigans@gmail.com</div>
                <div className="text-bottom">Email</div>
              </div>
            </div>
            <div className="list-profile">
              <img src={Gender} alt="" />
              <div className="text-profile">
                <div className="text-top">Male</div>
                <div className="text-bottom">Gender</div>
              </div>
            </div>
            <div className="list-profile">
              <img src={Telp} alt="" />
              <div className="text-profile">
                <div className="text-top">0812-8623-8911</div>
                <div className="text-bottom">Mobile Phone</div>
              </div>
            </div>
            <div className="list-profile">
              <img src={Point} alt="" />
              <div className="text-profile">
                <div className="text-top">
                  Perumahan Permata Bintaro Residence C-3
                </div>
                <div className="text-bottom">Address</div>
              </div>
            </div>
          </div>
          <div className="photo-btn">
            <div className="image-profile">
              <img src={PhotoProfile} alt="profile" />
            </div>
            <div className="btn-profile">
              <button>Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
      <div className="list-book">
        <div className="title">My List Book</div>
        <Row className="list">
          <Col md={3}>
            <div className="card">
              <img src={book1} alt="" rounded />
              <div className="title-card">Serangkai</div>
              <div className="writer">Valerie Patkar</div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ProfileSection;
