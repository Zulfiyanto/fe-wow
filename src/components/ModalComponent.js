import { Modal, Button } from "react-bootstrap";
export const ModalRegist = (props) => {
  // const OnClickLogin = () => {
  //   return props.showLogin;
  // };
  const OnClickRegist = () => {
    return props.hideRegist;
  };

  return (
    <Modal show={props.showRegist} onHide={props.hideRegist}>
      <Modal.Title className="modal-signup">Sign Up</Modal.Title>
      <Modal.Body>
        <form onSubmit={props.submit}>
          <div className="input-box">
            <div className="input-email">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={props.email}
                onChange={props.change}
              />
            </div>
            <div className="input-password">
              <input
                type="password"
                name="password"
                id="pass"
                placeholder="Password"
                value={props.pass}
                onChange={props.change}
              />
            </div>
            <div className="input-fullname">
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={props.name}
                onChange={props.change}
              />
            </div>
            <Button
              className="modal-button"
              variant="primary"
              type="submit"
              onClick={props.hideRegist}
            >
              Sign Up
            </Button>
            <div className="already-account">
              Already have an account ? Klik
              <span onClick={() => OnClickRegist()}>Here</span>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export const ModalLogin = (props) => {
  return (
    <Modal show={props.showLogin} onHide={props.hideLogin}>
      <Modal.Title className="modal-signup">Sign In</Modal.Title>
      <Modal.Body>
        <form onSubmit={props.submit}>
          <div className="input-box">
            <div className="input-email">
              <input type="email" placeholder="Email" name="email" id="email" />
            </div>
            <div className="input-password">
              <input type="password" name="password" id="pass" placeholder="Password" />
            </div>

            <Button
              className="modal-button"
              variant="primary"
              type="submit"
              onClick={() => props.hideLogin}
            >
              Sign Up
            </Button>

            <div className="already-account">
              Don't have an account ? Klik
              <span href="#" onClick={props.showRegist}>
                Here
              </span>
            </div>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
