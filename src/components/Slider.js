import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="text-end">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src={require("../test/pizza.jpg")}
            src="https://media.istockphoto.com/id/1217108207/photo/shopping-or-delivery-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=Fhd4ySZl4lwVoHCPcpOO-UOldzTUYPVEHaNc2cYp3KI="
            alt="food-item1"
          />
          <Carousel.Caption className="text-start text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            // src={require("../test/salad.jpg")}
            src="https://media.istockphoto.com/id/1217108207/photo/shopping-or-delivery-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=Fhd4ySZl4lwVoHCPcpOO-UOldzTUYPVEHaNc2cYp3KI="
            alt="food-item2"
          />
          <Carousel.Caption className="text-start text-dark">
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
