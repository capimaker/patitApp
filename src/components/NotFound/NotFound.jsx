import React from "react";
import notFoundGif from "../../assets/Animation1752006263738.gif"; // ajusta el path según la ubicación del componente
import "./NotFound.css"

const NotFound = () => {
  return (
    <div className="imagen">
      <img src={notFoundGif} alt="Not Found" />
    </div>
  );
};

export default NotFound;
