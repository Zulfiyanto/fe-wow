import { Col, Container, Row } from "react-bootstrap";
// Import Style
import "./Home.css";
// Import Components
import Logo from "../img/Icon1.png";
import BookSlide from "../components/BookSlide";

const ReadBook = () => {
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={12}>
          <div
            className="logo"
            style={{ paddingLeft: "200px", marginTop: "20px" }}
          >
            <img src={Logo} alt="" />
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
