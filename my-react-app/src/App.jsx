// 1. react intro //

// import Header from "./Header.jsx";
// import Footer from "./Footer.jsx";
// import Food from "./Food.jsx";
// import Food from "./Food.jsx";

// function App() {
//   return (
//     <>
//       <Header />
//       <Food />
//       <Footer />
//     </>
//   );
// }

// export default App;

// 2. card components//

// import Card from "./Card.jsx";

// function App() {
//   return (
//     <>
//       <Card />;
//       <Card />;
//       <Card />;
//       <Card />;
//     </>
//   );
// }

// export default App;

// CSS styles

// import Button from "./Button.jsx";

// function App() {
//   return (
//     <>
//       <Button />
//     </>
//   );
// }

// export default App;

// import Student from "./student.jsx";
// function App() {
//   return (
//     <>
//       <Student name="Anusha" age={30} isStudent={true} />
//       <Student name="Chuppala" age={42} isStudent={false} />
//       <Student name="narasimha" age={50} isStudent={false} />
//       <Student name="Yashwanth" age={270} isStudent={true} />
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-container">
      <h2 className="title">Products List</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img className="product-image" src={product.image} />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">{product.price}</p>
            <p className="product-rating">
              ⭐ {product.rating.rate} - {product.rating.count}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
