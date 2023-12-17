import React from 'react'
import { Carousel } from 'react-bootstrap'

const Slider = () => {
    return (
        <div className="container">
            <div className="text-center">
                <Carousel>
                    <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW4lMjBzdGFyJTIwbGFuZHNjYXBlJTIwbmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D" alt="chess" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src="https://images.unsplash.com/photo-1519895710315-a04b64f04a36?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vdW50YWluJTIwc3RhciUyMGxhbmRzY2FwZSUyMG5pZ2h0JTIwc2t5fGVufDB8fDB8fHww" alt="chess" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    )
}

export default Slider