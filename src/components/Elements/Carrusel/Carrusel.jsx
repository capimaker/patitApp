import { Carousel } from "antd";

const Carrusel = ({ images = [] }) => {
  const onChange = () => {};
  return (
    <Carousel afterChange={onChange} draggable="true">
      {images.map((img, index) => (
        <div key={index}>
          <img
            src={img}
            alt={`Imagen ${index + 1}`}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default Carrusel;
