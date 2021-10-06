// import { useState } from "react";
import { Dropdown, Table } from "react-bootstrap";
import { transaction } from "../database/data";
import "./style/Table.css";
const TableComponent = () => {
  //   const [payments, setPayments] = useState(transaction);
  const paymentStatus = (no) => {
    if (no === 1) {
      return <span style={{ color: "#0ACF83" }}>Approve</span>;
    } else if (no === 2) {
      return <span style={{ color: "#F7941E" }}>Pending</span>;
    } else if (no === 3) {
      return <span style={{ color: "#FF0742" }}>Cancel</span>;
    }
  };

  //   const statusSubmit = (no) => {
  //     for (let i = 1; i <= payments.length; i++) {
  //       if (i === no) {
  //         setPayments({ payment: 1 });
  //       }
  //     }
  //   };

  return (
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
            {transaction.map((state, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{state.users}</td>
                <td>{state.bukti}</td>
                <td>{state.active}/Hari</td>
                <td>
                  {state.status ? (
                    <span style={{ color: "#0ACF83" }}>Active</span>
                  ) : (
                    <span style={{ color: "#FF0742" }}>Not active</span>
                  )}
                </td>
                <td>{paymentStatus(state.payment)}</td>
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
                        // onClick={statusSubmit(i + 1)}
                      >
                        Approved
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-table-danger" href="#/action-2">
                        Cancel
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
export default TableComponent;
