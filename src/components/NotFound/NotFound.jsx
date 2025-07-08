import React from "react";
import notFoundGif from "../../assets/Animation1752006263738.gif"; // ajusta el path según la ubicación del componente

const NotFound = () => {
  return (
    <div>
      <img src={notFoundGif} alt="Not Found" />
    </div>
  );
};

export default NotFound;
