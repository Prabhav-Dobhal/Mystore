import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Cart from "./components/Cart/cart";
import Searchproductpage from "./components/Products/Searchproductpage";
import ViewProduct from "./components/Products/viewproduct";
import Address from "./components/Address/address";
import UserProvider from "./components/usercontext";
import Orderconfirmed from "./components/order/orderconfirmed";
import OrderFailed from "./components/order/orderfailed";
import Myorder from "./components/Myorders/myorder";

function App() {
  const [isPortrait, setIsPortrait] = useState(
    window.matchMedia("(orientation: portrait)").matches
  );

  useEffect(() => {
    const handleOrientationChange = () => {
      setIsPortrait(window.matchMedia("(orientation: portrait)").matches);
    };

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <UserProvider>
          {isPortrait === true ? (
            <img
              src="/landscape_mode.png"
              style={{
                marginTop: "20vh",
                width: "100vw",
                height: "45vh",
                backgroundSize: "cover",
              }}
            ></img>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/search" element={<Searchproductpage />} />
              <Route path="/viewproduct" element={<ViewProduct />} />
              <Route path="/address" element={<Address />} />
              <Route path="/success" element={<Orderconfirmed />} />
              <Route path="/cancel" element={<OrderFailed />} />
              <Route path="/myorder" element={<Myorder />} />
            </Routes>
          )}
        </UserProvider>
      </div>
    </Router>
  );
}

export default App;
