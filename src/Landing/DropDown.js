import { Disclosure, Transition } from "@headlessui/react";
import { useState } from "react";
import Arrow from "../img/Arrow";
export default function DropDown() {
  const [nameData, setNameData] = useState("");
  const [reviewData, setReviewData] = useState("");

  function handleChangeName(event) {
    console.log(event.target.value);
    setNameData(event.target.value);
  }
  function handleChangeReview(event) {
    console.log(event.target.value);
    setReviewData(event.target.value);
  }

  function post() {
    const postData = JSON.stringify({
      name: nameData,
      review: reviewData,
    });
    fetch("https://tradingtime-9cf2.restdb.io/rest/reviews", {
      method: "post",
      body: postData,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "x-apikey": "61e6e8efa0f7d226f9b75f6b",
        "cache-control": "no-cache",
      },
    }).then((res) => res.json());
  }

  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="review_button">
              <span>Add a Review</span>
              <Arrow className={`${open ? "transform rotate-90" : ""}`} />
            </Disclosure.Button>
            <Transition show={open} enter="transition-opacity duration-75" enterFrom="opacity-0" enterTo="opacity-100" leave="transition-opacity duration-150" leaveFrom="opacity-100" leaveTo="opacity-0">
              <form>
                <Disclosure.Panel className="disclosure_panel">
                  <label htmlFor="fullname">Full Name:</label>
                  <br></br>
                  <input type="text" id="fullname" name="fullname" onChange={handleChangeName} />
                </Disclosure.Panel>
                <Disclosure.Panel className="disclosure_panel">
                  <label htmlFor="review">Review:</label>
                  <br></br>
                  <input type="text" maxLength={"100"} id="review" name="review" onChange={handleChangeReview} />
                </Disclosure.Panel>
                <Disclosure.Panel className="disclosure_panel">
                  <button
                    className="review_submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setTimeout(() => {
                        post();
                      }, 3000);
                    }}
                  >
                    Submit
                  </button>
                </Disclosure.Panel>
              </form>
            </Transition>
          </>
        )}
      </Disclosure>
    </>
  );
}
