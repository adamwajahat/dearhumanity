import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import '../styles/LetterImage.css'

const LetterImage = ({ images }) => {
    const [cursorText, setCursorText] = useState('');
    const customCursorRef = useRef(null);
    const navigate = useNavigate();
  
    const handleMouseEnter = (text) => {
      setCursorText(text);
    };
  
    const handleMouseLeave = () => {
      setCursorText('');
    };
  
    const handleMouseMove = (e) => {
      const cursor = customCursorRef.current;
      if (cursor) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };
    
    const onImageClick = () => {

    }
  
    return (
        <div className='letterPage' onMouseMove={handleMouseMove}>
            {images.map((image, index) => (
                <img
                src={image.url}
                alt={image.text.toLowerCase().replace(/[\s,]+/g, '-')}
                onMouseEnter={() => handleMouseEnter(image.text)}
                onMouseLeave={handleMouseLeave}
                onClick={() => {
                    navigate("/letters/" + image.text.toLowerCase().replace(/[\s,]+/g, '-'));
                }}
                />
            ))}
            {cursorText && (
            <div ref={customCursorRef} className="custom-cursor">
                {cursorText}
            </div>
            )}
        </div>
    );
};

export default LetterImage