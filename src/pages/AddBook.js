// Import Style
import "./Home.css";
// Import Components
import NavbarPage from "../components/Navbar";
// Import Library
import { Col, Container, Form, Row } from "react-bootstrap";
import { BsPaperclip } from "react-icons/bs";
import { BiBookAdd } from "react-icons/bi";

const AddBook = () => {
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={12}>
          <NavbarPage />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="tb-section">
          <div className="input-box-admin">
            <div className="input-section">
              <div className="title" style={{ marginBottom: "20px" }}>
                Add Book
              </div>
              <Form>
                <Form.Control className="input-admin" type="email" placeholder="Enter email" />
                <Form.Group controlId="date">
                  <Form.Control className="input-admin date-input" type="date" />
                </Form.Group>
                <Form.Control className="input-admin" type="number" placeholder="Pages" />
                <Form.Control className="input-admin" type="text" placeholder="Author" />
                <Form.Control className="input-admin" type="text" placeholder="ISBN" />
                <Form.Control
                  className="input-admin-textarea"
                  as="textarea"
                  placeholder="About This Book"
                />
                <div className="upload-input">
                  <input
                    className="input-admin"
                    type="file"
                    name="uploadfile"
                    id="img"
                    style={{ width: "100%", display: "none", height: "100%" }}
                  />
                  <label for="img">Attache proof of transfer</label>
                  <BsPaperclip style={{ fontSize: "2rem" }} />
                </div>

                <div className="button-details">
                  <div className="add-book">
                    <button style={{ color: "white", backgroundColor: "#D60000" }}>
                      Add Book <BiBookAdd style={{ fontSize: "2rem" }} />
                    </button>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default AddBook;
