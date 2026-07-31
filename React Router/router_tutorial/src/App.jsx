import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatchRoute from "./components/NoMatchRoute";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";
import FeaturedProduct from "./components/FeaturedProduct";
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import Admin from "./components/Admin";
import React from "react";


// import About from "./components/About";
const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <>
      <Navbar />

      {/* Routes always after the components  */}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} /> */}
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading....">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />

        <Route path="products" element={<Products />}>
          <Route path="new" element={<NewProduct />} />
          <Route path="featured" element={<FeaturedProduct />} />
          <Route index element={<FeaturedProduct />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>

        <Route path="*" element={<NoMatchRoute />} />
      </Routes>
    </>
  );
}

export default App;
