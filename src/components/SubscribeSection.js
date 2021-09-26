import "./style/SubscribeSection.css";
import Logo from "../img/Wow.png";
import Clip from "../img/clip.svg";
const SubscribeSection = () => {
  return (
    <div className="subscribe-section">
      <div className="subs-body">
        <div className="title-subs">Premium</div>
        <div className="desc-subs">
          Pay now and access all the latest books from
          <img src={Logo} alt="" />
        </div>
        <div className="telp-subs">
          <img src={Logo} alt="" />: 0981312323
        </div>
        <div className="input-subs">
          <input type="text" placeholder="Input your account number" />
        </div>
        <div className="upload-subs">
          <input type="file" name="uploadfile" id="img" style={{ display: "none" }} />
          <label for="img">Attache proof of transfer</label>
          <img src={Clip} />
        </div>
        <div className="btn-subs">
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};
export default SubscribeSection;
