import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="text-end">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require("../test/pizza.jpg")}
            alt="food-item1"
          />
          <Carousel.Caption className="text-start text-dark">
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={require("../test/salad.jpg")}
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
