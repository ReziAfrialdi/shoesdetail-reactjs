import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="Parentbox">
      <FotoProduk />
      <ProdukInfo
        isDiscount="coming"
        nama="Nike Air Force 1 Low"
        category="Men's Shoes"
      />
      <ReviewItems />
    </div>
  );
}

function ReviewItems() {
  // Mempersiapkan data dummy JSON
  const user = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Deni",
      review: "Harganya murah tapi kualitas mantap Keren poll",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/9558758/pexels-photo-9558758.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Jeje",
      review: "Shade sepatu nya keren",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/4919373/pexels-photo-4919373.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Qila",
      review: "Design nya bagus dan harga nya affordable!",
    },
  ];

  // Memetakan data user ke dalam elemen JSX
  const listReviews = user.map((itemReviews) => (
    <div className="Item">
      <img src={itemReviews.image} />
      <div className="User">
        <h3>{itemReviews.name}</h3>
        <p>{itemReviews.review}</p>
      </div>
    </div>
  ));
  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReviews}
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

function CheckDiscount(props) {
  const { isDiscount } = props;
  if (isDiscount == "yes") {
    return <p>Discount 50% Off</p>;
  } else if (isDiscount == "coming") {
    return <p>Akan ada diskon ...</p>;
  } else {
    return <p>Belum ada diskon</p>;
  }
}

function ProdukInfo(props) {
  const { nama, category, isDiscount } = props;
  const price = 1800000;
  const benefits = ["Tahan air", "Bahan kuat", "Membuat kaki nyaman"];
  const listBenefits = benefits.map((itemBenefits) => <li>{itemBenefits}</li>);
  return (
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{nama}</h1>
        <p className="Price">IDR {price.toLocaleString("id")}</p>
        <CheckDiscount isDiscount={isDiscount} />
        <p className="Info">
          Enjoy timeless classic style with the Nike Air Force 1 Low. Designed
          with a sleek low silhouette and premium materials like leather or
          nubuck, this shoe delivers a stylish and durable look. With a
          comfortable midsole and Air Sole unit in the heel, you’ll feel maximum
          comfort every time. Available in a variety of colors and designs, the
          Nike Air Force 1 Low is the perfect choice to express your personal
          style for any occasion.
        </p>
        <ul>{listBenefits}</ul>
        <a onClick={(e) => TambahCart(nama, e)} href="#">
          Add to Cart
        </a>
      </div>
    </div>
  );
}

function TambahCart(e) {
  return console.log("Membeli sepatu " + e);
}

export default App;
