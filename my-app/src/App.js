import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo nama="Nike Air Force 1 Low" category="Men's Shoes" />
    </div>
  );
}

function FotoProduk() {
  return (
    <div className="Foto">
      <img src="./asset/nike air force 1 low.jpg" />
    </div>
  );
}

function ProdukInfo(props) {
  const { nama, category } = props;
  const price = 1800000;

  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{nama}</h1>
        <p className="Price">IDR {price.toLocaleString("id")}</p>
        <p className="Info">
          Enjoy timeless classic style with the Nike Air Force 1 Low. Designed
          with a sleek low silhouette and premium materials like leather or
          nubuck, this shoe delivers a stylish and durable look. With a
          comfortable midsole and Air Sole unit in the heel, you’ll feel maximum
          comfort every time. Available in a variety of colors and designs, the
          Nike Air Force 1 Low is the perfect choice to express your personal
          style for any occasion.
        </p>
        <a href="#">Add to Cart</a>
      </div>
    </div>
  );
}

export default App;
