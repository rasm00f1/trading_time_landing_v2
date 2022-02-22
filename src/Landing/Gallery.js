import { TailSpin } from "react-loader-spinner";
import Gallerypopup from "./Gallerypopup";
import { useState } from "react";

export default function Gallery(props) {
  const [currentImg, setCurrentImg] = useState("");

  function randomRotateDeg() {
    const decider = Math.floor(Math.random() * 2);

    if (decider === 0) {
      return Math.random() * 2;
    } else {
      return Math.random() * -2;
    }
  }
  return (
    <>
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery_container">
          {props.isFetched === true ? (
            <>
              {props.galleryCopy.map((galleryItem) => (
                <div className="scale" key={galleryItem.galleryimg}>
                  <div className="fade_in">
                    <div onClick={() => setCurrentImg(galleryItem)} style={{ transform: `rotate(${randomRotateDeg()}deg)` }} className="gallery_item_container">
                      <img className="gallery_item" src={`./img/${galleryItem.galleryimg}.jpg`} alt={galleryItem.alt} />
                      <p className="gallery_font">{galleryItem.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <TailSpin ariaLabel="Loading" color="#fed218" height={80} width={80} />
          )}
        </div>
      </section>
      {currentImg === "" ? <></> : <Gallerypopup setCurrentImg={setCurrentImg} currentImg={currentImg} />}
    </>
  );
}
