import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
export default function Gallery(props) {
  function randomRotateDeg() {
    const decider = Math.floor(Math.random() * 2);

    if (decider === 0) {
      return Math.random() * 2;
    } else {
      return Math.random() * -2;
    }
  }
  return (
    <section className="gallery">
      <h2>Gallery</h2>
      <div className="gallery_container">
        {props.isFetched === true ? (
          <>
            {props.galleryCopy.map((galleryItem) => (
              <Link className="fade_in" key={galleryItem.galleryimg} to="gallerypopup">
                <div className="gallery_scale">
                  <div onClick={() => props.setCurrentImg(galleryItem)} style={{ transform: `rotate(${randomRotateDeg()}deg)` }} className="gallery_item_container">
                    <img className="gallery_item" src={`./img/${galleryItem.galleryimg}.jpg`} alt={galleryItem.alt} />
                    <p className="gallery_font">{galleryItem.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </>
        ) : (
          <TailSpin ariaLabel="Loading" color="#fed218" height={80} width={80} />
        )}
      </div>
    </section>
  );
}
