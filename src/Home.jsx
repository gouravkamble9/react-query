import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>The Awesome React query</h1>
      <div>
        <Link to="/">Home</Link> <br />
        <Link to="/products">Products</Link>
      </div>
    </>
  );
};

export default Home;
