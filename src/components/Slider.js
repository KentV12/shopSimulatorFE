import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div className="text-end">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://img.freepik.com/premium-photo/food-background-pasta-chicken-pumpkin-salad-meat-mushrooms-vegetables-black-stone-background-top-view-free-space-text_187166-31381.jpg" alt="food-item1" />
                    <Carousel.Caption className="text-start text-dark">
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 h-50" src="https://previews.123rf.com/images/vell/vell1508/vell150800015/43556048-healthy-breakfast-with-natural-dairy-products-top-view-horizontal-food-background.jpg" alt="food-item2" />
                    <Carousel.Caption className="text-start text-dark">
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider