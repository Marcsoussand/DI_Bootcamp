import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

//Daily Challenge
class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel >
                <div>
                    <img  src="hongKong.jpg" />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="Macao.webp" />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="Japan.webp" />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="LasVegas.webp" />
                    <p className="legend">Las Vegas</p>
                </div>
            </Carousel>
        );
    }
  };
  


  export default DemoCarousel;