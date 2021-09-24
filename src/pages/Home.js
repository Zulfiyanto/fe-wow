import { useState } from "react";
import { Col, Container, Row, Modal } from "react-bootstrap";
// Import Style
import "./Home.css";
// Import Components
import ProfileSide from "../components/ProfileSideBar";
import HomeSection from "../components/HomeSection";
const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const handleShowPopUp = () => setShowPopUp(true);
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={2}>
          <ProfileSide />
        </Col>
        <Col md={10}>
          <HomeSection />
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
