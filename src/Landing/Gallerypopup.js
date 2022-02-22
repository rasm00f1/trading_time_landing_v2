export default function Gallerypopup(props) {
  return (
    <section className="popup_background">
      <div className="scale_in popup">
        <div className="popup_img">
          <div className="side_by_side">
            <h2>{props.currentImg.description}</h2>
            <h2
              onClick={() => {
                props.setCurrentImg("");
              }}
            >
              X
            </h2>
          </div>
          <img src={`./img/${props.currentImg.galleryimg}.jpg`} alt="popup version" />
        </div>
      </div>
    </section>
  );
}
