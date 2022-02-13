import { useState } from "react";
export default function Review(props) {
  const reviewsCopy = [...props.reviews];
  const [xPos, setXPos] = useState(0);
  console.log(reviewsCopy);

  const translate = {
    marginLeft: `${xPos}vw`,
  };
  return (
    <div className="reviews">
      <h2>Reviews</h2>
      {props.isFetched === true ? (
        <div style={translate} className="review_container">
          {reviewsCopy.map((review) => (
            <div className="review" key={review._id}>
              <p>{review.review}</p>
              <p>★★★★☆</p>
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
      <button className="review_button">Add a Review</button>
      <button
        className="review_button"
        style={{ zIndex: "2", width: "3.5rem", position: "absolute", left: "2vw", top: "45%" }}
        onClick={() => {
          if (xPos === 0) {
            return;
          } else {
            setXPos((prev) => prev + 100);
          }
        }}
      >
        {"<"}
      </button>
      <button
        className="review_button"
        style={{ zIndex: "2", width: "3.5rem", position: "absolute", right: "2vw", top: "45%" }}
        onClick={() => {
          setXPos((prev) => prev - 100);
        }}
      >
        {">"}
      </button>
    </div>
  );
}
