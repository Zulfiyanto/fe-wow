import { Col, Row } from "react-bootstrap";
// Import Style
import "./style/HomeSection.css";
// Import Photo
import banner from "../assets/img/Banner.png";
import { book, user } from "../database/data";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomeSection = (props) => {
  const [users] = useState(user[0]);
  const [books] = useState(book[0]);
  return (
    <div className="right-section">
      <div className="banner-section">
        <img src={banner} alt="" />
        <img
          style={{ position: "absolute", left: "1000px", top: "40px", width: "18%" }}
          src={books.image}
          alt=""
        />
      </div>
      <div className="list-book">
        <div className="title">List Book</div>
        <Row className="list">
          {book.map((state, i) => (
            <Col md={3} key={i}>
              {users.subscribe ? (
                <Link to="/Detail">
                  <div className="card">
                    <img src={state.image} alt="img" rounded />
                    <div className="title-card">{state.title}</div>
                    <div className="writer">{state.writer}</div>
                  </div>
                </Link>
              ) : (
                <Link onClick={props.modal} to="/Home">
                  <div className="card">
                    <img src={state.image} alt="img" rounded />
                    <div className="title-card">{state.title}</div>
                    <div className="writer">{state.writer}</div>
                  </div>
                </Link>
              )}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default HomeSection;
