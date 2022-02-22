import "./sass/App.scss";
import Landing from "./Landing/Landing";
import Nav from "./Nav";
import Shop from "./Shop";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cartAmount, setCartAmount] = useState("");
  const [gallery, setGallery] = useState([]);
  const [webshop, setWebshop] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isFetched, setIsFetched] = useState(false);
  const [newSubmission, setNewSubmission] = useState(0);

  console.log(gallery);
  useEffect(() => {
    async function getGallery() {
      const JSONData = await fetch("https://tradingtime-9cf2.restdb.io/rest/tradingtimegallery", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "61e6e8efa0f7d226f9b75f6b",
          "cache-control": "no-cache",
        },
      });
      const galleryData = await JSONData.json();
      setGallery(galleryData);
      setIsFetched(true);
    }
    getGallery();
  }, []);
  useEffect(() => {
    async function getShop() {
      const JSONData = await fetch("https://tradingtime-9cf2.restdb.io/rest/tradingtimeshop", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "61e6e8efa0f7d226f9b75f6b",
          "cache-control": "no-cache",
        },
      });
      const shopData = await JSONData.json();
      setWebshop(shopData);
    }
    getShop();
  }, []);
  useEffect(() => {
    async function getReviews() {
      const JSONData = await fetch("https://tradingtime-9cf2.restdb.io/rest/reviews", {
        method: "get",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "x-apikey": "61e6e8efa0f7d226f9b75f6b",
          "cache-control": "no-cache",
        },
      });
      const reviewData = await JSONData.json();
      setReviews(reviewData);
    }
    getReviews();
  }, [newSubmission]);

  return (
    <div className="App">
      <Nav cartAmount={cartAmount} />
      <main className="banner">
        <Routes>
          <Route path="/" element={<Landing isFetched={isFetched} reviews={reviews} gallery={gallery} setNewSubmission={setNewSubmission} />} />
          <Route path="shop" element={<Shop isFetched={isFetched} webshop={webshop} setCartAmount={setCartAmount} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
