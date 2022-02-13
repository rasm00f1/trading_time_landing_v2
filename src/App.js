import "./App.css";
import Landing from "./Landing/Landing";
import Nav from "./Nav";
import Shop from "./Shop";
import Gallerypopup from "./Landing/Gallerypopup";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cartAmount, setCartAmount] = useState("");
  const [gallery, setGallery] = useState([]);
  const [webshop, setWebshop] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [currentImg, setCurrentImg] = useState({});
  const [isFetched, setIsFetched] = useState(false);

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
  }, []);

  return (
    <div className="App">
      <Nav cartAmount={cartAmount} />
      <div className="banner">
        <Routes>
          <Route path="/" element={<Landing isFetched={isFetched} setCurrentImg={setCurrentImg} reviews={reviews} gallery={gallery} />} />
          <Route path="shop" element={<Shop isFetched={isFetched} webshop={webshop} setCartAmount={setCartAmount} />} />
          <Route path="gallerypopup" element={<Gallerypopup currentImg={currentImg} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
