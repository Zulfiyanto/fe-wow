import "./style/DetailBookSection.css";
import book1 from "../img/sample4.png";
import { BsBookmarkFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
const DetailBookSection = () => {
  return (
    <div className="right-section">
      <div className="info-box">
        <div className="image-info">
          <img src={book1} alt="" rounded />
        </div>
        <div className="text-infos">
          <div className="title-info">Tess on the Road</div>
          <div className="writer-info">Rachel Hartman</div>
          <div className="label-info">Publication date</div>
          <div className="result-info">April 2020</div>
          <div className="label-info">Pages</div>
          <div className="result-info">436</div>
          <div className="label-info" style={{ color: "red" }}>
            ISBN
          </div>
          <div className="result-info">9781789807554</div>
        </div>
      </div>
      <div className="desc-book">
        <div className="title">About This Book</div>
        <div className="description">
          In the medieval kingdom of Goredd, women are expected to be ladies,
          men are their protectors, and dragons get to be whomever they want.
          Tess, stubbornly, is a troublemaker. You can’t make a scene at your
          sister’s wedding and break a relative’s nose with one punch (no matter
          how pompous he is) and not suffer the consequences. As her family
          plans to send her to a nunnery, Tess yanks on her boots and sets out
          on a journey across the Southlands, alone and pretending to be a boy.
          <br />
          <br />
          Where Tess is headed is a mystery, even to her. So when she runs into
          an old friend, it’s a stroke of luck. This friend is a quigutl—a
          subspecies of dragon—who gives her both a purpose and protection on
          the road. But Tess is guarding a troubling secret. Her tumultuous past
          is a heavy burden to carry, and the memories she’s tried to forget
          threaten to expose her to the world in more ways than one.
          <br />
          <br />
          Returning to the fascinating world she created in the award-winning
          and New York Times bestselling Seraphina, Rachel Hartman introduces
          readers to a new character and a new quest, pushing the boundaries of
          genre once again in this wholly original fantasy.
        </div>
      </div>
      <div className="button-detail">
        <div className="add-btn">
          <button style={{ color: "white", backgroundColor: "#D60000" }}>
            Add My List <BsBookmarkFill />
          </button>
        </div>
        <div className="read-btn">
          <button style={{ color: "black", backgroundColor: "#CDCDCDB2" }}>
            Read Book <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};
export default DetailBookSection;
