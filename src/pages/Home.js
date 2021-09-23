import { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
import "./Home.css";
// Image Import
import UserPhoto from "../img/User.svg";
import Logo from "../img/Icon1.png";
import profileIcon from "../img/profile.svg";
import subscribeIcon from "../img/Subscribe.svg";
import logoutIcon from "../img/Logout.svg";
import banner from "../img/Banner.png";
import book1 from "../img/Sample1.png";
import book2 from "../img/sample2.png";
import book3 from "../img/sample3.png";
import book4 from "../img/sample4.png";
const Home = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const handleShowPopUp = () => setShowPopUp(true);
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={2} className="left-section">
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
              <img src={subscribeIcon} alt="" />
              Subscribe
            </div>
            <div className="logout">
              <img src={logoutIcon} alt="" />
              Logout
            </div>
          </div>
        </Col>
        <Col md={10}>
          <div className="right-section">
            <div className="banner-section">
              <img src={banner} alt="" />
            </div>
            <div className="list-book">
              <div className="title">List Book</div>
              <Row className="list">
                <Col md={3}>
                  <div className="card">
                    <img src={book1} alt="" rounded />
                    <div className="title-card">Serangkai</div>
                    <div className="writer">Valerie Patkar</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card">
                    <img src={book2} alt="" rounded />
                    <div className="title-card">
                      Z1 - Sd/Mi Buku Siswa Tematik T...
                    </div>
                    <div className="writer">Afi Yustiyana</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card">
                    <img src={book3} alt="" rounded />
                    <div className="title-card">
                      Kabar Rahasia Dari Alam Kubu ...
                    </div>
                    <div className="writer">DR. Kamil Yusuf Al-Atum</div>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="card">
                    <img src={book4} alt="" rounded />
                    <div className="title-card">Tess on the Road</div>
                    <div className="writer">Rachel Hartmanr</div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
      <Modal show={showPopUp} onHide={handleShowPopUp} size="lg">
        <div className="popup-title">
          please make a payment to read the latest books
        </div>
      </Modal>
    </Container>
  );
};
export default Home;
