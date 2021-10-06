import { Col, Container, Row } from "react-bootstrap";
// Import Style
import "./Home.css";
// Import Components
import Logo from "../assets/img/Icon1.png";
import BookSlide from "../components/BookSlide";
import { Link } from "react-router-dom";

const ReadBook = () => {
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={12}>
          <div className="logo" style={{ paddingLeft: "200px", marginTop: "20px" }}>
            <Link to="/Home">
              <img src={Logo} alt="" />
            </Link>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12}>
          <BookSlide />
        </Col>
      </Row>
    </Container>
  );
};
export default ReadBook;
