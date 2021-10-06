import "./style/SubscribeSection.css";
import Logo from "../assets/img/Wow.png";
import Clip from "../assets/img/clip.svg";
import { useState } from "react";
import { user } from "../database/data";
const SubscribeSection = (props) => {
  const [sub, setSub] = useState(user[0]);
  const OnSubs = (e) => {
    e.preventDefault();
    setSub({ subscribe: true });
  };
  console.log(sub);
  return (
    <div className="subscribe-section">
      <form onSubmit={OnSubs}>
        <div className="subs-body">
          <div className="title-subs">Premium</div>
          <div className="desc-subs">
            Pay now and access all the latest books from
            <img src={Logo} alt="logo" />
          </div>
          <div className="telp-subs">
            <img src={Logo} alt="telp" />: 0981312323
          </div>
          <div className="input-subs">
            <input type="text" placeholder="Input your account number" />
          </div>
          <div className="upload-subs">
            <input type="file" name="uploadfile" id="img" style={{ display: "none" }} />
            <label for="img">Attache proof of transfer</label>
            <img src={Clip} alt="attach" />
          </div>
          <div className="btn-subs">
            <button type="submit" onClick={props.hide}>
              Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default SubscribeSection;
