import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {img} from '../../vendor/slider-const';
import "../DressCode/Dresscode.css";


const handleDragStart = (e) => e.preventDefault();

const Gallery = () => {
  return (
    <AliceCarousel 
        mouseTracking 
        items={img} 
        disableDotsControls 
        responsive={{
            0: { items: 1 },
            1024: { items: 5 },
        }}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        // infinite= {Boolean}
        />
  );
}

export default Gallery;