import logo from "./logo.svg";
import "./App.css";

function App() {
  const category = "Men's Shoes";
  const price = 1800000;

  return (
    <div class="Parentbox">
      <div class="Foto">
        <img src="./asset/nike air force 1 low.jpg" />
      </div>
      <div class="Deskripsi">
        <p class="Cate">{category}</p>
        <h1 class="Title">Nike Air Force 1 Low</h1>
        <p class="Price">IDR {price.toLocaleString("id")}</p>
        <p class="Info">
          Enjoy timeless classic style with the Nike Air Force 1 Low. Designed
          with a sleek low silhouette and premium materials like leather or
          nubuck, this shoe delivers a stylish and durable look. With a
          comfortable midsole and Air Sole unit in the heel, you’ll feel maximum
          comfort every time. Available in a variety of colors and designs, the
          Nike Air Force 1 Low is the perfect choice to express your personal
          style for any occasion.
        </p>
      </div>
    </div>
  );
}

export default App;
