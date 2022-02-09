import { Link } from "react-router-dom";

export default function Gallerypopup(props) {
  return (
    <section className="popup_background">
      <div className="popup">
        <div className="popup_img">
          <div className="side_by_side">
            <h2>{props.currentImg.description}</h2>
            <Link to="/">
              <h2>X</h2>
            </Link>
          </div>
          <img src={`./img/${props.currentImg.galleryimg}.jpg`} alt="popup version" />
        </div>
      </div>
    </section>
  );
}
