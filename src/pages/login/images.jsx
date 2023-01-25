import React, { useState, useEffect } from 'react';
import slide1 from '../images/slide-1.png'
import slide2 from '../images/slide-2.png'
import slide3 from '../images/slide-3.png'
import slide4 from '../images/slide-4.png'

import './login.css'

function ImageSlider({  duration }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        {
            id: 1,
            pic: slide1
        },
        {
            id: 2,
            pic: slide2
        },
        {
            id: 3,
            pic: slide3
        },
        {
            id: 4,
            pic: slide4
        },
    ]

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, duration);

        return () => clearInterval(intervalId);
    }, [currentIndex, images.length, duration]);

    return (
        <div className="slide-content" id="slide-content">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.pic}
                    className={index === currentIndex ? 'active' : 'none'}
                  
                />
            ))}
        </div>
    );
}

export default ImageSlider;
