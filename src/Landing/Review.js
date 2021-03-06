import { useState } from "react";
import DropDown from "./DropDown";
export default function Review(props) {
  const reviewsCopy = [...props.reviews];
  const [xPos, setXPos] = useState(0);
  const [arrayCounter, setArrayCounter] = useState(1);
  console.log(reviewsCopy.length);

  const translate = {
    marginLeft: `${xPos}vw`,
  };
  return (
    <section className="reviews">
      <h2>Reviews</h2>
      {props.isFetched === true ? (
        <div style={translate} className="review_container">
          {reviewsCopy.map((review) => (
            <div className="review" key={review._id}>
              <p>{review.review}</p>
              <p style={{ fontSize: "1.5rem", fontStyle: "italic", color: "#fed218", textShadow: "2px 2px 0px rgb(150 20 150)" }}>{`- ${review.name}`}</p>
              <p>★★★★☆</p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <DropDown setNewSubmission={props.setNewSubmission} />
      <button
        className="review_button"
        style={{ zIndex: "2", width: "3.5rem", position: "absolute", left: "2vw", top: "45%" }}
        onClick={() => {
          if (xPos === 0) {
            return;
          } else {
            setArrayCounter((prev) => prev - 1);
            setXPos((prev) => prev + 100);
            console.log(arrayCounter);
          }
        }}
      >
        {"<"}
      </button>
      <button
        className="review_button"
        style={{ zIndex: "2", width: "3.5rem", position: "absolute", right: "2vw", top: "45%" }}
        onClick={() => {
          if (reviewsCopy.length === arrayCounter) {
            return;
          } else {
            setArrayCounter((prev) => prev + 1);
            setXPos((prev) => prev - 100);
            console.log(arrayCounter);
          }
        }}
      >
        {">"}
      </button>
    </section>
  );
}
