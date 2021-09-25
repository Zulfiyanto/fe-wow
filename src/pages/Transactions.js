import { Col, Container, Dropdown, Navbar, Row, Table } from "react-bootstrap";
// Import Style
import "./Home.css";
// Import Components
import Logo from "../img/Icon1.png";
import NavbarPage from "../components/Navbar";

const Transaction = () => {
  return (
    <Container className="padding-container" fluid="true">
      <Row>
        <Col md={12}>
          <NavbarPage />
        </Col>
      </Row>
      <Row>
        <Col md={12} className="tb-section">
          <div className="table-section">
            <div className="title">Incoming Transaction</div>
            <div className="table-box">
              <Table striped hover>
                <thead className="borderless">
                  <tr>
                    <th>No</th>
                    <th>Users</th>
                    <th>Bukti Transfer</th>
                    <th>Remaining Active</th>
                    <th>Status User</th>
                    <th>Status Payment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-body">
                  <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td>bca.jpg</td>
                    <td>26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="drop-toggle"
                          style={{ color: "#1C9CD2", fontSize: "2rem" }}
                        ></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-table">
                          <Dropdown.Item
                            className="dropdown-table-success"
                            href="#/action-1"
                          >
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-table-danger"
                            href="#/action-2"
                          >
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Radif Ganteng</td>
                    <td>bca.jpg</td>
                    <td>26 / Hari</td>
                    <td>Active</td>
                    <td>Approve</td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="drop-toggle"
                          style={{ color: "#1C9CD2", fontSize: "2rem" }}
                        ></Dropdown.Toggle>
                        <Dropdown.Menu className="dropdown-menu-table">
                          <Dropdown.Item
                            className="dropdown-admin"
                            href="#/action-1"
                          >
                            Approved
                          </Dropdown.Item>
                          <Dropdown.Item
                            className="dropdown-admin"
                            href="#/action-2"
                          >
                            Cancel
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Transaction;
