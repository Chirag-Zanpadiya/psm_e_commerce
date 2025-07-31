import React from "react";
import NavBar from "../components/custom/NavBar";
import Footer from "../components/custom/Footer";

const RootLayOut = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayOut;
