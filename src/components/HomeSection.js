import { Col, Row } from "react-bootstrap";
// Import Style
import "./style/HomeSection.css";
// Import Photo
import banner from "../img/Banner.png";
import book1 from "../img/Sample1.png";
import book2 from "../img/sample2.png";
import book3 from "../img/sample3.png";
import book4 from "../img/sample4.png";
const HomeSection = () => {
  return (
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
              <div className="title-card">Kabar Rahasia Dari Alam Kubu ...</div>
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
  );
};
export default HomeSection;
